/* Laboratori d'equacions — motor de càlcul.
 *
 * Rep els dos membres d'una equació (text) i:
 *  - si tots dos són polinomis, resol l'equació de manera exacta i en genera
 *    el pas a pas (passar-ho tot a un membre, simplificar, primer i segon grau,
 *    incompletes, biquadrades i, per a grau superior, la factorització del
 *    Laboratori de polinomis);
 *  - si no, la tracta com una equació qualsevol: en calcula les solucions de
 *    manera numèrica (aproximada) per poder-les marcar a la gràfica.
 *
 * Necessita polinomis-engine.js (window.PolyLab). Es pot carregar al
 * navegador (window.EqLab) o amb Node (module.exports).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(require("./polinomis-engine.js"));
  else root.EqLab = factory(root.PolyLab);
})(typeof self !== "undefined" ? self : this, function (PL) {
  "use strict";

  var Q = PL.Q;
  var Q0 = new Q(0);
  var Q1 = new Q(1);
  var texQ = PL.texQ;
  var polyTeX = PL.polyTeX;
  var fmtDec = PL.fmtDec;
  var texDec = PL.texDec;
  var XMAX = 100; // interval de cerca numèrica [-XMAX, XMAX]

  function EqErr(msg) {
    var e = new Error(msg);
    e.eqError = true;
    return e;
  }

  /* ------------------------------------------------------------------ */
  /*  Utilitats amb enters (BigInt) i polinomis de Q                     */
  /* ------------------------------------------------------------------ */

  function babs(x) {
    return x < 0n ? -x : x;
  }
  function bgcd(a, b) {
    a = babs(a);
    b = babs(b);
    while (b) {
      var t = a % b;
      a = b;
      b = t;
    }
    return a;
  }
  function blcm(a, b) {
    return (babs(a) / (bgcd(a, b) || 1n)) * babs(b);
  }
  function isqrt(n) {
    if (n < 2n) return n;
    var x = BigInt(Math.floor(Math.sqrt(Number(n))));
    while (x * x > n) x -= 1n;
    while ((x + 1n) * (x + 1n) <= n) x += 1n;
    return x;
  }
  // √D = m·√n, amb n lliure de quadrats (D enter > 0)
  function sqrtSimplify(D) {
    var m = 1n;
    var n = D;
    for (var p = 2n; p * p <= n && p < 200000n; p += p === 2n ? 1n : 2n) {
      while (n % (p * p) === 0n) {
        n /= p * p;
        m *= p;
      }
    }
    var s = isqrt(n);
    if (s * s === n) {
      m *= s;
      n = 1n;
    }
    return { m: m, n: n };
  }
  function ptrim(p) {
    var r = p.slice();
    while (r.length && r[r.length - 1].isZero()) r.pop();
    return r;
  }
  function psub(a, b) {
    var n = Math.max(a.length, b.length);
    var r = [];
    for (var i = 0; i < n; i++) r.push((a[i] || Q0).sub(b[i] || Q0));
    return ptrim(r);
  }
  function pscale(a, c) {
    return ptrim(a.map(function (x) { return x.mul(c); }));
  }
  function pevalQ(p, x) {
    var r = Q0;
    for (var i = p.length - 1; i >= 0; i--) r = r.mul(x).add(p[i]);
    return r;
  }
  function deg(p) {
    return ptrim(p).length - 1;
  }
  function coef(p, k) {
    return p[k] || Q0;
  }

  /* ------------------------------------------------------------------ */
  /*  Expressions generals: anàlisi, TeX i avaluació                      */
  /* ------------------------------------------------------------------ */

  var FUNCS = { sqrt: 1, arrel: 1, cbrt: 1, ln: 1, log: 1, exp: 1, abs: 1 };

  function normalize(src) {
    return String(src === undefined || src === null ? "" : src)
      .replace(/[−–—]/g, "-")
      .replace(/[·×⋅]/g, "*")
      .replace(/\*\*/g, "^")
      .replace(/²/g, "^2")
      .replace(/³/g, "^3")
      .replace(/π/g, "pi")
      .replace(/√/g, "sqrt")
      .replace(/X/g, "x")
      .trim();
  }

  function tokenize(s) {
    var toks = [];
    var i = 0;
    while (i < s.length) {
      var ch = s[i];
      var rest = s.slice(i);
      var m;
      if (/\s/.test(ch)) {
        i++;
      } else if ((m = /^(\d+([.,]\d+)?|[.,]\d+)/.exec(rest))) {
        toks.push({ t: "num", v: m[1].replace(",", ".") });
        i += m[1].length;
      } else if ((m = /^log_?\{?(\d+([.,]\d+)?)\}?/.exec(rest)) && /^log_|^log\d/.test(rest)) {
        toks.push({ t: "fn", v: "logb", base: Number(m[1].replace(",", ".")) });
        i += m[0].length;
      } else if ((m = /^[a-z]+/.exec(rest))) {
        var w = m[0];
        // separem paraules enganxades: p. ex. "xsqrt" o "2ex" -> x, sqrt / e, x
        var j = 0;
        while (j < w.length) {
          var found = null;
          ["sqrt", "arrel", "cbrt", "exp", "abs", "log", "ln", "pi", "e", "x"].some(function (name) {
            if (w.substr(j, name.length) === name) {
              found = name;
              return true;
            }
            return false;
          });
          if (!found) throw EqErr("No entenc «" + w + "». Pots fer servir la variable $x$, nombres, $e$, $\\pi$, les operacions + − · / ^ i les funcions sqrt( ), cbrt( ), ln( ), log( ), log_2( ), exp( ) i abs( ).");
          if (found === "x") toks.push({ t: "x" });
          else if (found === "e" || found === "pi") toks.push({ t: "const", v: found });
          else toks.push({ t: "fn", v: found === "arrel" ? "sqrt" : found });
          j += found.length;
        }
        i += w.length;
      } else if ("+-*/^()".indexOf(ch) >= 0) {
        toks.push({ t: ch });
        i++;
      } else if (ch === "=") {
        throw EqErr("Escriu cada membre de l'equació a la seva caixa, sense el signe =.");
      } else {
        throw EqErr("No entenc el símbol «" + ch + "».");
      }
    }
    return toks;
  }

  function parseExpr(src) {
    var s = normalize(src);
    if (!s) throw EqErr("Falta escriure un dels dos membres de l'equació.");
    var toks = tokenize(s);
    var pos = 0;
    function peek() {
      return pos < toks.length ? toks[pos] : null;
    }
    function is(t) {
      var p = peek();
      return p && p.t === t;
    }
    function startsAtom(p) {
      return p && (p.t === "num" || p.t === "x" || p.t === "const" || p.t === "fn" || p.t === "(");
    }
    function expr() {
      var a;
      if (is("-")) {
        pos++;
        a = { t: "neg", a: term() };
      } else {
        if (is("+")) pos++;
        a = term();
      }
      while (is("+") || is("-")) {
        var op = toks[pos++].t;
        a = { t: "bin", op: op, a: a, b: term() };
      }
      return a;
    }
    function term() {
      var a = unary();
      for (;;) {
        if (is("*") || is("/")) {
          var op = toks[pos++].t;
          a = { t: "bin", op: op, a: a, b: unary() };
        } else if (startsAtom(peek())) {
          a = { t: "bin", op: "*", a: a, b: power(), implicit: true };
        } else break;
      }
      return a;
    }
    function unary() {
      if (is("-")) {
        pos++;
        return { t: "neg", a: unary() };
      }
      if (is("+")) {
        pos++;
        return unary();
      }
      return power();
    }
    function power() {
      var b = atom();
      if (is("^")) {
        pos++;
        return { t: "bin", op: "^", a: b, b: unary() };
      }
      return b;
    }
    function atom() {
      var p = peek();
      if (!p) throw EqErr("L'expressió està incompleta.");
      if (p.t === "num") {
        pos++;
        return { t: "num", v: Number(p.v), s: p.v };
      }
      if (p.t === "x") {
        pos++;
        return { t: "x" };
      }
      if (p.t === "const") {
        pos++;
        return { t: "const", v: p.v };
      }
      if (p.t === "fn") {
        pos++;
        var arg;
        if (is("(")) {
          pos++;
          arg = expr();
          if (!is(")")) throw EqErr("Falta tancar un parèntesi.");
          pos++;
        } else {
          arg = power();
        }
        return { t: "fn", f: p.v, base: p.base, a: arg };
      }
      if (p.t === "(") {
        pos++;
        var e = expr();
        if (!is(")")) throw EqErr("Falta tancar un parèntesi.");
        pos++;
        return e;
      }
      if (p.t === ")") throw EqErr("Hi ha un parèntesi de tancament de més.");
      throw EqErr("Símbol inesperat «" + p.t + "».");
    }
    var tree = expr();
    if (pos < toks.length) throw EqErr(is(")") ? "Hi ha un parèntesi de tancament de més." : "Hi ha un símbol inesperat a l'expressió.");
    return tree;
  }

  function evalNode(n, x) {
    switch (n.t) {
      case "num":
        return n.v;
      case "x":
        return x;
      case "const":
        return n.v === "e" ? Math.E : Math.PI;
      case "neg":
        return -evalNode(n.a, x);
      case "bin": {
        var a = evalNode(n.a, x);
        var b = evalNode(n.b, x);
        if (n.op === "+") return a + b;
        if (n.op === "-") return a - b;
        if (n.op === "*") return a * b;
        if (n.op === "/") return b === 0 ? NaN : a / b;
        // potència: base negativa només amb exponent enter
        if (a < 0 && Math.abs(b - Math.round(b)) > 1e-12) return NaN;
        return Math.pow(a, b);
      }
      case "fn": {
        var v = evalNode(n.a, x);
        switch (n.f) {
          case "sqrt":
            return v < 0 ? NaN : Math.sqrt(v);
          case "cbrt":
            return Math.cbrt(v);
          case "ln":
            return v <= 0 ? NaN : Math.log(v);
          case "log":
            return v <= 0 ? NaN : Math.log10(v);
          case "logb":
            return v <= 0 || n.base <= 0 || n.base === 1 ? NaN : Math.log(v) / Math.log(n.base);
          case "exp":
            return Math.exp(v);
          case "abs":
            return Math.abs(v);
        }
      }
    }
    return NaN;
  }

  // ---- TeX
  function prec(n) {
    if (n.t === "bin") return n.op === "+" || n.op === "-" ? 1 : n.op === "^" ? 4 : 2;
    if (n.t === "neg") return 1.5;
    if (n.t === "num" && n.v < 0) return 1.5;
    return 5;
  }
  function numTeX(n) {
    return n.s.replace(".", "{,}");
  }
  function startsWithDigit(t) {
    return /^[0-9]/.test(t);
  }
  function toTeX(n) {
    switch (n.t) {
      case "num":
        return numTeX(n);
      case "x":
        return "x";
      case "const":
        return n.v === "e" ? "e" : "\\pi";
      case "neg": {
        var inner = toTeX(n.a);
        return "-" + (prec(n.a) <= 1.5 ? "\\left(" + inner + "\\right)" : inner);
      }
      case "fn": {
        var a = toTeX(n.a);
        if (n.f === "sqrt") return "\\sqrt{" + a + "}";
        if (n.f === "cbrt") return "\\sqrt[3]{" + a + "}";
        if (n.f === "exp") return "e^{" + a + "}";
        if (n.f === "abs") return "\\left|" + a + "\\right|";
        var name = n.f === "ln" ? "\\ln" : n.f === "log" ? "\\log" : "\\log_{" + String(n.base).replace(".", "{,}") + "}";
        return name + "\\left(" + a + "\\right)";
      }
      case "bin": {
        var A = toTeX(n.a);
        var B = toTeX(n.b);
        if (n.op === "+") return A + (/^-/.test(B) ? "" : "+") + B;
        if (n.op === "-") return A + "-" + (prec(n.b) <= 1.5 ? "\\left(" + B + "\\right)" : B);
        if (n.op === "/") return "\\dfrac{" + A + "}{" + B + "}";
        if (n.op === "^") {
          var base = prec(n.a) < 5 || n.a.t === "fn" ? "\\left(" + A + "\\right)" : A;
          return base + (B.length === 1 ? "^" + B : "^{" + B + "}");
        }
        // producte
        var Ap = prec(n.a) < 2 ? "\\left(" + A + "\\right)" : A;
        var Bp = prec(n.b) < 2 || (n.b.t === "bin" && n.b.op === "*") ? "\\left(" + B + "\\right)" : B;
        if (prec(n.b) < 2) return Ap + Bp;
        if (startsWithDigit(Bp)) return Ap + "\\cdot " + Bp;
        return Ap + (n.a.t === "num" || n.a.t === "const" || n.implicit ? "" : "\\cdot ") + Bp;
      }
    }
    return "";
  }

  /* ------------------------------------------------------------------ */
  /*  Arrels exactes (forma TeX)                                          */
  /* ------------------------------------------------------------------ */

  // (A + B·√n)/D amb enters; si n=1 és racional
  function surdTeX(A, B, n, D) {
    // simplifiquem per mcd
    var g = bgcd(bgcd(A, B), D) || 1n;
    A /= g;
    B /= g;
    D /= g;
    if (D < 0n) {
      A = -A;
      B = -B;
      D = -D;
    }
    var root = "\\sqrt{" + n + "}";
    var bpart = (B === 1n ? "" : B === -1n ? "-" : String(B)) + root;
    var num = A === 0n ? bpart : String(A) + (B < 0n ? "" : "+") + bpart;
    if (D === 1n) return num;
    if (A === 0n && B < 0n) return "-\\dfrac{" + (B === -1n ? "" : String(-B)) + root + "}{" + D + "}";
    return "\\dfrac{" + num + "}{" + D + "}";
  }
  function surdVal(A, B, n, D) {
    return (Number(A) + Number(B) * Math.sqrt(Number(n))) / Number(D);
  }
  function labelOf(val, exact) {
    return (exact ? "" : "≈ ") + fmtDec(val, exact ? 4 : 3).replace("-", "−");
  }
  function ratLabel(q) {
    var v = q.toNum();
    var d = q.d;
    while (d % 2n === 0n) d /= 2n;
    while (d % 5n === 0n) d /= 5n;
    if (d === 1n && Math.abs(Number(fmtDec(v, 4).replace(",", ".")) - v) < 1e-12) return fmtDec(v, 4).replace("-", "−");
    return (q.n < 0n ? "−" : "") + babs(q.n) + "/" + q.d;
  }
  // solució a partir d'un racional
  function ratSol(q, mult) {
    return { val: q.toNum(), tex: texQ(q), exact: true, rational: q, mult: mult || 1, label: ratLabel(q) };
  }
  function surdSol(A, B, n, D, mult) {
    var v = surdVal(A, B, n, D);
    return { val: v, tex: surdTeX(A, B, n, D), exact: true, mult: mult || 1, label: labelOf(v, false) };
  }
  // ±√q, q racional > 0  ->  dues solucions
  function sqrtOfQ(q) {
    // √(a/b) = √(ab)/b
    var s = sqrtSimplify(q.n * q.d);
    if (s.n === 1n) {
      var r = new Q(s.m, q.d);
      return { plus: ratSol(r), minus: ratSol(r.neg()), tex: texQ(r) };
    }
    var plus = surdSol(0n, s.m, s.n, q.d);
    var minus = surdSol(0n, -s.m, s.n, q.d);
    return { plus: plus, minus: minus, tex: plus.tex };
  }

  /* ------------------------------------------------------------------ */
  /*  Resolució de l'equació polinòmica                                  */
  /* ------------------------------------------------------------------ */

  function P(s) {
    return { t: "p", s: s };
  }
  function M(s) {
    return { t: "math", s: s };
  }
  function eqTeX(p) {
    return polyTeX(p) + "=0";
  }
  function plural(n, s, p) {
    return n === 1 ? s : p;
  }
  var NUMW = ["cap", "una", "dues", "tres", "quatre", "cinc", "sis", "set", "vuit", "nou", "deu", "onze", "dotze"];
  function nw(n) {
    return NUMW[n] || String(n);
  }

  // Resol a·x²+b·x+c=0 (Q), retorna {blocks, sols}
  function quadratic(a, b, c, varName) {
    var v = varName || "x";
    var blocks = [];
    var sols = [];
    var D = b.mul(b).sub(new Q(4).mul(a).mul(c));
    var ta = texQ(a);
    var tb = b.sign() < 0 ? "(" + texQ(b) + ")" : texQ(b);
    var tc = c.sign() < 0 ? "(" + texQ(c) + ")" : texQ(c);
    blocks.push(P("Identifiquem els coeficients: $a=" + ta + "$, $b=" + texQ(b) + "$, $c=" + texQ(c) + "$. Calculem el discriminant:"));
    blocks.push(M("\\Delta=b^2-4ac=" + tb + "^2-4\\cdot " + (a.sign() < 0 ? "(" + ta + ")" : ta) + "\\cdot " + tc + "=" + texQ(D)));
    var twoA = new Q(2).mul(a);
    if (D.sign() < 0) {
      blocks.push(P("Com que $\\Delta<0$, l'equació **no té cap solució real**: l'arrel quadrada d'un nombre negatiu no és un nombre real."));
      return { blocks: blocks, sols: sols, D: D };
    }
    if (D.isZero()) {
      var r = b.neg().div(twoA);
      blocks.push(P("Com que $\\Delta=0$, hi ha **una única solució (doble)**:"));
      blocks.push(M(v + "=\\dfrac{-b}{2a}=\\dfrac{" + texQ(b.neg()) + "}{" + texQ(twoA) + "}=" + texQ(r)));
      var s0 = ratSol(r, 2);
      sols.push(s0);
      return { blocks: blocks, sols: sols, D: D };
    }
    blocks.push(P("Com que $\\Delta>0$, hi ha **dues solucions diferents**. Apliquem la fórmula:"));
    // passem a enters: multipliquem a, b, c pel mcm dels denominadors
    var L = blcm(blcm(a.d, b.d), c.d);
    var A = a.n * (L / a.d);
    var B = b.n * (L / b.d);
    var C = c.n * (L / c.d);
    var DI = B * B - 4n * A * C;
    var sq = sqrtSimplify(DI);
    var head = v + "=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}=\\dfrac{" + texQ(b.neg()) + "\\pm\\sqrt{" + texQ(D) + "}}{" + texQ(twoA) + "}";
    if (sq.n === 1n) {
      var r1 = new Q(-B + sq.m, 2n * A);
      var r2 = new Q(-B - sq.m, 2n * A);
      if (L === 1n) head += "=\\dfrac{" + texQ(b.neg()) + "\\pm " + sq.m + "}{" + texQ(twoA) + "}";
      blocks.push(M(head));
      var lo = r1.cmp(r2) < 0 ? r1 : r2;
      var hi = r1.cmp(r2) < 0 ? r2 : r1;
      blocks.push(M(v + "_1=" + texQ(lo) + ",\\qquad " + v + "_2=" + texQ(hi)));
      sols.push(ratSol(lo), ratSol(hi));
    } else {
      blocks.push(M(head));
      var s1 = surdSol(-B, -sq.m, sq.n, 2n * A);
      var s2 = surdSol(-B, sq.m, sq.n, 2n * A);
      var pair = s1.val < s2.val ? [s1, s2] : [s2, s1];
      if (sq.m !== 1n || L !== 1n) blocks.push(P("Simplifiquem l'arrel ($\\sqrt{" + DI + "}" + (sq.m === 1n ? "" : "=" + sq.m + "\\sqrt{" + sq.n + "}") + "$" + (L !== 1n ? ", després de multiplicar els coeficients per $" + L + "$ per treure denominadors" : "") + "):"));
      blocks.push(M(v + "_1=" + pair[0].tex + "\\approx " + texDec(pair[0].val, 4) + ",\\qquad " + v + "_2=" + pair[1].tex + "\\approx " + texDec(pair[1].val, 4)));
      sols.push(pair[0], pair[1]);
    }
    return { blocks: blocks, sols: sols, D: D };
  }

  function solvePoly(pl, pr, texL, texR) {
    var steps = [];
    function step(title, blocks) {
      steps.push({ title: title, blocks: blocks });
    }
    var p = psub(pl, pr);
    var rZero = pr.length === 0;
    var pdiff = p;

    // 1. Tot al primer membre
    var b1 = [];
    if (rZero) {
      b1.push(P("L'equació ja està igualada a zero."));
      if (texL.replace(/\s/g, "") !== polyTeX(p)) {
        b1.push(P("Desenvolupem i reduïm termes semblants:"));
        b1.push(M(eqTeX(p)));
      }
    } else {
      var needPar = /[+\-]/.test(texR.replace(/^-/, "")) || /^-/.test(texR);
      b1.push(P("Passem tots els termes al primer membre: restem el segon membre als dos costats perquè l'equació quedi igualada a zero."));
      var moved = texL + "-" + (needPar ? "\\left(" + texR + "\\right)" : texR) + "=0";
      b1.push(M(moved));
      if (moved !== eqTeX(p)) {
        b1.push(P("Desenvolupem i reduïm termes semblants:"));
        b1.push(M(eqTeX(p)));
      }
    }
    step(rZero ? "Equació igualada a zero" : "Passem tot al primer membre", b1);

    // casos sense x
    if (!p.length) {
      step("Resultat", [P("S'han anul·lat tots els termes i queda $0=0$, una igualtat que és certa per a **qualsevol valor de $x$**. L'equació és una **identitat**: tots els nombres reals en són solució.")]);
      return { kind: "identity", steps: steps, sols: [], p: p, pdiff: pdiff };
    }
    if (p.length === 1) {
      step("Resultat", [P("S'han anul·lat tots els termes amb $x$ i queda $" + texQ(p[0]) + "=0$, una igualtat falsa. Cap valor de $x$ la fa certa: l'equació **no té solució**.")]);
      return { kind: "none", steps: steps, sols: [], p: p, pdiff: pdiff };
    }

    // 2. Simplifiquem: coeficients enters, sense factor comú numèric, coeficient principal positiu
    var L = 1n;
    var G = 0n;
    p.forEach(function (c) {
      L = blcm(L, c.d);
    });
    p.forEach(function (c) {
      G = bgcd(G, c.n * (L / c.d));
    });
    var lead = p[p.length - 1];
    var k = new Q(L, G); // multipliquem per k
    if (lead.sign() < 0) k = k.neg();
    var q = pscale(p, k);
    if (!k.eq(Q1)) {
      var verb;
      if (k.eq(new Q(-1))) verb = "Multipliquem els dos membres per $-1$ perquè el coeficient de grau més alt sigui positiu";
      else if (k.isInt()) verb = "Multipliquem els dos membres per $" + texQ(k) + "$" + (L !== 1n ? " per treure els denominadors" : "");
      else if (k.n === 1n || k.n === -1n) verb = "Dividim els dos membres per $" + texQ(new Q(k.d * (k.n < 0n ? -1n : 1n))) + "$, que és factor comú de tots els coeficients";
      else verb = "Multipliquem els dos membres per $" + texQ(k) + "$ per treballar amb coeficients enters i tan petits com sigui possible";
      step("Simplifiquem", [P(verb + ". Obtenim una equació equivalent (amb les mateixes solucions):"), M(eqTeX(q))]);
    }

    var n = q.length - 1;
    var sols = [];
    var a, b, c;
    if (n === 1) {
      a = q[1];
      b = q[0];
      var r = b.neg().div(a);
      step("Equació de primer grau", a.eq(Q1) ? [P("Aïllem $x$ passant el terme independent a l'altre membre:"), M("x=" + texQ(r))] : [P("Aïllem $x$:"), M(polyTeX([Q0, a]) + "=" + texQ(b.neg()) + "\\;\\Rightarrow\\; x=" + (texQ(r) === "\\dfrac{" + texQ(b.neg()) + "}{" + texQ(a) + "}" ? texQ(r) : "\\dfrac{" + texQ(b.neg()) + "}{" + texQ(a) + "}=" + texQ(r)))]);
      sols.push(ratSol(r));
    } else if (n === 2) {
      a = q[2];
      b = coef(q, 1);
      c = coef(q, 0);
      if (b.isZero() && c.isZero()) {
        step("Equació de segon grau incompleta", [P("Només hi ha el terme de grau $2$:"), M(polyTeX([Q0, Q0, a]) + "=0\\;\\Rightarrow\\; x^2=0\\;\\Rightarrow\\; x=0"), P("És una solució **doble**.")]);
        sols.push(ratSol(Q0, 2));
      } else if (b.isZero()) {
        var rhs = c.neg().div(a);
        var bl = [P("Falta el terme de primer grau ($b=0$). Aïllem $x^2$:"), M(polyTeX([Q0, Q0, a]) + "=" + texQ(c.neg()) + "\\;\\Rightarrow\\; x^2=" + texQ(rhs))];
        if (rhs.sign() < 0) {
          bl.push(P("Un quadrat no pot ser negatiu: l'equació **no té cap solució real**."));
        } else {
          var sq = sqrtOfQ(rhs);
          bl.push(P("Fem l'arrel quadrada, recordant que hi ha dos signes:"));
          bl.push(M("x=\\pm\\sqrt{" + texQ(rhs) + "}=\\pm " + sq.tex + (sq.plus.rational ? "" : "\\approx \\pm " + texDec(sq.plus.val, 4))));
          sols.push(sq.minus, sq.plus);
        }
        step("Equació de segon grau incompleta", bl);
      } else if (c.isZero()) {
        var r2 = b.neg().div(a);
        var fac = polyTeX([b, a]);
        step("Equació de segon grau incompleta", [
          P("Falta el terme independent ($c=0$). Traiem factor comú $x$:"),
          M("x\\left(" + fac + "\\right)=0"),
          P("Un producte val zero si algun dels factors val zero:"),
          M("x=0\\qquad \\text{o}\\qquad " + fac + "=0\\;\\Rightarrow\\; x=" + texQ(r2)),
          P("Compte: si haguéssim dividit per $x$, hauríem perdut la solució $x=0$."),
        ]);
        var two = [ratSol(Q0), ratSol(r2)].sort(function (u, w) { return u.val - w.val; });
        sols = two;
      } else {
        var res = quadratic(a, b, c, "x");
        step("Equació de segon grau: fórmula", res.blocks);
        sols = res.sols;
      }
    } else if (n === 4 && coef(q, 1).isZero() && coef(q, 3).isZero() && !coef(q, 0).isZero()) {
      // biquadrada
      a = q[4];
      b = coef(q, 2);
      c = q[0];
      var bq = [P("És una equació **biquadrada**: només hi ha potències parells de $x$. Fem el canvi de variable $t=x^2$ (aleshores $x^4=t^2$):"), M(polyTeX([c, b, a], "t").replace(/x/g, "t") + "=0")];
      var tb = [];
      var rt;
      if (b.isZero()) {
        var rr = c.neg().div(a);
        tb.push(P("Falta el terme en $t$: $t^2=" + texQ(rr) + "$."));
        if (rr.sign() < 0) {
          tb.push(P("Un quadrat no pot ser negatiu: no hi ha cap valor de $t$."));
          rt = { sols: [] };
        } else {
          var s2 = sqrtOfQ(rr);
          rt = { sols: [s2.minus, s2.plus] };
          tb.push(M("t=\\pm " + s2.tex));
        }
      } else {
        rt = quadratic(a, b, c, "t");
        tb = tb.concat(rt.blocks);
      }
      step("Equació biquadrada: canvi de variable", bq.concat(tb));
      var und = [P("Desfem el canvi: $x^2=t$, és a dir, $x=\\pm\\sqrt{t}$. Només els valors de $t$ positius donen solucions.")];
      var tvals = rt.sols;
      if (!tvals.length) und = [P("Com que no hi ha cap valor de $t$, l'equació **no té cap solució real**.")];
      tvals.forEach(function (ts) {
        if (ts.val < 0) {
          und.push(M("t=" + ts.tex + "\\;\\Rightarrow\\; x^2=" + ts.tex + "\\quad\\text{(sense solució: } x^2\\geq 0\\text{)}"));
          return;
        }
        if (ts.rational) {
          var sq2 = sqrtOfQ(ts.rational);
          und.push(M("t=" + ts.tex + "\\;\\Rightarrow\\; x^2=" + ts.tex + "\\;\\Rightarrow\\; x=\\pm " + sq2.tex));
          sols.push(Object.assign(sq2.minus, { mult: ts.mult }), Object.assign(sq2.plus, { mult: ts.mult }));
        } else {
          var vv = Math.sqrt(ts.val);
          var tx = "\\sqrt{" + ts.tex + "}";
          und.push(M("t=" + ts.tex + "\\;\\Rightarrow\\; x=\\pm" + tx + "\\approx \\pm " + texDec(vv, 4)));
          sols.push({ val: -vv, tex: "-" + tx, exact: true, mult: ts.mult, label: labelOf(-vv, false) });
          sols.push({ val: vv, tex: tx, exact: true, mult: ts.mult, label: labelOf(vv, false) });
        }
      });
      if (tvals.length) step("Desfem el canvi de variable", und);
      sols.sort(function (u, w) { return u.val - w.val; });
    } else {
      // grau superior: factorització del Laboratori de polinomis
      var an = PL.analyze(q);
      step("Factoritzem el polinomi", [
        P("Anomenem $p(x)=" + polyTeX(q) + "$. Les solucions de l'equació $p(x)=0$ són les **arrels reals** de $p(x)$; per trobar-les, factoritzem el polinomi."),
      ]);
      an.steps.forEach(function (st) {
        if (st.title === "El polinomi") return;
        if (st.title === "Resultat") st = { title: "Factorització", blocks: st.blocks };
        steps.push(st);
      });
      an.roots.forEach(function (r) {
        sols.push({ val: r.val, tex: r.approx ? r.exact : r.exact, exact: !r.approx, approxTeX: r.approx, mult: r.mult, label: r.label, rational: null });
      });
      sols.forEach(function (s) {
        if (s.approxTeX) s.label = labelOf(s.val, false);
      });
    }

    // Solucions
    var fb = [];
    if (!sols.length) {
      fb.push(P("L'equació **no té cap solució real**. A la gràfica, les dues corbes no es tallen."));
    } else {
      var list = sols.map(function (s, i) {
        var lhs = "x_{" + (i + 1) + "}";
        var eq = s.approxTeX ? lhs + s.tex : lhs + "=" + s.tex;
        return eq + (s.mult > 1 ? "\\ \\text{(" + (s.mult === 2 ? "doble" : s.mult === 3 ? "triple" : "multiplicitat " + s.mult) + ")}" : "");
      });
      fb.push(P("L'equació té " + nw(sols.length) + " " + plural(sols.length, "solució real", "solucions reals") + ":"));
      fb.push(M(list.join(",\\qquad ")));
      // comprovació amb les solucions racionals
      var checks = [];
      sols.forEach(function (s) {
        if (!s.rational) return;
        var vl = pevalQ(pl, s.rational);
        var vr = pevalQ(pr, s.rational);
        checks.push("x=" + s.tex + ":\\quad \\text{primer membre}=" + texQ(vl) + ",\\quad \\text{segon membre}=" + texQ(vr));
      });
      if (checks.length) {
        fb.push(P("**Comprovació.** Substituïm a l'equació original:"));
        checks.forEach(function (ch) {
          fb.push(M(ch));
        });
      }
      fb.push(P("A la gràfica, cada solució és l'abscissa d'un punt on es tallen les dues corbes."));
    }
    step("Solucions", fb);
    return { kind: "solved", steps: steps, sols: sols, p: q, pdiff: pdiff };
  }

  /* ------------------------------------------------------------------ */
  /*  Resolució numèrica (equació qualsevol)                              */
  /* ------------------------------------------------------------------ */

  function numericSolutions(fl, fr) {
    function h(x) {
      var a = fl(x);
      var b = fr(x);
      return isFinite(a) && isFinite(b) ? a - b : NaN;
    }
    function scale(x) {
      return 1 + Math.abs(fl(x)) + Math.abs(fr(x));
    }
    var N = 40000;
    var dx = (2 * XMAX) / N;
    var xs = [];
    var ys = [];
    for (var i = 0; i <= N; i++) {
      var x = -XMAX + i * dx;
      xs.push(x);
      ys.push(h(x));
    }
    var roots = [];
    function add(x) {
      for (var j = 0; j < roots.length; j++) if (Math.abs(roots[j] - x) < 1e-6 * (1 + Math.abs(x))) return;
      roots.push(x);
    }
    for (var i2 = 0; i2 < N; i2++) {
      var y0 = ys[i2];
      var y1 = ys[i2 + 1];
      if (!isFinite(y0) || !isFinite(y1)) continue;
      if (y0 === 0) {
        add(xs[i2]);
        continue;
      }
      if (y0 * y1 < 0) {
        var lo = xs[i2];
        var hi = xs[i2 + 1];
        var flo = y0;
        for (var it = 0; it < 80; it++) {
          var mid = (lo + hi) / 2;
          var fm = h(mid);
          if (!isFinite(fm)) break;
          if (flo * fm <= 0) hi = mid;
          else {
            lo = mid;
            flo = fm;
          }
        }
        var xr = (lo + hi) / 2;
        var fr0 = h(xr);
        if (isFinite(fr0) && Math.abs(fr0) < 1e-6 * scale(xr)) add(xr);
      } else if (i2 > 0 && isFinite(ys[i2 - 1])) {
        // possible punt de tangència: mínim local de |h|
        var a0 = Math.abs(ys[i2 - 1]);
        var a1 = Math.abs(y0);
        var a2 = Math.abs(y1);
        if (a1 <= a0 && a1 <= a2 && ys[i2 - 1] * y0 > 0 && y0 * y1 > 0 && a1 < 1e-2 * scale(xs[i2])) {
          var L = xs[i2 - 1];
          var R = xs[i2 + 1];
          var gr = (Math.sqrt(5) - 1) / 2;
          for (var it2 = 0; it2 < 100; it2++) {
            var c1 = R - gr * (R - L);
            var c2 = L + gr * (R - L);
            if (Math.abs(h(c1)) < Math.abs(h(c2))) R = c2;
            else L = c1;
          }
          var xm = (L + R) / 2;
          if (Math.abs(h(xm)) < 1e-9 * scale(xm)) add(xm);
        }
      }
    }
    roots.sort(function (a, b) { return a - b; });
    if (roots.length > 30) return { many: true };
    return roots.map(function (x) {
      var xi = Math.round(x);
      var isInt = Math.abs(x - xi) < 1e-7 && Math.abs(h(xi)) < 1e-12 * scale(xi);
      if (isInt) x = xi;
      return { val: x, tex: isInt ? String(xi) : "\\approx " + texDec(x, 4), approxTeX: !isInt, exact: isInt, mult: 1, label: isInt ? String(xi).replace("-", "−") : labelOf(x, false) };
    });
  }

  function describeNonPoly(tree) {
    var kinds = {};
    (function walk(n) {
      if (!n) return;
      if (n.t === "fn") kinds[n.f === "sqrt" || n.f === "cbrt" ? "arrel" : n.f === "exp" ? "exp" : n.f === "abs" ? "abs" : "log"] = 1;
      if (n.t === "bin" && n.op === "/" && hasX(n.b)) kinds.frac = 1;
      if (n.t === "bin" && n.op === "^" && hasX(n.b)) kinds.exp = 1;
      if (n.t === "bin" && n.op === "^" && !(n.b.t === "num" && Number.isInteger(n.b.v))) {
        if (!hasX(n.b)) kinds.arrel = 1;
      }
      ["a", "b"].forEach(function (k) { walk(n[k]); });
    })(tree);
    return kinds;
  }
  function hasX(n) {
    if (!n) return false;
    if (n.t === "x") return true;
    return hasX(n.a) || hasX(n.b);
  }

  /* ------------------------------------------------------------------ */
  /*  Punt d'entrada                                                     */
  /* ------------------------------------------------------------------ */

  function solve(textL, textR) {
    var tl = parseExpr(textL);
    var tr = parseExpr(textR);
    var texL = toTeX(tl);
    var texR = toTeX(tr);
    var fl = function (x) { return evalNode(tl, x); };
    var fr = function (x) { return evalNode(tr, x); };
    var pl = null;
    var pr = null;
    try {
      pl = PL.parsePoly(normalize(textL));
      pr = PL.parsePoly(normalize(textR));
    } catch (e) {
      if (!(e && e.polyError)) throw e;
      if (/grau 12 com a màxim|massa grans/.test(e.message)) throw EqErr(e.message);
      pl = pr = null;
    }
    var base = { texL: texL, texR: texR, eqTeX: texL + "=" + texR, fl: fl, fr: fr };
    if (pl && pr) {
      var d = Math.max(deg(pl), deg(pr));
      var r;
      try {
        r = solvePoly(pl, pr, texL, texR);
      } catch (e2) {
        if (e2 && e2.polyError) throw EqErr(e2.message);
        throw e2;
      }
      return Object.assign(base, r, { mode: "poly", degree: deg(r.p), pl: pl, pr: pr, maxDeg: d });
    }
    var kinds = describeNonPoly({ t: "bin", op: "+", a: tl, b: tr });
    var sols = numericSolutions(fl, fr);
    if (sols.many) {
      return Object.assign(base, { mode: "numeric", kind: "many", sols: [], steps: [{ title: "Solucions aproximades", blocks: [P("Els dos membres coincideixen (o gairebé) en tot un interval: l'equació té **infinites solucions** en aquesta zona, i el laboratori no les pot llistar. Mira la gràfica.")] }] });
    }
    var what = [];
    if (kinds.frac) what.push("la $x$ en un denominador");
    if (kinds.arrel) what.push("arrels");
    if (kinds.exp) what.push("la $x$ en un exponent");
    if (kinds.log) what.push("logaritmes");
    if (kinds.abs) what.push("valors absoluts");
    var whatTxt = what.length ? " (hi ha " + (what.length > 1 ? what.slice(0, -1).join(", ") + " i " + what[what.length - 1] : what[0]) + ")" : "";
    var blocks = [
      P("Aquesta equació **no és polinòmica**" + whatTxt + ". El laboratori només en fa el pas a pas quan els dos membres són polinomis; aquí en trobem les solucions de manera **aproximada**, buscant on es tallen les dues gràfiques a l'interval $[-" + XMAX + "," + XMAX + "]$."),
    ];
    if (!sols.length) blocks.push(P("No hem trobat cap solució en aquest interval: les dues gràfiques no es tallen."));
    else {
      blocks.push(P("Hem trobat " + nw(sols.length) + " " + plural(sols.length, "solució", "solucions") + ". En cada una comprovem que els dos membres donen (aproximadament) el mateix valor:"));
      sols.forEach(function (s, i) {
        blocks.push(M("x_{" + (i + 1) + "}" + (s.approxTeX ? s.tex : "=" + s.tex) + ":\\quad \\text{primer membre}\\approx " + texDec(fl(s.val), 4) + ",\\quad \\text{segon membre}\\approx " + texDec(fr(s.val), 4)));
      });
    }
    blocks.push(P("Per resoldre-la de manera exacta, fes servir el mètode del seu tipus (vegeu la teoria): aïllar i elevar al quadrat les arrels, igualar bases o aplicar logaritmes, multiplicar pel denominador comú... i **comprova sempre les solucions**."));
    return Object.assign(base, { mode: "numeric", kind: sols.length ? "solved" : "none", sols: sols, steps: [{ title: "Solucions aproximades", blocks: blocks }] });
  }

  return {
    polyTeX: polyTeX,
    solve: solve,
    parseExpr: parseExpr,
    toTeX: toTeX,
    evalNode: evalNode,
    numericSolutions: numericSolutions,
    XMAX: XMAX,
  };
});
