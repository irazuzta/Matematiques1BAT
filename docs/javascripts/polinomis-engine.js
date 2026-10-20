/* Laboratori de polinomis — motor de càlcul.
 *
 * Funcions pures, sense DOM: llegeix un polinomi, el factoritza seguint el
 * procediment dels apunts (factor comú, arrels racionals amb Ruffini, equació
 * de segon grau) i retorna el resultat i les explicacions pas a pas.
 * Tot el càlcul és exacte (fraccions amb BigInt) excepte l'últim recurs per a
 * factors sense arrels racionals, que utilitza càlcul numèric i ho indica.
 *
 * Es pot carregar al navegador (window.PolyLab) o amb Node (module.exports).
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.PolyLab = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var MAXDEG = 12;
  var MAXCOEF = 1000000000n; // 10^9

  /* ------------------------------------------------------------------ */
  /*  Enters i racionals                                                 */
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
    return (babs(a) / bgcd(a, b)) * babs(b);
  }
  function isqrt(n) {
    if (n < 2n) return n;
    var x = BigInt(Math.floor(Math.sqrt(Number(n))));
    while (x * x > n) x -= 1n;
    while ((x + 1n) * (x + 1n) <= n) x += 1n;
    return x;
  }

  function Q(n, d) {
    if (!(this instanceof Q)) return new Q(n, d);
    n = BigInt(n);
    d = d === undefined ? 1n : BigInt(d);
    if (d === 0n) throw new Error("divisió per zero");
    if (d < 0n) {
      n = -n;
      d = -d;
    }
    var g = bgcd(n, d) || 1n;
    this.n = n / g;
    this.d = d / g;
  }
  Q.prototype.add = function (o) {
    return new Q(this.n * o.d + o.n * this.d, this.d * o.d);
  };
  Q.prototype.sub = function (o) {
    return new Q(this.n * o.d - o.n * this.d, this.d * o.d);
  };
  Q.prototype.mul = function (o) {
    return new Q(this.n * o.n, this.d * o.d);
  };
  Q.prototype.div = function (o) {
    return new Q(this.n * o.d, this.d * o.n);
  };
  Q.prototype.neg = function () {
    return new Q(-this.n, this.d);
  };
  Q.prototype.abs = function () {
    return new Q(babs(this.n), this.d);
  };
  Q.prototype.eq = function (o) {
    return this.n === o.n && this.d === o.d;
  };
  Q.prototype.cmp = function (o) {
    var l = this.n * o.d;
    var r = o.n * this.d;
    return l < r ? -1 : l > r ? 1 : 0;
  };
  Q.prototype.isZero = function () {
    return this.n === 0n;
  };
  Q.prototype.isInt = function () {
    return this.d === 1n;
  };
  Q.prototype.sign = function () {
    return this.n < 0n ? -1 : this.n > 0n ? 1 : 0;
  };
  Q.prototype.toNum = function () {
    return Number(this.n) / Number(this.d);
  };
  Q.prototype.key = function () {
    return this.n + "/" + this.d;
  };

  var Q0 = new Q(0);
  var Q1 = new Q(1);

  /* ------------------------------------------------------------------ */
  /*  Polinomis: arrays de Q, índex = grau                               */
  /* ------------------------------------------------------------------ */

  function ptrim(p) {
    var r = p.slice();
    while (r.length && r[r.length - 1].isZero()) r.pop();
    return r;
  }
  function pdeg(p) {
    return ptrim(p).length - 1;
  }
  function plead(p) {
    p = ptrim(p);
    return p[p.length - 1];
  }
  function padd(a, b) {
    var n = Math.max(a.length, b.length);
    var r = [];
    for (var i = 0; i < n; i++) r.push((a[i] || Q0).add(b[i] || Q0));
    return ptrim(r);
  }
  function psub(a, b) {
    var n = Math.max(a.length, b.length);
    var r = [];
    for (var i = 0; i < n; i++) r.push((a[i] || Q0).sub(b[i] || Q0));
    return ptrim(r);
  }
  function pmul(a, b) {
    a = ptrim(a);
    b = ptrim(b);
    if (!a.length || !b.length) return [];
    var r = [];
    for (var i = 0; i < a.length + b.length - 1; i++) r.push(Q0);
    for (i = 0; i < a.length; i++)
      for (var j = 0; j < b.length; j++) r[i + j] = r[i + j].add(a[i].mul(b[j]));
    return ptrim(r);
  }
  function pscale(a, c) {
    return ptrim(a.map(function (x) {
      return x.mul(c);
    }));
  }
  function pderiv(a) {
    var r = [];
    for (var i = 1; i < a.length; i++) r.push(a[i].mul(new Q(i)));
    return ptrim(r);
  }
  function pdivmod(a, b) {
    a = ptrim(a);
    b = ptrim(b);
    if (!b.length) throw new Error("divisió per zero");
    var q = [];
    var r = a.slice();
    var db = b.length - 1;
    var lb = b[db];
    for (var i = 0; i <= a.length - 1 - db; i++) q.push(Q0);
    while (r.length - 1 >= db && r.length) {
      var shift = r.length - 1 - db;
      var c = r[r.length - 1].div(lb);
      q[shift] = c;
      for (var j = 0; j <= db; j++) r[shift + j] = r[shift + j].sub(c.mul(b[j]));
      r = ptrim(r);
    }
    return { q: ptrim(q), r: r };
  }
  function pmonic(a) {
    a = ptrim(a);
    return a.length ? pscale(a, Q1.div(a[a.length - 1])) : a;
  }
  function pgcd(a, b) {
    a = ptrim(a);
    b = ptrim(b);
    while (b.length) {
      var r = pdivmod(a, b).r;
      a = b;
      b = r;
    }
    return pmonic(a);
  }
  function ppow(a, e) {
    var r = [Q1];
    for (var i = 0; i < e; i++) r = pmul(r, a);
    return r;
  }
  function peval(p, x) {
    var r = Q0;
    for (var i = p.length - 1; i >= 0; i--) r = r.mul(x).add(p[i]);
    return r;
  }
  function pevalNum(c, x) {
    // c: doubles, ordre ascendent
    var r = 0;
    for (var i = c.length - 1; i >= 0; i--) r = r * x + c[i];
    return r;
  }
  function peq(a, b) {
    a = ptrim(a);
    b = ptrim(b);
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }
  // part primitiva: coeficients enters sense divisor comú i coeficient principal > 0
  function content(p) {
    p = ptrim(p);
    var L = 1n;
    p.forEach(function (c) {
      L = blcm(L, c.d);
    });
    var ints = p.map(function (c) {
      return (c.n * L) / c.d;
    });
    var g = 0n;
    ints.forEach(function (c) {
      g = bgcd(g, c);
    });
    var sgn = ints[ints.length - 1] < 0n ? -1n : 1n;
    var cst = new Q(sgn * g, L);
    var prim = ints.map(function (c) {
      return new Q(c / (sgn * g));
    });
    return { c: cst, P: prim };
  }

  /* ------------------------------------------------------------------ */
  /*  Format TeX                                                         */
  /* ------------------------------------------------------------------ */

  function texQ(q) {
    var s = q.n < 0n ? "-" : "";
    var n = babs(q.n);
    if (q.d === 1n) return s + n;
    return s + "\\dfrac{" + n + "}{" + q.d + "}";
  }
  function texQPar(q) {
    // entre parèntesis si és negatiu
    return q.sign() < 0 ? "\\left(" + texQ(q) + "\\right)" : texQ(q);
  }
  function xpow(k) {
    return k === 0 ? "" : k === 1 ? "x" : k < 10 ? "x^" + k : "x^{" + k + "}";
  }
  function polyTeX(p, v) {
    p = ptrim(p);
    if (!p.length) return "0";
    var out = "";
    for (var k = p.length - 1; k >= 0; k--) {
      var c = p[k];
      if (c.isZero()) continue;
      var neg = c.sign() < 0;
      var a = c.abs();
      var coef = k > 0 && a.eq(Q1) ? "" : texQ(a);
      var term = coef + xpow(k);
      if (term === "") term = "1";
      if (out === "") out = (neg ? "-" : "") + term;
      else out += (neg ? "-" : "+") + term;
    }
    return out;
  }
  function fmtDec(x, dec) {
    dec = dec === undefined ? 4 : dec;
    var s = Math.abs(x) < 0.5 * Math.pow(10, -dec) ? "0" : x.toFixed(dec);
    if (s.indexOf(".") >= 0) s = s.replace(/0+$/, "").replace(/\.$/, "");
    if (s === "-0") s = "0";
    return s.replace(".", ",");
  }
  function texDec(x, dec) {
    return fmtDec(x, dec).replace(",", "{,}");
  }
  function paren(t) {
    return /\\dfrac|\\sqrt/.test(t) ? "\\left(" + t + "\\right)" : "(" + t + ")";
  }
  function powTeX(t, m) {
    return m > 1 ? t + "^" + (m < 10 ? m : "{" + m + "}") : t;
  }

  /* ------------------------------------------------------------------ */
  /*  Arrels exactes                                                     */
  /* ------------------------------------------------------------------ */
  // {kind:'rat', q} | {kind:'surd', a,b,n,d}  ((a + b√n)/d) | {kind:'approx', x}

  function rootNum(r) {
    if (r.kind === "rat") return r.q.toNum();
    if (r.kind === "surd") return (Number(r.a) + Number(r.b) * Math.sqrt(Number(r.n))) / Number(r.d);
    return r.x;
  }
  function surdNumTeX(a, b, n) {
    var parts = [];
    if (a !== 0n) parts.push([a < 0n ? -1 : 1, String(babs(a))]);
    if (b !== 0n) parts.push([b < 0n ? -1 : 1, (babs(b) === 1n ? "" : String(babs(b))) + "\\sqrt{" + n + "}"]);
    var s = "";
    parts.forEach(function (p, i) {
      if (i === 0) s += (p[0] < 0 ? "-" : "") + p[1];
      else s += (p[0] < 0 ? " - " : " + ") + p[1];
    });
    return s;
  }
  function fracTeX(num, d) {
    return d === 1n ? num : "\\dfrac{" + num + "}{" + d + "}";
  }
  function rootValueTeX(r) {
    if (r.kind === "rat") return texQ(r.q);
    if (r.kind === "approx") return texDec(r.x);
    return fracTeX(surdNumTeX(r.a, r.b, r.n), r.d);
  }
  // el valor de l'arrel amb signe: ±(a+b√n)/d
  function rootSignedTeX(r) {
    return rootValueTeX(r);
  }
  function factorTeX(r) {
    // factor (x - r)
    if (r.kind === "rat") {
      var q = r.q;
      if (q.isZero()) return "x";
      return q.sign() > 0 ? "x-" + texQ(q) : "x+" + texQ(q.abs());
    }
    if (r.kind === "approx") {
      return r.x >= 0 ? "x-" + texDec(r.x) : "x+" + texDec(-r.x);
    }
    var lead = r.a !== 0n ? r.a : r.b;
    if (r.d === 1n) {
      // x - (a + b√n)  ->  x - a - b√n
      return "x" + (r.a === 0n ? "" : (r.a > 0n ? " - " : " + ") + babs(r.a)) +
        (r.b > 0n ? " - " : " + ") + (babs(r.b) === 1n ? "" : String(babs(r.b))) + "\\sqrt{" + r.n + "}";
    }
    if (lead > 0n) return "x-" + fracTeX(surdNumTeX(r.a, r.b, r.n), r.d);
    return "x+" + fracTeX(surdNumTeX(-r.a, -r.b, r.n), r.d);
  }
  function plainLabel(r) {
    if (r.kind === "rat") {
      var q = r.q;
      return (q.n < 0n ? "\u2212" : "") + babs(q.n) + (q.d === 1n ? "" : "/" + q.d);
    }
    return "\u2248 " + fmtDec(rootNum(r), 3).replace("-", "\u2212");
  }
  function factorHasFrac(r) {
    return r.kind === "rat" ? !r.q.isInt() : r.kind === "surd";
  }

  // simplifica √D = m√n (D enter > 0)
  function sqrtSimplify(D) {
    var m = 1n;
    var n = D;
    var primes = [2n, 3n, 5n, 7n, 11n, 13n];
    for (var p = 17n; p < 100000n; p += 2n) primes.push(p);
    for (var i = 0; i < primes.length; i++) {
      var p2 = primes[i] * primes[i];
      if (p2 > n) break;
      while (n % p2 === 0n) {
        n /= p2;
        m *= primes[i];
      }
    }
    var s = isqrt(n);
    if (s * s === n) {
      m *= s;
      n = 1n;
    }
    return { m: m, n: n };
  }

  // arrels reals d'α x² + β x + γ (Δ > 0); retorna dues arrels {kind}
  function quadRoots(al, be, ga) {
    var D = be * be - 4n * al * ga;
    var sq = sqrtSimplify(D);
    var two = 2n * al;
    if (sq.n === 1n) {
      return [new Q(-be - sq.m, two), new Q(-be + sq.m, two)].map(function (q) {
        return { kind: "rat", q: q };
      });
    }
    var g = bgcd(bgcd(be, sq.m), two);
    var a = -be / g;
    var b = sq.m / g;
    var d = two / g;
    return [
      { kind: "surd", a: a, b: -b, n: sq.n, d: d },
      { kind: "surd", a: a, b: b, n: sq.n, d: d },
    ];
  }

  /* ------------------------------------------------------------------ */
  /*  Arrels numèriques (Aberth-Ehrlich)                                 */
  /* ------------------------------------------------------------------ */

  function numericRoots(coefAsc) {
    // coefAsc: doubles; retorna [[re, im], ...]
    var n = coefAsc.length - 1;
    var lead = coefAsc[n];
    var c = coefAsc.map(function (x) {
      return x / lead;
    }); // mònic
    var rad = 0;
    for (var i = 0; i < n; i++) rad = Math.max(rad, Math.abs(c[i]));
    rad = 1 + rad;
    var re = [];
    var im = [];
    for (i = 0; i < n; i++) {
      var ang = (2 * Math.PI * i) / n + 0.4;
      var r0 = rad * 0.5;
      re.push(r0 * Math.cos(ang));
      im.push(r0 * Math.sin(ang));
    }
    function horner(zr, zi) {
      // retorna p(z), p'(z)
      var pr = 1;
      var pi = 0;
      var dr = 0;
      var di = 0;
      for (var k = n - 1; k >= 0; k--) {
        var ndr = dr * zr - di * zi + pr;
        var ndi = dr * zi + di * zr + pi;
        dr = ndr;
        di = ndi;
        var npr = pr * zr - pi * zi + c[k];
        var npi = pr * zi + pi * zr;
        pr = npr;
        pi = npi;
      }
      return [pr, pi, dr, di];
    }
    for (var it = 0; it < 500; it++) {
      var maxw = 0;
      for (i = 0; i < n; i++) {
        var h = horner(re[i], im[i]);
        var den = h[2] * h[2] + h[3] * h[3];
        if (den === 0) continue;
        // ratio = p/p'
        var rr = (h[0] * h[2] + h[1] * h[3]) / den;
        var ri = (h[1] * h[2] - h[0] * h[3]) / den;
        var sr = 0;
        var si = 0;
        for (var j = 0; j < n; j++) {
          if (j === i) continue;
          var dx = re[i] - re[j];
          var dy = im[i] - im[j];
          var dd = dx * dx + dy * dy || 1e-300;
          sr += dx / dd;
          si += -dy / dd;
        }
        // w = ratio / (1 - ratio * s)
        var tr = 1 - (rr * sr - ri * si);
        var ti = -(rr * si + ri * sr);
        var td = tr * tr + ti * ti || 1e-300;
        var wr = (rr * tr + ri * ti) / td;
        var wi = (ri * tr - rr * ti) / td;
        re[i] -= wr;
        im[i] -= wi;
        maxw = Math.max(maxw, Math.hypot(wr, wi) / (1 + Math.hypot(re[i], im[i])));
      }
      if (maxw < 1e-15) break;
    }
    // pulit amb Newton
    for (i = 0; i < n; i++) {
      for (var s = 0; s < 4; s++) {
        var hh = horner(re[i], im[i]);
        var dn = hh[2] * hh[2] + hh[3] * hh[3];
        if (dn === 0) break;
        var qr = (hh[0] * hh[2] + hh[1] * hh[3]) / dn;
        var qi = (hh[1] * hh[2] - hh[0] * hh[3]) / dn;
        if (!isFinite(qr) || !isFinite(qi)) break;
        re[i] -= qr;
        im[i] -= qi;
      }
    }
    var out = [];
    for (i = 0; i < n; i++) out.push([re[i], im[i]]);
    return out;
  }

  /* ------------------------------------------------------------------ */
  /*  Lectura (parser)                                                   */
  /* ------------------------------------------------------------------ */

  function PErr(msg) {
    var e = new Error(msg);
    e.polyError = true;
    return e;
  }

  function qFromDecimal(str) {
    var parts = str.split(".");
    var ip = parts[0] || "0";
    var fp = parts[1] || "";
    return new Q(BigInt(ip + fp), 10n ** BigInt(fp.length));
  }

  function parsePoly(src) {
    var s = String(src === undefined || src === null ? "" : src).trim();
    s = s
      .replace(/[−–—]/g, "-")
      .replace(/[·×⋅]/g, "*")
      .replace(/\*\*/g, "^")
      .replace(/²/g, "^2")
      .replace(/³/g, "^3")
      .replace(/\s+/g, "");
    s = s.replace(/^[a-zA-Z]\((x|X)\)=/, "").replace(/=0$/, "").replace(/X/g, "x").replace(/,/g, ".");
    if (!s) throw PErr("Escriu un polinomi, per exemple x^3 - 2x^2 - 5x + 6.");

    var toks = [];
    var i = 0;
    while (i < s.length) {
      var ch = s[i];
      var m;
      if ((m = /^(\d+\.?\d*|\.\d+)/.exec(s.slice(i)))) {
        toks.push({ t: "num", v: m[1] });
        i += m[1].length;
      } else if (ch === "x") {
        toks.push({ t: "x" });
        i++;
      } else if ("+-*/^()".indexOf(ch) >= 0) {
        toks.push({ t: ch });
        i++;
      } else {
        throw PErr("No entenc el símbol «" + ch + "». Només es pot fer servir la variable x, nombres i les operacions + − · / ^ i parèntesis.");
      }
    }
    var pos = 0;
    function peek() {
      return pos < toks.length ? toks[pos].t : null;
    }
    function checkDeg(p) {
      if (pdeg(p) > MAXDEG) throw PErr("El laboratori treballa amb polinomis de grau " + MAXDEG + " com a màxim.");
      return p;
    }
    function isConst(p) {
      return pdeg(p) <= 0;
    }
    function parseExpr() {
      var sign = 1;
      if (peek() === "+") pos++;
      else if (peek() === "-") {
        pos++;
        sign = -1;
      }
      var v = parseTerm();
      if (sign < 0) v = pscale(v, new Q(-1));
      while (peek() === "+" || peek() === "-") {
        var op = toks[pos++].t;
        var w = parseTerm();
        v = op === "+" ? padd(v, w) : psub(v, w);
      }
      return v;
    }
    function startsFactor(t) {
      return t === "x" || t === "(";
    }
    function parseTerm() {
      var v = parsePower();
      for (;;) {
        var t = peek();
        if (t === "*") {
          pos++;
          v = checkDeg(pmul(v, parsePower()));
        } else if (t === "/") {
          pos++;
          var d = parsePower();
          if (!isConst(d) || !d.length) throw PErr("Només es pot dividir per un nombre diferent de zero (no és un polinomi si dividim per x).");
          v = pscale(v, Q1.div(d[0]));
        } else if (startsFactor(t)) {
          v = checkDeg(pmul(v, parsePower()));
        } else if (t === "num") {
          throw PErr("Falta un operador abans d'un nombre. Per exemple, escriu 2x^2 (el coeficient va davant de la x) i x^2 per a «x al quadrat».");
        } else break;
      }
      return v;
    }
    function parsePower() {
      var base = parseAtom();
      if (peek() === "^") {
        pos++;
        var neg = false;
        var paren = false;
        if (peek() === "(") {
          paren = true;
          pos++;
        }
        if (peek() === "-") {
          neg = true;
          pos++;
        }
        if (peek() !== "num" || toks[pos].v.indexOf(".") >= 0) throw PErr("L'exponent ha de ser un nombre enter positiu.");
        var e = parseInt(toks[pos++].v, 10);
        if (paren) {
          if (peek() !== ")") throw PErr("Falta tancar el parèntesi de l'exponent.");
          pos++;
        }
        if (neg && e !== 0) throw PErr("No s'admeten exponents negatius: aleshores no seria un polinomi.");
        if (peek() === "^") throw PErr("No s'admeten potències de potències sense parèntesis.");
        if (e > 40 || (pdeg(base) > 0 && pdeg(base) * e > MAXDEG)) throw PErr("El laboratori treballa amb polinomis de grau " + MAXDEG + " com a màxim.");
        return checkDeg(ppow(base, e));
      }
      return base;
    }
    function parseAtom() {
      var t = peek();
      if (t === "num") return ptrim([qFromDecimal(toks[pos++].v)]);
      if (t === "x") {
        pos++;
        return [Q0, Q1];
      }
      if (t === "(") {
        pos++;
        var v = parseExpr();
        if (peek() !== ")") throw PErr("Falta tancar un parèntesi.");
        pos++;
        return v;
      }
      if (t === null) throw PErr("L'expressió està incompleta.");
      throw PErr("Símbol inesperat «" + (t === "num" ? "" : t) + "».");
    }
    var res = parseExpr();
    if (pos < toks.length) {
      throw PErr(peek() === ")" ? "Hi ha un parèntesi de tancament de més." : "Símbol inesperat en aquesta posició de l'expressió.");
    }
    return ptrim(res);
  }

  /* ------------------------------------------------------------------ */
  /*  Ruffini                                                            */
  /* ------------------------------------------------------------------ */

  function ruffini(coefsDesc, r) {
    // coefsDesc: Q de major a menor grau (amb zeros); r: Q
    var prods = [];
    var quot = [];
    var carry = null;
    for (var i = 0; i < coefsDesc.length; i++) {
      var v = i === 0 ? coefsDesc[0] : coefsDesc[i].add(carry);
      if (i > 0) prods.push(carry);
      quot.push(v);
      carry = v.mul(r);
    }
    var rem = quot.pop();
    return { root: r, coefs: coefsDesc, prods: prods, quot: quot, rem: rem };
  }
  function ruffiniBlock(coefsDesc, r) {
    var R = ruffini(coefsDesc, r);
    return {
      t: "ruffini",
      root: texQ(r),
      coefs: R.coefs.map(texQ),
      prods: R.prods.map(texQ),
      quot: R.quot.map(texQ),
      rem: texQ(R.rem),
      remZero: R.rem.isZero(),
      data: R,
    };
  }
  function descCoefs(p) {
    p = ptrim(p);
    var r = [];
    for (var i = p.length - 1; i >= 0; i--) r.push(p[i]);
    return r;
  }
  function fromDesc(d) {
    var r = [];
    for (var i = d.length - 1; i >= 0; i--) r.push(d[i]);
    return ptrim(r);
  }

  /* ------------------------------------------------------------------ */
  /*  Candidats a arrel racional                                         */
  /* ------------------------------------------------------------------ */

  function divisorsOf(nBig) {
    var n = Number(babs(nBig));
    var small = [];
    var large = [];
    for (var i = 1; i * i <= n; i++) {
      if (n % i === 0) {
        small.push(i);
        if (i * i !== n) large.push(n / i);
      }
    }
    return small.concat(large.reverse());
  }

  function candidateList(prim) {
    // prim: polinomi enter primitiu amb terme independent no nul
    var a0 = babs(prim[0].n);
    var an = babs(prim[prim.length - 1].n);
    var ps = divisorsOf(a0);
    var qs = divisorsOf(an);
    var seen = {};
    var abs = [];
    ps.forEach(function (p) {
      qs.forEach(function (q) {
        var v = new Q(p, q);
        var k = v.key();
        if (!seen[k]) {
          seen[k] = 1;
          abs.push(v);
        }
      });
    });
    abs.sort(function (x, y) {
      var xi = x.isInt() ? 0 : 1;
      var yi = y.isInt() ? 0 : 1;
      if (xi !== yi) return xi - yi;
      return x.cmp(y);
    });
    return abs;
  }

  /* ------------------------------------------------------------------ */
  /*  Factorització                                                      */
  /* ------------------------------------------------------------------ */

  function tinyList(items, head, tail) {
    // retalla una llista llarga d'ítems TeX
    if (items.length <= head + tail + 1) return items.join(",\\ ");
    return items.slice(0, head).join(",\\ ") + ",\\ \\ldots,\\ " + items.slice(items.length - tail).join(",\\ ");
  }

  function isOddEven(p) {
    // només potències parelles
    for (var i = 1; i < p.length; i += 2) if (!p[i].isZero()) return false;
    return true;
  }

  function analyze(p, inputText) {
    p = ptrim(p);
    var steps = [];
    var an = null;
    function step(title, blocks) {
      steps.push({ title: title, blocks: blocks });
    }
    function P(s) {
      return { t: "p", s: s };
    }
    function M(s) {
      return { t: "math", s: s };
    }

    // ---- casos especials
    if (!p.length) {
      return {
        ok: true,
        special: "zero",
        p: p,
        steps: [],
        message: "És el polinomi zero: qualsevol valor de $x$ el fa zero, així que no té sentit parlar-ne d'arrels ni de factorització.",
        roots: [],
        factors: [],
        degree: -1,
      };
    }
    var big = false;
    p.forEach(function (c) {
      if (babs(c.n) > MAXCOEF || c.d > MAXCOEF) big = true;
    });
    if (big) throw PErr("Els coeficients són massa grans (el màxim és 10^9).");

    var deg = p.length - 1;
    an = p[deg];
    var expanded = /[()*]/.test(inputText || "");

    // ---- pas 1: el polinomi
    var b1 = [];
    if (expanded) b1.push(P("Desenvolupem l'expressió i ordenem els termes de major a menor grau:"));
    else b1.push(P("Ordenem els termes de major a menor grau:"));
    b1.push(M("p(x)=" + polyTeX(p)));
    if (deg === 0) {
      b1.push(P("És un polinomi **constant** (grau $0$): no té arrels ni factors de la forma $x-a$."));
    } else {
      b1.push(
        P(
          "És de **grau " + deg + "**, amb coeficient principal $a_{" + deg + "}=" + texQ(an) + "$ i terme independent $a_0=" + texQ(p[0]) + "$." +
            (deg >= 2 ? "" : "")
        )
      );
    }
    step("El polinomi", b1);

    var roots = []; // {r: root obj, mult}
    var approxRoots = [];
    var factorsQuad = []; // quadràtics irreductibles exactes {b,c,mult}
    var factorsApprox = []; // aproximats {type:'lin'|'quad', ...}
    var altParts = []; // factors enters per a la forma alternativa {tex,key}
    var altOk = true;
    var exact = true;
    var notes = [];

    if (deg === 0) {
      return {
        ok: true,
        special: "const",
        p: p,
        steps: steps,
        finalTeX: "p(x)=" + texQ(an),
        roots: [],
        factors: [],
        degree: 0,
        an: an,
        exact: true,
        notes: [],
        altTeX: null,
      };
    }

    // ---- pas 2: factor comú
    var k = 0;
    while (p[k].isZero()) k++;
    var shifted = p.slice(k);
    var cnt = content(shifted);
    var cst = cnt.c; // constant (amb signe)
    var Pp = ptrim(cnt.P); // primitiu
    var nameP = "p";
    if (k > 0 || !cst.eq(Q1)) {
      var b2 = [];
      var pieces = [];
      if (k > 0) pieces.push(k === 1 ? "no té terme independent: podem treure $x$ com a factor comú" : "no té termes de grau menor que $" + k + "$: podem treure $x^{" + k + "}$ com a factor comú");
      if (!cst.eq(Q1)) {
        if (cst.sign() < 0 && cst.abs().eq(Q1)) pieces.push("traiem el signe " + (k > 0 ? "" : "per tal que el coeficient principal sigui positiu"));
        else if (cst.isInt() || cst.abs().isInt() === false || true) {
          var cs = cst.sign() < 0 ? "-" + texQ(cst.abs()) : texQ(cst);
          var allInt = true;
          shifted.forEach(function (c) {
            if (!c.isInt()) allInt = false;
          });
          if (allInt) pieces.push("tots els coeficients són múltiples de $" + texQ(cst.abs()) + "$" + (cst.sign() < 0 ? " (i el coeficient principal és negatiu)" : "") + ": traiem $" + cs + "$ com a factor comú");
          else pieces.push("traiem com a factor comú $" + cs + "$, de manera que dins del parèntesi quedin només coeficients enters");
        }
      }
      var intro = "El polinomi " + pieces.join("; a més, ") + ".";
      intro = intro.replace(/^El polinomi traiem/, "Traiem").replace(/^El polinomi tots/, "Tots");
      b2.push(P(intro));
      var factor = (cst.eq(Q1) ? "" : cst.eq(new Q(-1)) ? "-" : paren(texQ(cst)).replace(/^\((-?\d+)\)$/, function (m, a) {
        return a.charAt(0) === "-" ? m : a;
      }));
      if (!cst.eq(Q1) && cst.sign() > 0) factor = texQ(cst);
      else if (cst.eq(new Q(-1))) factor = "-";
      else if (cst.sign() < 0) factor = texQ(cst);
      b2.push(M("p(x)=" + factor + (k > 0 ? xpow(k) : "") + (Pp.length > 1 || true ? "\\left(" + polyTeX(Pp) + "\\right)" : "")));
      nameP = "P";
      if (pdeg(Pp) >= 1) b2.push(P("Anomenem $P(x)=" + polyTeX(Pp) + "$ el polinomi que queda dins del parèntesi."));
      step("Factor comú", b2);
    }

    // ---- bucle d'arrels racionals
    var cur = Pp; // polinomi actual (Q, enters)
    var curName = nameP;
    var rationalFound = []; // Q's
    var qIndex = 0;
    var prevRoot = null;
    var firstSearch = true;
    var alwaysIntCands = null;

    function addRoot(robj, mult) {
      for (var i = 0; i < roots.length; i++) {
        var a = roots[i].r;
        var same = false;
        if (a.kind === "rat" && robj.kind === "rat") same = a.q.eq(robj.q);
        else if (a.kind === "surd" && robj.kind === "surd") same = a.a === robj.a && a.b === robj.b && a.n === robj.n && a.d === robj.d;
        if (same) {
          roots[i].mult += mult;
          return;
        }
      }
      roots.push({ r: robj, mult: mult });
    }

    while (pdeg(cur) >= 3) {
      var prim = content(cur).P;
      var cands = candidateList(prim);
      var order = [];
      if (prevRoot) order.push(prevRoot);
      // positiu i negatiu de cada valor (l'arrel anterior ja s'ha provat al principi)
      cands.forEach(function (c) {
        [c, c.neg()].forEach(function (v) {
          if (!(prevRoot && v.eq(prevRoot))) order.push(v);
        });
      });
      var blocks = [];
      var introTxt;
      if (firstSearch) {
        var lead1 = plead(prim).eq(Q1);
        introTxt = "Busquem **arrels racionals**. Si $\\dfrac{a}{b}$ (fracció irreductible) és arrel d'un polinomi de coeficients enters, aleshores $a$ divideix el terme independent i $b$ divideix el coeficient principal." +
          (lead1 ? " Aquí el coeficient principal és $1$, de manera que les possibles arrels racionals són **enters que divideixen el terme independent** $" + texQ(prim[0]) + "$." : " Aquí el terme independent és $" + texQ(prim[0]) + "$ i el coeficient principal és $" + texQ(plead(prim)) + "$.");
        firstSearch = false;
      } else {
        introTxt = "Repetim el procés amb $" + curName + "(x)=" + polyTeX(cur) + "$.";
      }
      blocks.push(P(introTxt));
      var candTeX = cands.map(function (c) {
        return "\\pm " + texQ(c);
      });
      var candShow = candTeX.length > 14 ? candTeX.slice(0, 10).join(",\\ ") + ",\\ \\ldots" : candTeX.join(",\\ ");
      blocks.push(P("Candidats a arrel" + (candTeX.length > 14 ? " (en total $" + 2 * cands.length + "$; en mostrem els primers)" : "") + ": $" + candShow + "$."));

      // proves
      var tested = [];
      var foundRoot = null;
      for (var oi = 0; oi < order.length; oi++) {
        var cand = order[oi];
        var val = peval(cur, cand);
        tested.push({ c: cand, v: val });
        if (val.isZero()) {
          foundRoot = cand;
          break;
        }
      }
      var testTeX = tested.map(function (t) {
        return curName + "(" + texQ(t.c) + ")=" + texQ(t.v);
      });
      var multipleHint = prevRoot ? "Mirem primer si l'arrel $x=" + texQ(prevRoot) + "$ es repeteix (arrel múltiple) i, si no, provem els altres candidats. " : "";
      if (foundRoot) {
        blocks.push(P(multipleHint + "Avaluem el polinomi als candidats fins a trobar-ne un que el faci zero:"));
        blocks.push(M(tinyList(testTeX, 4, 3)));
        blocks.push(P("Per tant, $x=" + texQ(foundRoot) + "$ és arrel" + (tested.length > 1 ? " (el primer candidat que ho compleix)" : "") + ". Apliquem la **regla de Ruffini** per dividir entre $x" + (foundRoot.sign() < 0 ? "+" + texQ(foundRoot.abs()) : "-" + texQ(foundRoot)) + "$:"));
        var rb = ruffiniBlock(descCoefs(cur), foundRoot);
        blocks.push(rb);
        var quotP = fromDesc(rb.data.quot);
        qIndex++;
        var qn = "q_{" + qIndex + "}";
        blocks.push(
          P("El residu és $0$, així que la divisió és exacta i:")
        );
        blocks.push(M(curName + "(x)=" + paren(factorTeX({ kind: "rat", q: foundRoot })) + "\\left(" + polyTeX(quotP) + "\\right)"));
        if (pdeg(quotP) >= 3) blocks.push(P("Anomenem $" + qn + "(x)=" + polyTeX(quotP) + "$ el quocient i hi continuem buscant arrels."));
        else blocks.push(P("El quocient $" + qn + "(x)=" + polyTeX(quotP) + "$ és de grau $" + pdeg(quotP) + "$."));
        step("Una arrel racional: $x=" + texQ(foundRoot) + "$", blocks);
        addRoot({ kind: "rat", q: foundRoot }, 1);
        // forma alternativa
        var fq = foundRoot;
        altParts.push({ tex: "(" + (fq.d === 1n ? "x" : fq.d + "x") + (fq.n < 0n ? "+" + babs(fq.n) : "-" + fq.n) + ")", key: fq.key(), mult: 1, kind: "rat", root: fq });
        prevRoot = foundRoot;
        cur = quotP;
        curName = qn;
        // si el quocient ja és de grau ≤ 2 sortim del bucle (es resol a sota)
      } else {
        blocks.push(P("Avaluem el polinomi en tots els candidats i **cap** el fa zero" + (tested.length > 8 ? " (en total, " + tested.length + " proves)" : "") + ". Per tant, $" + curName + "(x)$ no té arrels racionals."));
        step("No hi ha més arrels racionals", blocks);
        break;
      }
    }

    // ---- polinomi restant
    var remDeg = pdeg(cur);
    var remainderForResidual = null;

    function pushQuadStep(poly, name, isFirstOfAll) {
      // poly: grau 2 de coeficients enters (no necessàriament primitiu)
      var cp = content(poly);
      var pr = cp.P; // primitiu α, β, γ
      var al = pr[2].n;
      var be = pr[1].n;
      var ga = pr[0].n;
      var D = be * be - 4n * al * ga;
      var bl = [];
      bl.push(P("Resolem l'equació de segon grau $" + polyTeX(poly) + "=0$. Per a $ax^2+bx+c$ amb $a=" + texQ(poly[2]) + "$, $b=" + texQ(poly[1]) + "$, $c=" + texQ(poly[0]) + "$:"));
      var aa = poly[2];
      var bb = poly[1];
      var cc = poly[0];
      var Dpoly = bb.mul(bb).sub(new Q(4).mul(aa).mul(cc));
      bl.push(M("\\Delta=b^2-4ac=" + texQPar(bb) + "^2-4\\cdot" + texQPar(aa) + "\\cdot" + texQPar(cc) + "=" + texQ(Dpoly)));
      var out = { type: null };
      if (D > 0n) {
        var qr = quadRoots(al, be, ga);
        var sq = sqrtSimplify(D);
        if (sq.n === 1n) {
          bl.push(P("$\\Delta>0$ i és un quadrat perfecte ($\\sqrt{" + D + "}=" + sq.m + "$), així que hi ha dues arrels racionals:"));
          bl.push(M("x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}=\\dfrac{" + texQ(bb.neg()) + "\\pm " + sq.m + "}{" + texQ(aa.mul(new Q(2))) + "}\\ \\Rightarrow\\ x_1=" + texQ(qr[0].q) + ",\\quad x_2=" + texQ(qr[1].q)));
          out.type = "rat";
        } else {
          var simp = sq.m > 1n ? "\\sqrt{" + D + "}=" + sq.m + "\\sqrt{" + sq.n + "}" : "\\sqrt{" + D + "}";
          bl.push(P("$\\Delta>0$ però no és un quadrat perfecte: hi ha dues arrels reals **irracionals**." + (sq.m > 1n ? " Simplifiquem l'arrel: $" + simp + "$." : "")));
          bl.push(M("x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}=" + (function () {
            var den = aa.mul(new Q(2));
            return "\\dfrac{" + texQ(bb.neg()) + "\\pm " + (sq.m > 1n ? sq.m : "") + "\\sqrt{" + sq.n + "}}{" + texQ(den) + "}";
          })()));
          bl.push(M("x_1=" + rootSignedTeX(qr[0]) + ",\\quad x_2=" + rootSignedTeX(qr[1]) + "\\qquad(\\approx " + texDec(rootNum(qr[0])) + ",\\ " + texDec(rootNum(qr[1])) + ")"));
          out.type = "surd";
        }
        out.roots = qr;
        addRoot(qr[0], 1);
        addRoot(qr[1], 1);
        qr.forEach(function (r) {
          // forma alternativa: només si són racionals; per a irracionals, el factor enter és el quadràtic
        });
        if (out.type === "rat") {
          qr.forEach(function (r) {
            altParts.push({ tex: "(" + (r.q.d === 1n ? "x" : r.q.d + "x") + (r.q.n < 0n ? "+" + babs(r.q.n) : "-" + r.q.n) + ")", key: r.q.key(), mult: 1, kind: "rat", root: r.q });
          });
        } else {
          altParts.push({ tex: "(" + polyTeX(pr) + ")", key: "q:" + pr.map(function (c) { return c.n; }).join(","), mult: 1, kind: "quadz" });
        }
        bl.push(P("Per tant, $" + name + "(x)=" + (aa.eq(Q1) ? "" : texQ(aa)) + paren(factorTeX(qr[0])) + paren(factorTeX(qr[1])) + "$."));
      } else if (D === 0n) {
        var r0 = new Q(-be, 2n * al);
        bl.push(P("$\\Delta=0$: hi ha una **arrel doble**, $x=\\dfrac{-b}{2a}=" + texQ(r0) + "$."));
        bl.push(M(name + "(x)=" + (aa.eq(Q1) ? "" : texQ(aa)) + paren(factorTeX({ kind: "rat", q: r0 })) + "^2"));
        addRoot({ kind: "rat", q: r0 }, 2);
        altParts.push({ tex: "(" + (r0.d === 1n ? "x" : r0.d + "x") + (r0.n < 0n ? "+" + babs(r0.n) : "-" + r0.n) + ")", key: r0.key(), mult: 2, kind: "rat", root: r0 });
        out.type = "double";
      } else {
        bl.push(P("$\\Delta<0$: no hi ha arrels reals. El polinomi de grau $2$ és **irreductible** i es queda com a factor de la factorització."));
        var bm = new Q(be, al);
        var cm = new Q(ga, al);
        factorsQuad.push({ b: bm, c: cm, mult: 1 });
        altParts.push({ tex: "(" + polyTeX(pr) + ")", key: "q:" + pr.map(function (c) { return c.n; }).join(","), mult: 1, kind: "quadz" });
        out.type = "irred";
      }
      step("Equació de segon grau", bl);
      return out;
    }

    if (remDeg === 2) {
      pushQuadStep(cur, curName, true);
    } else if (remDeg === 1) {
      var lr = new Q(cur[0].neg().n, 1n).div(cur[1]);
      lr = cur[0].neg().div(cur[1]);
      var bl1 = [];
      bl1.push(P("El quocient $" + curName + "(x)=" + polyTeX(cur) + "$ és de grau $1$: la seva única arrel és $x=" + texQ(lr) + "$ i " + curName + "(x)=" + (cur[1].eq(Q1) ? "" : texQ(cur[1])) + paren(factorTeX({ kind: "rat", q: lr })) + "."));
      step("Grau 1", bl1);
      addRoot({ kind: "rat", q: lr }, 1);
      altParts.push({ tex: "(" + (lr.d === 1n ? "x" : lr.d + "x") + (lr.n < 0n ? "+" + babs(lr.n) : "-" + lr.n) + ")", key: lr.key(), mult: 1, kind: "rat", root: lr });
    } else if (remDeg >= 3) {
      // sense arrels racionals: factors de grau 2 o aproximacions
      var bl3 = [];
      bl3.push(P("Amb el mètode de Ruffini no podem avançar més: **no queden arrels racionals**. Això no vol dir que no tingui arrels reals (poden ser irracionals) ni que no es pugui descompondre."));
      bl3.push(P("A partir d'aquí el laboratori fa servir mètodes que no són els del curs, i per això algun resultat pot ser **aproximat**."));
      step("Sense arrels racionals", bl3);
      var resid = content(cur).P;
      processResidual(resid, curName);
    }

    // ---- residual (sense arrels racionals)
    function pushPieceDecimal() {}

    function processResidual(R, name) {
      // R: enter primitiu, sense arrels racionals, grau >= 3
      var bl = [];
      var dec = decomposeSquarefree(R);
      if (dec.length > 1 || dec[0].mult > 1) {
        var txt = dec.map(function (d) {
          return "\\left(" + polyTeX(d.poly) + "\\right)" + (d.mult > 1 ? "^{" + d.mult + "}" : "");
        }).join("");
        bl.push(P("Aquest polinomi té **factors repetits**. Es veu, per exemple, en què comparteix factors amb la seva derivada (mcd de $R$ i $R'$). Un cop separats, queda:"));
        bl.push(M(name + "(x)\\ \\propto\\ " + txt));
        step("Factors repetits", bl);
      }
      dec.forEach(function (d) {
        var piece = content(d.poly).P;
        splitSquarefree(piece, d.mult, name);
      });
    }

    function decomposeSquarefree(f) {
      // Yun sobre Q; retorna [{poly (mònic), mult}]
      var fm = pmonic(f);
      var fp = pderiv(fm);
      var a0 = pgcd(fm, fp);
      var b = pdivmod(fm, a0).q;
      var c = pdivmod(fp, a0).q;
      var d = psub(c, pderiv(b));
      var i = 1;
      var out = [];
      while (pdeg(b) > 0 && i < 50) {
        var a = pgcd(b, d);
        if (pdeg(a) > 0) out.push({ poly: a, mult: i });
        b = pdivmod(b, a).q;
        c = pdivmod(d, a).q;
        d = psub(c, pderiv(b));
        i++;
      }
      return out;
    }

    function splitSquarefree(S, mult, name) {
      // S: enter primitiu, sense factors repetits ni arrels racionals
      var work = S;
      var dS = pdeg(work);
      var exactPieces = []; // quadràtics enters primitius
      var approxPieces = []; // polinomis (Q) irreductibles sobre Q de grau >= 3
      var bl = [];
      // bicuadrada
      var done = false;
      if (dS === 4 && isOddEven(work)) {
        var A = work[4].n;
        var B = work[2].n;
        var C = work[0].n;
        var Dt = B * B - 4n * A * C;
        if (Dt >= 0n) {
          var rt = isqrt(Dt);
          if (rt * rt === Dt) {
            var t1 = new Q(-B + rt, 2n * A);
            var t2 = new Q(-B - rt, 2n * A);
            bl.push(P("Només té potències parelles: és una equació **bicuadrada**. Amb el canvi $t=x^2$ queda $" + A + "t^2" + (B < 0n ? "-" : "+") + babs(B) + "t" + (C < 0n ? "-" : "+") + babs(C) + "$, que té arrels racionals:"));
            bl.push(M("t_1=" + texQ(t1) + ",\\qquad t_2=" + texQ(t2)));
            bl.push(P("Com que $x^2-t$ és un factor per a cada arrel $t$ trobada:"));
            bl.push(M("\\left(" + polyTeX(work) + "\\right)\\ \\propto\\ \\left(x^2" + (t1.sign() > 0 ? "-" + texQ(t1) : "+" + texQ(t1.abs())) + "\\right)\\left(x^2" + (t2.sign() > 0 ? "-" + texQ(t2) : "+" + texQ(t2.abs())) + "\\right)"));
            [t1, t2].forEach(function (t) {
              var qd = content([t.neg(), Q0, Q1]).P;
              exactPieces.push(qd);
            });
            done = true;
          }
        }
      }
      if (!done) {
        // factors de grau 2 amb coeficients enters (mètode numèric)
        var found = [];
        var rest = work;
        var guard = 0;
        var triedPairs = false;
        while (pdeg(rest) >= 4 && guard++ < 10) {
          triedPairs = true;
          var qf = findQuadFactor(rest);
          if (!qf) break;
          found.push(qf.quad);
          rest = content(qf.rest).P;
        }
        if (pdeg(rest) === 2) {
          found.push(rest);
          rest = [];
        } else if (pdeg(rest) === 1) {
          // no hauria de passar (tindria arrel racional)
          found.push(rest);
          rest = [];
        }
        if (found.length) {
          bl.push(P("Provem de descompondre'l en **factors de grau 2 amb coeficients enters**. El laboratori ho fa calculant numèricament les arrels i buscant quines es poden agrupar en un factor així (no és un pas que es faci habitualment a mà):"));
          bl.push(M(polyTeX(work) + "=" + found.map(function (f) {
            return "\\left(" + polyTeX(f) + "\\right)";
          }).join("") + (pdeg(rest) >= 3 ? "\\left(" + polyTeX(rest) + "\\right)" : "")));
          found.forEach(function (f) {
            exactPieces.push(f);
          });
        }
        if (pdeg(rest) >= 3) {
          approxPieces.push(rest);
        } else if (pdeg(rest) === 2) {
          exactPieces.push(rest);
        }
        if (triedPairs && !found.length && pdeg(rest) >= 3) {
          bl.push(P("Cap parell d'arrels dóna un factor de grau $2$ amb coeficients racionals."));
        }
      }

      // factors de grau 2 exactes
      exactPieces.forEach(function (pq) {
        var al = pq[2].n;
        var be = pq[1].n;
        var ga = pq[0].n;
        var D = be * be - 4n * al * ga;
        var qtxt = polyTeX(pq);
        if (D > 0n) {
          var qr = quadRoots(al, be, ga);
          var isRat = qr[0].kind === "rat";
          bl.push(P("El factor $" + qtxt + "$ té $\\Delta=" + D + ">0$, així que té dues arrels reals" + (isRat ? "" : " irracionals") + ": $x=" + rootSignedTeX(qr[0]) + "$ i $x=" + rootSignedTeX(qr[1]) + "$" + (isRat ? "." : " ($\\approx " + texDec(rootNum(qr[0])) + "$ i $\\approx " + texDec(rootNum(qr[1])) + "$).")));
          addRoot(qr[0], mult);
          addRoot(qr[1], mult);
          if (isRat) exact = exact; // (no passa: no hi ha arrels racionals)
          altParts.push({ tex: "(" + qtxt + ")", key: "q:" + pq.map(function (c) { return c.n; }).join(","), mult: mult, kind: "quadz" });
        } else {
          bl.push(P("El factor $" + qtxt + "$ té $\\Delta=" + D + "<0$: no té arrels reals i és **irreductible**."));
          factorsQuad.push({ b: new Q(be, al), c: new Q(ga, al), mult: mult });
          altParts.push({ tex: "(" + qtxt + ")", key: "q:" + pq.map(function (c) { return c.n; }).join(","), mult: mult, kind: "quadz" });
        }
      });

      // aproximats
      approxPieces.forEach(function (ap) {
        exact = false;
        altOk = false;
        var nr = numericRoots(ap.map(function (c) { return c.toNum(); }));
        var reals = [];
        var cplx = [];
        nr.forEach(function (z) {
          if (Math.abs(z[1]) < 1e-7 * (1 + Math.abs(z[0]))) reals.push(z[0]);
          else if (z[1] > 0) cplx.push(z);
        });
        reals.sort(function (a, b) { return a - b; });
        var parts = [];
        reals.forEach(function (x) {
          factorsApprox.push({ type: "lin", x: x, mult: mult });
          addApproxRoot(x, mult);
          parts.push("x=" + texDec(x));
        });
        cplx.forEach(function (z) {
          factorsApprox.push({ type: "quad", b: -2 * z[0], c: z[0] * z[0] + z[1] * z[1], mult: mult });
        });
        bl.push(P("El factor $" + polyTeX(ap) + "$ (grau $" + pdeg(ap) + "$) no té arrels racionals ni es descompon amb coeficients racionals. Només podem donar-ne les arrels reals de manera **aproximada**" + (reals.length ? ": $" + parts.join(",\\ ") + "$" : ": no en té cap, així que tot el factor és irreductible sobre els reals") + "."));
        notes.push("Alguns factors són aproximats: el laboratori els ha calculat numèricament.");
      });
      if (bl.length) step("Factors sense arrels racionals", bl);
    }

    function addApproxRoot(x, mult) {
      approxRoots.push({ r: { kind: "approx", x: x }, mult: mult });
    }

    function findQuadFactor(R) {
      // R: enter primitiu sense arrels racionals ni factors repetits; grau >= 4
      var n = pdeg(R);
      var zs = numericRoots(R.map(function (c) { return c.toNum(); }));
      var L = babs(plead(R).n);
      var divs = divisorsOf(L);
      for (var i = 0; i < zs.length; i++) {
        for (var j = i + 1; j < zs.length; j++) {
          var z1 = zs[i];
          var z2 = zs[j];
          var tol = 1e-6 * (1 + Math.hypot(z1[0], z1[1]) + Math.hypot(z2[0], z2[1]));
          var bothReal = Math.abs(z1[1]) < 1e-7 * (1 + Math.abs(z1[0])) && Math.abs(z2[1]) < 1e-7 * (1 + Math.abs(z2[0]));
          var conj = Math.abs(z1[0] - z2[0]) < tol && Math.abs(z1[1] + z2[1]) < tol;
          if (!bothReal && !conj) continue;
          var B = -(z1[0] + z2[0]);
          var Cc = z1[0] * z2[0] - z1[1] * z2[1];
          for (var di = 0; di < divs.length; di++) {
            var al = divs[di];
            var b2 = al * B;
            var c2 = al * Cc;
            if (Math.abs(b2 - Math.round(b2)) > 1e-5 * Math.max(1, Math.abs(b2))) continue;
            if (Math.abs(c2 - Math.round(c2)) > 1e-5 * Math.max(1, Math.abs(c2))) continue;
            var quad = [new Q(Math.round(c2)), new Q(Math.round(b2)), new Q(al)];
            var dm = pdivmod(R, quad);
            if (dm.r.length === 0) return { quad: content(quad).P, rest: dm.q };
          }
        }
      }
      return null;
    }

    /* ----------------------- resultat final ------------------------- */

    var all = [];
    if (k > 0) all.push({ kind: "x", mult: k, val: 0 });
    var allRoots = roots.concat(approxRoots);
    allRoots.sort(function (a, b) {
      return rootNum(a.r) - rootNum(b.r);
    });
    allRoots.forEach(function (r) {
      all.push({ kind: "lin", r: r.r, mult: r.mult, val: rootNum(r.r) });
    });
    var quads = factorsQuad.concat(factorsApprox.filter(function (f) { return f.type === "quad"; }).map(function (f) {
      return { b: null, c: null, bn: f.b, cn: f.c, mult: f.mult, approx: true };
    }));
    quads.forEach(function (q) {
      all.push({ kind: "quad", q: q, mult: q.mult });
    });

    function factorString(f) {
      if (f.kind === "x") return powTeX("x", f.mult);
      if (f.kind === "lin") {
        var tx = factorTeX(f.r);
        return powTeX(factorHasFrac(f.r) ? "\\left(" + tx + "\\right)" : "(" + tx + ")", f.mult);
      }
      var q = f.q;
      var inner;
      if (q.approx) {
        var bs = fmtDec(Math.abs(q.bn), 4);
        var cs2 = fmtDec(Math.abs(q.cn), 4);
        inner = "x^2" + (bs === "0" ? "" : (q.bn >= 0 ? "+" : "-") + (bs === "1" ? "" : texDec(Math.abs(q.bn))) + "x") + (cs2 === "0" ? "" : (q.cn >= 0 ? "+" : "-") + texDec(Math.abs(q.cn)));
      }
      else inner = polyTeX([q.c, q.b, Q1]);
      var hasFrac = /dfrac/.test(inner);
      return powTeX(hasFrac ? "\\left(" + inner + "\\right)" : "(" + inner + ")", q.mult);
    }
    var pre = an.eq(Q1) ? "" : an.eq(new Q(-1)) ? "-" : texQ(an);
    var ftex = all.map(factorString).join("");
    var isApprox = !exact;
    var finalTeX = "p(x)" + (isApprox ? "\\approx " : "=") + pre + ftex;
    if (all.length === 0) finalTeX = "p(x)=" + texQ(an);

    // forma alternativa (coeficients enters)
    var altTeX = null;
    if (altOk) {
      var parts = [];
      var hasNonInt = altParts.some(function (a) { return a.kind === "rat" && a.root.d !== 1n; }) || altParts.some(function (a) { return a.kind === "quadz"; });
      // agrupem factors repetits
      var groups = {};
      var gorder = [];
      altParts.forEach(function (a) {
        if (!groups[a.key]) {
          groups[a.key] = { tex: a.tex, mult: 0, val: a.kind === "rat" ? a.root.toNum() : 1e18 };
          gorder.push(a.key);
        }
        groups[a.key].mult += a.mult;
      });
      gorder.sort(function (a, b) { return groups[a].val - groups[b].val; });
      var hasZero = k > 0 ? powTeX("x", k) : "";
      var body = hasZero + gorder.map(function (key) { return powTeX(groups[key].tex, groups[key].mult); }).join("");
      var cpre = cst.eq(Q1) ? "" : cst.eq(new Q(-1)) ? "-" : texQ(cst);
      if (hasNonInt) altTeX = "p(x)=" + cpre + body;
      var plainFinal = finalTeX.replace(/^p\(x\)[=]/, "");
      if (altTeX && altTeX.replace(/^p\(x\)=/, "") === plainFinal) altTeX = null;
    }

    // taula d'arrels
    var table = [];
    if (k > 0) table.push({ val: 0, mult: k, exact: "0", approx: false, kind: "rat", label: "0" });
    allRoots.forEach(function (r) {
      table.push({
        val: rootNum(r.r),
        mult: r.mult,
        exact: r.r.kind === "approx" ? "\\approx " + texDec(r.r.x) : rootSignedTeX(r.r),
        approx: r.r.kind === "approx",
        kind: r.r.kind,
        label: plainLabel(r.r),
      });
    });
    table.sort(function (a, b) {
      return a.val - b.val;
    });

    // pas final
    var fb = [];
    fb.push(P("Ajuntem tots els factors, amb el coeficient principal $a_{" + deg + "}=" + texQ(an) + "$ al davant" + (isApprox ? " (alguns valors són aproximats)" : "") + ":"));
    fb.push(M(finalTeX));
    if (altTeX) fb.push(P("Si volem factors amb coeficients enters (sense fraccions ni arrels), també es pot escriure:"));
    if (altTeX) fb.push(M(altTeX));
    var nreal = table.reduce(function (s, t) { return s + t.mult; }, 0);
    var nquad = quads.reduce(function (s, q) { return s + q.mult; }, 0);
    var rootsWord = nreal === 0 ? "no té cap arrel real" : "té **" + nreal + " arrel" + (nreal === 1 ? " real" : "s reals") + "** (comptant multiplicitats)";
    if (nquad === 0) {
      fb.push(P("El polinomi " + rootsWord + ", tantes com el seu grau: es descompon completament en factors de grau $1$."));
    } else {
      fb.push(P("El polinomi " + rootsWord + " i " + nquad + " factor" + (nquad === 1 ? "" : "s") + " de grau $2$ irreductible" + (nquad === 1 ? "" : "s") + ": $" + nreal + "+2\\cdot " + nquad + "=" + (nreal + 2 * nquad) + "$, que coincideix amb el grau."));
    }
    step("Resultat", fb);

    return {
      ok: true,
      special: null,
      p: p,
      degree: deg,
      an: an,
      steps: steps,
      finalTeX: finalTeX,
      altTeX: altTeX,
      roots: table,
      factors: all,
      exact: exact,
      notes: notes,
    };
  }

  function analyzeText(text) {
    var p = parsePoly(text);
    return analyze(p, text);
  }

  return {
    Q: Q,
    parsePoly: parsePoly,
    analyze: analyze,
    analyzeText: analyzeText,
    polyTeX: polyTeX,
    texQ: texQ,
    fmtDec: fmtDec,
    texDec: texDec,
    pevalNum: pevalNum,
    peval: peval,
    toNumCoefs: function (p) {
      return p.map(function (c) {
        return c.toNum();
      });
    },
    pmul: pmul,
    ptrim: ptrim,
    _internals: { numericRoots: numericRoots, content: content, ruffini: ruffini, pgcd: pgcd, pdivmod: pdivmod, rootNum: rootNum, MAXDEG: MAXDEG },
  };
});
