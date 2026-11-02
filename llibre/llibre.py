#!/usr/bin/env python3
"""Genera els llibres en LaTeX de «Matemàtiques I» a partir dels apunts del web.

El contingut surt sempre dels fitxers Markdown de docs/: cada tema té una
pàgina docs/<tema>/llibre.md que diu quins apartats entren al llibre i en
quin ordre. Aquest script els converteix a LaTeX, amb l'estil de
llibre/estil/apunts.sty, i opcionalment compila el PDF amb XeLaTeX.

Ús (des de l'arrel del repositori):

    python3 llibre/llibre.py algebra          # genera llibre/tex/algebra/
    python3 llibre/llibre.py algebra --pdf    # i a més compila llibre/pdf/2_algebra.pdf
                                              # (i en deixa una còpia a docs/assets/llibre/,
                                              # que és la que enllaça el web)

Fitxers generats (no s'han d'editar a mà, es tornen a generar):

    llibre/tex/<tema>/<tema>.tex     document principal (portada, índex, tema)
    llibre/tex/<tema>/capitol.tex    contingut del tema
"""
import html
import math
import os
from fractions import Fraction
import re
import shutil
import subprocess
import sys

ARREL = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ARREL, "docs")
LLIBRE = os.path.join(ARREL, "llibre")

# Número de tema (ordre del menú del web)
TEMES = {
    "nombres-reals": 1,
    "algebra": 2,
    "equacions": 3,
    "geometria": 4,
    "analisi": 5,
}
CURS = "1r de Batxillerat"

# Context de la conversió: carpeta del fitxer Markdown i carpeta de sortida
CTX = {"src": DOCS, "dest": DOCS}

CAIXES = {  # tipus d'avís del web -> entorn de apunts.sty
    "abstract": "definicio",
    "example": "exemple",
    "note": "nota",
    "info": "nota",
    "tip": "propietat",
    "success": "propietat",
    "warning": "compte",
    "danger": "compte",
}


# ---------------------------------------------------------------- text en línia

def _math_split(s):
    """Separa el text en trossos de text i de fórmula ($...$)."""
    parts, i, buf = [], 0, ""
    while i < len(s):
        c = s[i]
        if c == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            buf += "$"
            i += 2
            continue
        if c == "$":
            j = s.find("$", i + 1)
            while j != -1 and s[j - 1] == "\\":
                j = s.find("$", j + 1)
            if j == -1:
                buf += c
                i += 1
                continue
            parts.append(("t", buf))
            buf = ""
            parts.append(("m", s[i:j + 1]))
            i = j + 1
            continue
        buf += c
        i += 1
    parts.append(("t", buf))
    return parts


ESC = {"\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "#": r"\#", "_": r"\_",
       "{": r"\{", "}": r"\}", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}"}


def _esc(t):
    return "".join(ESC.get(c, c) for c in t)


MOSTRES = [  # llegenda de les gràfiques d'inequacions (svg.ineq-sw del web)
    ("ineq-on", r"\mostracorba{}"),
    ("ineq-band", r"\mostrainterval{}"),
    ("is-closed", r"\mostraple{}"),
    ("is-open", r"\mostrabuit{}"),
]


def inline(s):
    """Converteix una línia de text Markdown (amb fórmules) a LaTeX."""
    raw = []

    def _svg(m):
        cmd = next((c for k, c in MOSTRES if k in m.group(0)), "")
        raw.append(cmd)
        return "\x02%d\x02" % (len(raw) - 1)

    s = re.sub(r'<svg class="ineq-sw".*?</svg>\s*', _svg, s)
    s = html.unescape(s)
    out = []
    for kind, piece in _math_split(s):
        if kind == "m":
            out.append(piece)
            continue
        t = piece
        t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)          # enllaços: només el text
        codes = []
        t = re.sub(r"`([^`]+)`", lambda m: codes.append(m.group(1)) or f"\x01{len(codes)-1}\x01", t)
        t = _esc(t)
        t = re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", t)
        t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\\emph{\1}", t)
        t = re.sub(r"\x01(\d+)\x01", lambda m: r"\texttt{" + _esc(codes[int(m.group(1))]) + "}", t)
        out.append(t)
    res = "".join(out)
    # La negreta pot englobar fórmules: **...$x$...**
    res = re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", res)
    res = re.sub("\x02(\\d+)\x02", lambda m: raw[int(m.group(1))] + " ", res)
    return res


def plain(s):
    """Versió sense format (per als marcadors del PDF)."""
    s = re.sub(r"\$([^$]*)\$", lambda m: re.sub(r"[\\{}^_]", "", m.group(1)), s)
    return _esc(re.sub(r"[*`]", "", s))


def heading(cmd, title):
    t = inline(title)
    if "$" in title:
        return "\\%s{\\texorpdfstring{%s}{%s}}" % (cmd, t, plain(title))
    return "\\%s{%s}" % (cmd, t)


# ---------------------------------------------------------------- taules

def _cells(line):
    """Separa les cel·les d'una fila de taula sense trencar les fórmules."""
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    cells, buf, inmath = [], "", False
    i = 0
    while i < len(line):
        c = line[i]
        if c == "\\" and i + 1 < len(line):
            buf += line[i:i + 2]
            i += 2
            continue
        if c == "$":
            inmath = not inmath
        if c == "|" and not inmath:
            cells.append(buf.strip())
            buf = ""
        else:
            buf += c
        i += 1
    cells.append(buf.strip())
    return cells


def table(lines):
    head = _cells(lines[0])
    sep = _cells(lines[1])
    rows = [_cells(l) for l in lines[2:]]
    n = len(head)
    rows = [(r + [""] * n)[:n] for r in rows]
    aligns = []
    for s in sep:
        s = s.strip()
        aligns.append("c" if s.startswith(":") and s.endswith(":") else "r" if s.endswith(":") else "l")
    allrows = [head] + rows
    has_head = any(c.strip() for c in head)

    # Taula de Ruffini: primera cel·la buida i residu enquadrat a l'última fila
    if not head[0].strip() and any("\\boxed" in c for c in rows[-1]):
        spec = "r|" + "r" * (n - 1)
        out = ["\\begin{center}", "\\renewcommand{\\arraystretch}{1.25}", "\\begin{tabular}{%s}" % spec]
        for k, r in enumerate(allrows):
            line = " & ".join(inline(c) for c in r) + " \\\\"
            if k == len(allrows) - 2:
                line += " \\hline"
            out.append(line)
        out += ["\\end{tabular}", "\\end{center}"]
        return "\n".join(out)

    textlen = max(len(re.sub(r"\$[^$]*\$", "xxxx", c)) for r in allrows for c in r)
    wide = textlen > 38
    if wide:
        spec = "".join("l" if k == 0 else "Y" for k in range(n))
        begin, end = "\\begin{tabularx}{\\linewidth}{%s}" % spec, "\\end{tabularx}"
    else:
        spec = "".join(aligns)
        begin, end = "\\begin{tabular}{%s}" % spec, "\\end{tabular}"
    out = ["\\begin{center}", begin, "\\toprule"]
    if has_head:
        out.append(" & ".join("\\textbf{%s}" % inline(c) if c and "$" not in c else inline(c) for c in head) + " \\\\")
        out.append("\\midrule")
    for r in rows:
        out.append(" & ".join(inline(c) for c in r) + " \\\\")
    out += ["\\bottomrule", end, "\\end{center}"]
    return "\n".join(out)


# ---------------------------------------------------------------- blocs HTML

def _html_cell(c):
    c = re.sub(r"<var>(.*?)</var>", r"\1", c)
    c = re.sub(r"<sup>(.*?)</sup>", r"^{\1}", c)
    c = re.sub(r"<[^>]+>", "", c)
    c = html.unescape(c).replace("−", "-").replace(" ", "")
    return c


def divisio_llarga(block):
    """La divisió llarga «en forma clàssica» (div.divisio-llarga-visual)."""
    title = re.search(r'__titol">(.*?)</div>', block, re.S).group(1).strip()
    peu = re.search(r'__peu">(.*?)</div>', block, re.S).group(1).strip()
    rows = re.findall(r"<tr([^>]*)>(.*?)</tr>", block, re.S)
    lines = []
    for k, (attrs, body) in enumerate(rows):
        cells = [_html_cell(c) for c in re.findall(r"<td[^>]*>(.*?)</td>", body, re.S)]
        line = " & ".join(cells) + " \\\\"
        if k == 0:
            line += " \\cline{5-5}"
        if "__resta" in attrs:
            line += " \\cline{1-4}"
        lines.append(line)
    return "\n".join([
        "\\begin{figuraapunts}{%s}" % inline(title),
        "$\\begin{array}{rrrr|l}",
        *lines,
        "\\end{array}$",
        "\\peufigura{%s}" % inline(peu),
        "\\end{figuraapunts}",
    ])


def _poly(expr):
    """Coeficients (a, b, c) d'un polinomi de grau <= 2 escrit com al web: 2x^2-x-3."""
    e = expr.replace(" ", "").replace("−", "-")
    co = {0: 0.0, 1: 0.0, 2: 0.0}
    for sign, num, var, exp in re.findall(r"([+-]?)(\d*\.?\d*)(x?)(?:\^(\d))?", e):
        if not (num or var):
            continue
        k = (float(num) if num else 1.0) * (-1 if sign == "-" else 1)
        d = (int(exp) if exp else 1) if var else 0
        co[d] += k
    return co[2], co[1], co[0]


def _roots(a, b, c):
    if a == 0:
        return [] if b == 0 else [-c / b]
    disc = b * b - 4 * a * c
    if disc < -1e-12:
        return []
    if abs(disc) < 1e-12:
        return [-b / (2 * a)]
    r = math.sqrt(disc)
    return sorted([(-b - r) / (2 * a), (-b + r) / (2 * a)])


def _num(x):
    f = Fraction(x).limit_denominator(100)
    if f.denominator == 1:
        return str(f.numerator)
    if abs(float(f) - x) < 1e-9:
        return "%s%d/%d" % ("-" if f < 0 else "", abs(f.numerator), f.denominator)
    return ("%.2f" % x).replace(".", "{,}")


def _bands(f, roots, rel):
    """Intervals solució (com equacions-lab.js): [(lo, hi, loTancat, hiTancat)]."""
    test = {"lt": lambda y: y < 0, "le": lambda y: y <= 0, "gt": lambda y: y > 0, "ge": lambda y: y >= 0}[rel]
    strict = rel in ("lt", "gt")
    edges = [-math.inf] + roots + [math.inf]
    pieces = []
    for k in range(len(edges) - 1):
        a, b = edges[k], edges[k + 1]
        t = (0 if b == math.inf else b - 1) if a == -math.inf else (a + 1 if b == math.inf else (a + b) / 2)
        y = f(t)
        pieces.append((a, b, False, abs(y) > 1e-9 and test(y)))
        if b != math.inf:
            pieces.append((b, b, True, not strict))
    out, cur = [], None
    for a, b, pt, ok in pieces:
        if not ok:
            if cur:
                out.append(cur)
            cur = None
            continue
        if cur is None:
            cur = [a, b, pt, pt]
        else:
            cur[1], cur[3] = b, pt
    if cur:
        out.append(cur)
    return out


def grafica_inequacio(div, amplada):
    """Gràfica d'una div.ineq-demo del web, dibuixada amb pgfplots."""
    at = dict(re.findall(r'data-([a-z]+)="([^"]*)"', div))
    a, b, c = _poly(at["poly"])
    f = lambda x: a * x * x + b * x + c
    roots = _roots(a, b, c)
    if "view" in at:
        x0, x1, y0, y1 = (float(v) for v in at["view"].split(","))
    else:
        x0, x1 = min(roots + [0]) - 2, max(roots + [0]) + 2
        ys = [f(x0 + (x1 - x0) * k / 50) for k in range(51)]
        y0, y1 = min(ys + [0]) - 1, max(ys + [0]) + 1
    labels = [l.replace("−", "-") for l in at.get("labels", "").split(";") if l]
    expr = "{%s*x^2 + %s*x + %s}" % (repr(a), repr(b), repr(c))
    L = ["\\begin{center}", "\\begin{tikzpicture}",
         "\\begin{axis}[grafica, width=%s, height=%s, xmin=%g, xmax=%g, ymin=%g, ymax=%g]"
         % (amplada, "0.5*" + amplada if "*" not in amplada else amplada, x0, x1, y0, y1),
         "\\addplot[g-corba, domain=%g:%g, samples=160] %s;" % (x0, x1, expr)]
    rel = at.get("rel")
    bands = _bands(f, roots, rel) if rel else []
    for lo, hi, _, _ in bands:
        lo, hi = max(lo, x0), min(hi, x1)
        if hi - lo > 1e-9:
            L.append("\\addplot[g-solcorba, domain=%g:%g, samples=100] %s;" % (lo, hi, expr))
            L.append("\\draw[g-interval] (axis cs:%g,0) -- (axis cs:%g,0);" % (lo, hi))
    for k, r in enumerate(roots):
        lab = labels[k] if k < len(labels) else _num(r)
        if rel:
            inside = rel in ("le", "ge")
            L.append("\\draw[%s] (axis cs:%g,0) circle[radius=2.4pt];" % ("g-ple" if inside else "g-buit", r))
        else:
            L.append("\\fill[g-arrel] (axis cs:%g,0) circle[radius=2.2pt];" % r)
        L.append("\\node[below=3pt, font=\\scriptsize, fill=white, inner sep=1pt] at (axis cs:%g,0) {$%s$};" % (r, lab))
    L += ["\\end{axis}", "\\end{tikzpicture}", "\\end{center}"]
    return "\n".join(L)


def _fills(lines):
    """Blocs <div>...</div> de primer nivell dins d'un bloc HTML."""
    out, depth, cur = [], 0, []
    for l in lines:
        if depth == 0 and not l.strip().startswith("<div"):
            continue
        cur.append(l)
        depth += l.count("<div") - l.count("</div>")
        if depth == 0:
            out.append(cur)
            cur = []
    return out


def html_block(block, amplada="0.62\\linewidth"):
    m = re.match(r'\s*<div[^>]*class="([^"]*)"', block)
    cls = m.group(1) if m else ""
    if "no-print" in cls:
        return ""
    if "divisio-llarga-visual" in cls:
        return divisio_llarga(block)
    if "ineq-demo" in cls:
        return grafica_inequacio(block.split("\n")[0], amplada)
    if "ineq-pair" in cls:
        cols = []
        for fill in _fills(block.split("\n")[1:-1]):
            inner = _dedent(fill[1:-1], len(fill[0]) - len(fill[0].lstrip()))
            cos = []
            for x in blocks_parts(inner, amplada="0.92\\linewidth"):
                cos.append(x)
            cols.append("\\begin{minipage}[t]{0.48\\linewidth}\n\\centering\n%s\n\\end{minipage}" % "\n\n".join(cos))
        return "\\begin{center}\n" + "\\hfill\n".join(cols) + "\n\\end{center}"
    if 'markdown="1"' in block.split("\n", 1)[0]:
        inner = block.split("\n")[1:-1]
        return blocks(inner)
    raise ValueError("Bloc HTML sense conversió: " + block[:80])


# ---------------------------------------------------------------- blocs Markdown

RE_ITEM = re.compile(r"^( *)([-*+]|\d+\.)\s+(.*)$")
RE_ADM = re.compile(r'^(!!!|\?\?\?\+?)\s+(\w+)(?:\s+"(.*)")?\s*$')


def _dedent(lines, n=4):
    return [l[n:] if l.startswith(" " * n) else l.lstrip() for l in lines]


def _indented_block(lines, i, n=4):
    """Línies que pertanyen a un bloc sagnat que comença a la línia i."""
    body = []
    while i < len(lines):
        l = lines[i]
        if l.strip() == "" or l.startswith(" " * n):
            body.append(l)
            i += 1
        else:
            break
    while body and body[-1].strip() == "":
        body.pop()
        i -= 1
    return body, i


def lists(lines):
    """Converteix un bloc de llista (amb subllistes sagnades)."""
    first = RE_ITEM.match(lines[0])
    base = len(first.group(1))
    env = "enumerate" if first.group(2)[0].isdigit() else "itemize"
    items, cur = [], None
    for l in lines:
        m = RE_ITEM.match(l)
        if m and len(m.group(1)) == base:
            cur = [m.group(3)]
            items.append(cur)
        else:
            cur.append(l[base:] if l.startswith(" " * base) else l)
    out = ["\\begin{%s}" % env]
    for it in items:
        head, rest = it[0], it[1:]
        rest = _dedent(rest, 4) if any(r.startswith("    ") for r in rest) else [r.strip() for r in rest]
        out.append("\\item " + blocks([head] + rest).strip())
    out.append("\\end{%s}" % env)
    return "\n".join(out)


def blocks(lines, amplada="0.62\\linewidth"):
    return "\n\n".join(x for x in blocks_parts(lines, amplada) if x)


def imatge(path, alt):
    src = os.path.normpath(os.path.join(CTX["src"], path))
    rel = os.path.relpath(src, CTX["dest"]).replace(os.sep, "/")
    return ("\\begin{center}\n\\includegraphics[max width=0.8\\linewidth, max height=5cm]{%s}\n\\end{center}" % rel)


def blocks_parts(lines, amplada="0.62\\linewidth"):
    out = []
    i = 0
    para = []

    def flush():
        if para:
            out.append(inline(" ".join(p.strip() for p in para)))
            para.clear()

    while i < len(lines):
        l = lines[i]
        s = l.strip()
        if s == "":
            flush()
            i += 1
            continue
        m = re.match(r"^(#{1,4})\s+(.*)$", l)
        if m:
            flush()
            level = len(m.group(1))
            cmd = {1: "section", 2: "subsection", 3: "subsubsection", 4: "paragraph"}[level]
            out.append(heading(cmd, m.group(2).strip()))
            i += 1
            continue
        m = RE_ADM.match(l)
        if m:
            flush()
            kind, title = m.group(2), m.group(3) or ""
            env = CAIXES.get(kind, "nota")
            body, i = _indented_block(lines, i + 1)
            out.append("\\begin{%s}{%s}\n%s\n\\end{%s}" % (env, inline(title), blocks(_dedent(body)), env))
            continue
        if s.startswith("$$"):
            flush()
            if s.endswith("$$") and len(s) > 4:
                math = s[2:-2]
                i += 1
            else:
                j = i + 1
                body = []
                while not lines[j].strip().endswith("$$"):
                    body.append(lines[j].strip())
                    j += 1
                last = lines[j].strip()[:-2]
                if last:
                    body.append(last)
                first = s[2:]
                math = "\n".join(([first] if first else []) + body)
                i = j + 1
            out.append("\\[\n%s\n\\]" % math.strip())
            continue
        if s.startswith("|") and i + 1 < len(lines) and re.match(r"^\s*\|?\s*:?-{2,}", lines[i + 1]):
            flush()
            j = i
            while j < len(lines) and lines[j].strip().startswith("|"):
                j += 1
            out.append(table([x.strip() for x in lines[i:j]]))
            i = j
            continue
        if s.startswith("<div"):
            flush()
            depth, j, buf = 0, i, []
            while j < len(lines):
                buf.append(lines[j])
                depth += lines[j].count("<div") - lines[j].count("</div>")
                j += 1
                if depth <= 0:
                    break
            out.append(html_block("\n".join(_dedent(buf, len(l) - len(l.lstrip()))), amplada))
            i = j
            continue
        if RE_ITEM.match(l):
            flush()
            base = len(RE_ITEM.match(l).group(1))
            j = i + 1
            while j < len(lines):
                lj = lines[j]
                if lj.strip() == "":
                    k = j
                    while k < len(lines) and lines[k].strip() == "":
                        k += 1
                    if k < len(lines) and (lines[k].startswith(" " * (base + 2)) or
                                           (RE_ITEM.match(lines[k]) and len(RE_ITEM.match(lines[k]).group(1)) == base)):
                        j = k
                        continue
                    break
                if RE_ITEM.match(lj) or lj.startswith(" " * (base + 2)):
                    j += 1
                    continue
                break
            out.append(lists([x for x in lines[i:j] if x.strip()]))
            i = j
            continue
        if s.startswith(">"):
            flush()
            j = i
            q = []
            while j < len(lines) and lines[j].strip().startswith(">"):
                q.append(lines[j].strip()[1:].lstrip())
                j += 1
            out.append("\\begin{quote}\n%s\n\\end{quote}" % blocks(q))
            i = j
            continue
        m = re.match(r"^!\[([^\]]*)\]\(([^)\s]+)\)\s*(\{[^}]*\})?\s*$", s)
        if m:
            flush()
            out.append(imatge(m.group(2), m.group(1)))
            i += 1
            continue
        if re.match(r"^(-{3,}|\*{3,})$", s):
            flush()
            out.append("\\medskip")
            i += 1
            continue
        para.append(l)
        i += 1
    flush()
    return out


# ---------------------------------------------------------------- documents

def llegeix(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    text = re.sub(r"\A---\n.*?\n---\n", "", text, flags=re.S)        # capçalera YAML
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)                 # comentaris
    return text.split("\n")


def capitol(tema):
    """Contingut LaTeX del tema: introducció + apartats de llibre.md."""
    llibre_md = os.path.join(DOCS, tema, "llibre.md")
    fitxers = re.findall(r'^--8<-- "([^"]+)"', open(llibre_md, encoding="utf-8").read(), re.M)
    parts = []
    titol = None
    for rel in fitxers:
        CTX["src"] = os.path.dirname(os.path.join(DOCS, rel))
        lines = llegeix(os.path.join(DOCS, rel))
        if rel.endswith("index.md"):
            # Introducció del tema: el títol fa de capítol i el text que hi ha
            # abans del primer «##» n'és la presentació. Els apartats «Apartats»,
            # «Per practicar» i «Eines interactives» són navegació del web.
            titol = re.match(r"^#\s+(.*)$", lines[0]).group(1).strip()
            k = next((n for n, x in enumerate(lines) if x.startswith("## ")), len(lines))
            intro = blocks(lines[1:k])
            parts.append(heading("chapter", titol) + "\n\n" + intro)
        else:
            parts.append(blocks(lines))
    return titol, "\n\n".join(parts) + "\n"


PRINCIPAL = r"""%% Document generat per llibre/llibre.py a partir de docs/%(tema)s/.
%% No l'editis a mà: torna'l a generar.
\documentclass[11pt,a4paper,twoside,openright]{book}
\usepackage{apunts}
\hypersetup{pdftitle={Matemàtiques I. Tema %(num)d: %(titol)s},pdfauthor={Jordi Irazuzta i Ignasi Irazuzta},pdflang={ca}}
\begin{document}
\frontmatter
\portada{%(num)d}{%(titol)s}{%(curs)s}
\cleardoublepage
\tableofcontents
\mainmatter
\setcounter{chapter}{%(prev)d}
\input{capitol}
\end{document}
"""


def genera(tema):
    num = TEMES[tema]
    dest = os.path.join(LLIBRE, "tex", tema)
    CTX["dest"] = dest
    titol, cos = capitol(tema)
    os.makedirs(dest, exist_ok=True)
    capcalera = "%% Contingut generat per llibre/llibre.py a partir de docs/%s/.\n%% No l'editis a mà: torna'l a generar.\n\n" % tema
    with open(os.path.join(dest, "capitol.tex"), "w", encoding="utf-8") as f:
        f.write(capcalera + cos)
    with open(os.path.join(dest, tema + ".tex"), "w", encoding="utf-8") as f:
        f.write(PRINCIPAL % dict(tema=tema, num=num, prev=num - 1, titol=titol, curs=CURS))
    return dest, num


def compila(tema, dest, num):
    env = dict(os.environ)
    env["TEXINPUTS"] = os.path.join(LLIBRE, "estil") + os.pathsep + env.get("TEXINPUTS", "")
    for _ in range(3):  # tres passades: índex, marcadors i números de pàgina
        r = subprocess.run(["xelatex", "-interaction=nonstopmode", "-halt-on-error", tema + ".tex"],
                           cwd=dest, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
        if r.returncode != 0:
            sys.stdout.write(r.stdout[-3000:])
            sys.exit("Error en compilar " + tema)
    os.makedirs(os.path.join(LLIBRE, "pdf"), exist_ok=True)
    out = os.path.join(LLIBRE, "pdf", "%d_%s.pdf" % (num, tema.replace("-", "_")))
    shutil.copy(os.path.join(dest, tema + ".pdf"), out)
    web = os.path.join(DOCS, "assets", "llibre")  # còpia que enllaça la pàgina del tema al web
    os.makedirs(web, exist_ok=True)
    shutil.copy(out, os.path.join(web, os.path.basename(out)))
    for ext in (".aux", ".log", ".out", ".toc", ".pdf"):
        p = os.path.join(dest, tema + ext)
        if os.path.exists(p):
            os.remove(p)
    return out


def main(argv):
    temes = [a for a in argv if not a.startswith("--")]
    if not temes:
        sys.exit(__doc__)
    for tema in temes:
        dest, num = genera(tema)
        print("Generat:", os.path.relpath(dest, ARREL))
        if "--pdf" in argv:
            print("PDF:", os.path.relpath(compila(tema, dest, num), ARREL))


if __name__ == "__main__":
    main(sys.argv[1:])
