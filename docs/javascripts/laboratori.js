/* Laboratori de polinomis — interfície (pàgina algebra/laboratori.md).
 * Necessita polinomis-engine.js (window.PolyLab) i KaTeX (window.katex).
 */
(function () {
  "use strict";

  var PL = window.PolyLab;
  var SVGNS = "http://www.w3.org/2000/svg";
  var EXAMPLES = [
    "x^3-2x^2-5x+6",
    "2x^3-3x^2-3x+2",
    "(x-1)^2(x+3)",
    "x^2-3",
    "x^4+4",
  ];
  var DEFAULT = EXAMPLES[0];

  /* ---------- utilitats ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function tex(s, display) {
    if (window.katex) {
      try {
        return window.katex.renderToString(s, { throwOnError: false, displayMode: !!display });
      } catch (e) {
        /* cau al text pla */
      }
    }
    return "<code>" + esc(s) + "</code>";
  }
  // text amb $...$ (fórmules en línia) i **negreta**
  function rich(str) {
    var parts = String(str).split("$");
    return parts
      .map(function (seg, i) {
        if (i % 2 === 1) return tex(seg, false);
        return esc(seg).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      })
      .join("");
  }
  var SUP = { 0: "⁰", 1: "¹", 2: "²", 3: "³", 4: "⁴", 5: "⁵", 6: "⁶", 7: "⁷", 8: "⁸", 9: "⁹" };
  function pretty(s) {
    return s
      .replace(/\^(\d+)/g, function (m, d) {
        return d.split("").map(function (c) { return SUP[c]; }).join("");
      })
      .replace(/-/g, "−")
      .replace(/\*/g, "·");
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function svg(tag, attrs) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function fmt(x, d) {
    return PL.fmtDec(x, d === undefined ? 3 : d).replace("-", "−");
  }

  /* ---------- Ruffini ---------- */

  function ruffiniHTML(b) {
    var n = b.coefs.length;
    var head = "<tr><th></th>" + b.coefs.map(function (c) { return "<th>" + tex(c) + "</th>"; }).join("") + "</tr>";
    var r2 = "<tr><td>" + tex(b.root) + "</td><td></td>" + b.prods.map(function (c) { return "<td>" + tex(c) + "</td>"; }).join("") + "</tr>";
    var r3 =
      "<tr><td></td>" +
      b.quot.map(function (c) { return "<td>" + tex("\\mathbf{" + c + "}") + "</td>"; }).join("") +
      "<td>" + tex("\\boxed{" + b.rem + "}") + "</td></tr>";
    return '<div class="md-typeset__table lab-ruffini"><table><thead>' + head + "</thead><tbody>" + r2 + r3 + "</tbody></table></div>";
  }

  /* ---------- gràfica ---------- */

  function niceStep(range, target) {
    var raw = range / target;
    var mag = Math.pow(10, Math.floor(Math.log10(raw)));
    var f = raw / mag;
    var s = f < 1.5 ? 1 : f < 3.5 ? 2 : f < 7.5 ? 5 : 10;
    return s * mag;
  }

  function Plot(container, opts) {
    this.opts = opts || {};
    this.points = this.opts.points || null;
    this.box = container;
    this.svg = svg("svg", { class: "lab-plot__svg" + (this.opts.static ? " is-static" : ""), role: "img", "aria-label": this.opts.label || "Gràfica del polinomi" });
    this.box.appendChild(this.svg);
    this.coefs = [0];
    this.roots = [];
    this.view = { x0: -5, x1: 5, y0: -5, y1: 5 };
    this.W = 600;
    this.H = 360;
    this.hover = null;
    var self = this;
    if (!this.opts.static) {
      this.svg.addEventListener("pointermove", function (e) { self.onMove(e); });
      this.svg.addEventListener("pointerleave", function () { self.hover = null; self.draw(); });
      this.svg.addEventListener("pointerdown", function (e) { self.onDown(e); });
      this.svg.addEventListener("pointerup", function (e) { self.onUp(e); });
      this.svg.addEventListener("pointercancel", function (e) { self.onUp(e); });
      this.svg.addEventListener("dblclick", function () { self.fit(); });
      this.svg.addEventListener("wheel", function (e) {
        if (!(e.ctrlKey || e.metaKey)) return;
        e.preventDefault();
        self.zoom(e.deltaY < 0 ? 0.8 : 1.25, e);
      }, { passive: false });
    }
    if (window.ResizeObserver) {
      new ResizeObserver(function () { self.draw(); }).observe(this.box);
    }
  }
  Plot.prototype.setData = function (coefs, roots) {
    this.coefs = coefs;
    this.roots = roots;
    this.fit();
  };
  Plot.prototype.f = function (x) {
    return PL.pevalNum(this.coefs, x);
  };
  Plot.prototype.fit = function () {
    var xs = this.roots.map(function (r) { return r.x; }).concat([0]);
    var xmin = Math.min.apply(null, xs);
    var xmax = Math.max.apply(null, xs);
    var span = xmax - xmin;
    var pad = Math.max(1, span * 0.3);
    var x0 = xmin - pad;
    var x1 = xmax + pad;
    if (this.roots.length === 0) {
      x0 = -4;
      x1 = 4;
    }
    if (x1 - x0 < 4) {
      var c = (x0 + x1) / 2;
      x0 = c - 2;
      x1 = c + 2;
    }
    var N = 400;
    var ys = [];
    for (var i = 0; i <= N; i++) {
      var y = this.f(x0 + ((x1 - x0) * i) / N);
      if (isFinite(y)) ys.push(y);
    }
    ys.sort(function (a, b) { return a - b; });
    var lo = ys[Math.floor(ys.length * 0.04)];
    var hi = ys[Math.ceil(ys.length * 0.96) - 1];
    var must = [0, this.f(0)];
    lo = Math.min.apply(null, must.concat([lo]));
    hi = Math.max.apply(null, must.concat([hi]));
    if (hi - lo < 1e-9) {
      lo -= 1;
      hi += 1;
    }
    var m = (hi - lo) * 0.15;
    this.view = { x0: x0, x1: x1, y0: lo - m, y1: hi + m };
    this.draw();
  };
  Plot.prototype.zoom = function (k, e) {
    var v = this.view;
    var rect = this.svg.getBoundingClientRect();
    var fx = e ? (e.clientX - rect.left) / rect.width : 0.5;
    var fy = e ? (e.clientY - rect.top) / rect.height : 0.5;
    var cx = v.x0 + (v.x1 - v.x0) * ((fx * this.W - this.ml) / (this.W - this.ml - this.mr));
    var cy = v.y1 - (v.y1 - v.y0) * ((fy * this.H - this.mt) / (this.H - this.mt - this.mb));
    if (!e) {
      cx = (v.x0 + v.x1) / 2;
      cy = (v.y0 + v.y1) / 2;
    }
    this.view = {
      x0: cx - (cx - v.x0) * k,
      x1: cx + (v.x1 - cx) * k,
      y0: cy - (cy - v.y0) * k,
      y1: cy + (v.y1 - cy) * k,
    };
    this.draw();
  };
  Plot.prototype.toData = function (e) {
    var rect = this.svg.getBoundingClientRect();
    var px = ((e.clientX - rect.left) / rect.width) * this.W;
    var py = ((e.clientY - rect.top) / rect.height) * this.H;
    var v = this.view;
    return {
      px: px,
      py: py,
      x: v.x0 + ((px - this.ml) / (this.W - this.ml - this.mr)) * (v.x1 - v.x0),
      y: v.y1 - ((py - this.mt) / (this.H - this.mt - this.mb)) * (v.y1 - v.y0),
    };
  };
  Plot.prototype.onDown = function (e) {
    this.drag = { cx: e.clientX, cy: e.clientY, view: Object.assign({}, this.view), moved: false };
    try { this.svg.setPointerCapture(e.pointerId); } catch (err) { /* res */ }
    this.svg.classList.add("is-drag");
  };
  Plot.prototype.onUp = function (e) {
    this.drag = null;
    this.svg.classList.remove("is-drag");
    try { this.svg.releasePointerCapture(e.pointerId); } catch (err) { /* res */ }
  };
  Plot.prototype.onMove = function (e) {
    if (this.drag) {
      var rect = this.svg.getBoundingClientRect();
      var dx = ((e.clientX - this.drag.cx) / rect.width) * this.W;
      var dy = ((e.clientY - this.drag.cy) / rect.height) * this.H;
      var v = this.drag.view;
      var sx = (v.x1 - v.x0) / (this.W - this.ml - this.mr);
      var sy = (v.y1 - v.y0) / (this.H - this.mt - this.mb);
      this.view = { x0: v.x0 - dx * sx, x1: v.x1 - dx * sx, y0: v.y0 + dy * sy, y1: v.y1 + dy * sy };
      this.hover = null;
      this.draw();
      return;
    }
    var d = this.toData(e);
    var snap = null;
    var sxp = (this.W - this.ml - this.mr) / (this.view.x1 - this.view.x0);
    this.roots.forEach(function (r) {
      if (Math.abs(r.x - d.x) * sxp < 9) snap = r.x;
    });
    var x = snap !== null ? snap : d.x;
    this.hover = { x: x, y: snap !== null ? 0 : this.f(x), snap: snap !== null };
    this.draw();
  };

  Plot.prototype.draw = function () {
    var W = Math.max(280, Math.round(this.box.clientWidth || 600));
    var H = Math.max(this.opts.static ? 200 : 240, Math.min(420, Math.round(W * (this.opts.aspect || 0.62))));
    this.W = W;
    this.H = H;
    var ml = 46;
    var mr = 14;
    var mt = 14;
    var mb = 28;
    this.ml = ml;
    this.mr = mr;
    this.mt = mt;
    this.mb = mb;
    var v = this.view;
    var pw = W - ml - mr;
    var ph = H - mt - mb;
    var sx = function (x) { return ml + ((x - v.x0) / (v.x1 - v.x0)) * pw; };
    var sy = function (y) { return mt + ((v.y1 - y) / (v.y1 - v.y0)) * ph; };
    var s = this.svg;
    while (s.firstChild) s.removeChild(s.firstChild);
    s.setAttribute("viewBox", "0 0 " + W + " " + H);
    s.setAttribute("width", W);
    s.setAttribute("height", H);

    var clipId = "labclip" + (this.id = this.id || Math.floor(Math.random() * 1e6));
    var defs = svg("defs", {});
    var cp = svg("clipPath", { id: clipId });
    cp.appendChild(svg("rect", { x: ml, y: mt, width: pw, height: ph }));
    defs.appendChild(cp);
    s.appendChild(defs);

    // graella i marques
    var gx = niceStep(v.x1 - v.x0, Math.max(3, Math.round(pw / 90)));
    var gy = niceStep(v.y1 - v.y0, Math.max(3, Math.round(ph / 55)));
    var grid = svg("g", { class: "lab-plot__grid" });
    var labels = svg("g", { class: "lab-plot__ticks" });
    var i0 = Math.ceil(v.x0 / gx);
    for (var i = i0; i * gx <= v.x1; i++) {
      var xv = i * gx;
      var X = sx(xv);
      grid.appendChild(svg("line", { x1: X, x2: X, y1: mt, y2: mt + ph }));
      var t = svg("text", { x: X, y: mt + ph + 17, "text-anchor": "middle" });
      t.textContent = fmt(xv, 6);
      labels.appendChild(t);
    }
    var j0 = Math.ceil(v.y0 / gy);
    for (var j = j0; j * gy <= v.y1; j++) {
      var yv = j * gy;
      var Y = sy(yv);
      grid.appendChild(svg("line", { x1: ml, x2: ml + pw, y1: Y, y2: Y }));
      var t2 = svg("text", { x: ml - 6, y: Y + 4, "text-anchor": "end" });
      t2.textContent = fmt(yv, 6);
      labels.appendChild(t2);
    }
    s.appendChild(grid);
    // eixos
    var axes = svg("g", { class: "lab-plot__axes" });
    if (v.y0 < 0 && v.y1 > 0) axes.appendChild(svg("line", { x1: ml, x2: ml + pw, y1: sy(0), y2: sy(0) }));
    if (v.x0 < 0 && v.x1 > 0) axes.appendChild(svg("line", { x1: sx(0), x2: sx(0), y1: mt, y2: mt + ph }));
    axes.appendChild(svg("rect", { x: ml, y: mt, width: pw, height: ph, class: "lab-plot__frame" }));
    s.appendChild(axes);
    s.appendChild(labels);

    // corba
    var g = svg("g", { "clip-path": "url(#" + clipId + ")" });
    var N = Math.max(200, Math.round(pw));
    var d = "";
    var open = false;
    var big = (v.y1 - v.y0) * 50;
    var curvePx = [];
    for (var k = 0; k <= N; k++) {
      var x = v.x0 + ((v.x1 - v.x0) * k) / N;
      var y = this.f(x);
      if (!isFinite(y)) {
        open = false;
        continue;
      }
      y = Math.max(-big + (v.y0 + v.y1) / 2, Math.min(big + (v.y0 + v.y1) / 2, y));
      d += (open ? "L" : "M") + sx(x).toFixed(2) + " " + sy(y).toFixed(2);
      curvePx.push([sx(x), sy(y)]);
      open = true;
    }
    g.appendChild(svg("path", { d: d, class: "lab-plot__curve" }));
    s.appendChild(g);

    // arrels
    var gr = svg("g", { class: "lab-plot__roots" });
    this.roots.forEach(function (r, idx) {
      if (r.x < v.x0 || r.x > v.x1) return;
      var c = svg("circle", { cx: sx(r.x), cy: sy(0), r: 5.5 });
      var title = svg("title", {});
      title.textContent = "x = " + r.label + (r.mult > 1 ? " (multiplicitat " + r.mult + ")" : "");
      c.appendChild(title);
      gr.appendChild(c);
      var up = idx % 2 === 0;
      var below = v.y0 > -1e-9 ? false : true;
      var tt = svg("text", { x: sx(r.x), y: sy(0) + (up === below ? -11 : 19), "text-anchor": "middle" });
      tt.textContent = r.label + (r.mult > 1 ? " (×" + r.mult + ")" : "");
      gr.appendChild(tt);
    });
    s.appendChild(gr);

    // punts destacats (exemples de la pàgina)
    if (this.points) {
      var gp = svg("g", { class: "lab-plot__pts" });
      this.points.forEach(function (pt) {
        if (pt.x < v.x0 || pt.x > v.x1 || pt.y < v.y0 || pt.y > v.y1) return;
        var cls = pt.root ? "is-root" : "";
        gp.appendChild(svg("circle", { cx: sx(pt.x), cy: sy(pt.y), r: pt.root ? 6 : 4.5, class: cls }));
        var px = sx(pt.x);
        var py = sy(pt.y);
        var wlab = pt.label.length * 6.6;
        var cands = [
          [0, -12, "middle"], [0, 21, "middle"], [10, 4, "start"], [-10, 4, "end"],
          [8, -10, "start"], [-8, -10, "end"], [8, 19, "start"], [-8, 19, "end"],
        ];
        var best = null;
        cands.forEach(function (c, ci) {
          var cx = c[2] === "middle" ? px + c[0] : c[2] === "start" ? px + c[0] + wlab / 2 : px + c[0] - wlab / 2;
          var cy = py + c[1] - 4;
          var score = 1e9;
          for (var q = 0; q < curvePx.length; q++) {
            var dx = Math.max(0, Math.abs(curvePx[q][0] - cx) - wlab / 2);
            var dy = Math.abs(curvePx[q][1] - cy) - 7;
            var dd = Math.hypot(dx, Math.max(0, dy));
            if (dd < score) score = dd;
          }
          if (v.x0 < 0 && v.x1 > 0 && Math.abs(cx - sx(0)) < wlab / 2 + 3) score -= 12;
          if (v.y0 < 0 && v.y1 > 0 && Math.abs(cy - sy(0)) < 9) score -= 12;
          if (cx - wlab / 2 < ml || cx + wlab / 2 > ml + pw || cy < mt + 8 || cy > mt + ph - 4) score -= 40;
          score -= ci * 0.5;
          if (!best || score > best.score) best = { score: score, c: c };
        });
        var tp = svg("text", { x: px + best.c[0], y: py + best.c[1], "text-anchor": best.c[2] });
        tp.textContent = pt.label;
        gp.appendChild(tp);
      });
      s.appendChild(gp);
    }

    // cursor
    if (this.hover && this.hover.x >= v.x0 && this.hover.x <= v.x1) {
      var h = this.hover;
      var gh = svg("g", { class: "lab-plot__hover" });
      gh.appendChild(svg("line", { x1: sx(h.x), x2: sx(h.x), y1: mt, y2: mt + ph }));
      if (h.y >= v.y0 && h.y <= v.y1) gh.appendChild(svg("circle", { cx: sx(h.x), cy: sy(h.y), r: 4 }));
      var rt = svg("text", { x: ml + 8, y: mt + 16, class: "lab-plot__readout" });
      rt.textContent = "x = " + fmt(h.x) + "   p(x) = " + (h.snap ? "0" : fmt(h.y));
      gh.appendChild(rt);
      s.appendChild(gh);
    }
  };

  /* ---------- aplicació ---------- */

  function mount() {
    var root = document.getElementById("lab-polinomis");
    if (!root || root.getAttribute("data-ready")) return;
    root.setAttribute("data-ready", "1");
    if (!PL) {
      root.innerHTML = '<p class="lab-error">No s\'ha pogut carregar el motor del laboratori.</p>';
      return;
    }

    root.innerHTML = "";
    root.classList.add("lab");

    // formulari
    var form = el("form", "lab-input");
    form.setAttribute("autocomplete", "off");
    var lab = el("label", "lab-input__label", tex("p(x)="));
    lab.setAttribute("for", "lab-p");
    var input = el("input");
    input.type = "text";
    input.id = "lab-p";
    input.spellcheck = false;
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("placeholder", "x^3 - 2x^2 - 5x + 6");
    input.setAttribute("aria-label", "Polinomi");
    form.appendChild(lab);
    form.appendChild(input);
    root.appendChild(form);

    root.appendChild(
      el(
        "p",
        "lab-help",
        "Escriu el polinomi amb <code>^</code> per a les potències (<code>x^3</code>), <code>/</code> per a les fraccions (<code>1/2x^2</code>) o com a producte de factors (<code>(x-1)(x+2)^2</code>). Admet decimals."
      )
    );

    var ex = el("div", "lab-examples");
    ex.appendChild(el("span", "lab-examples__t", "Exemples:"));
    EXAMPLES.forEach(function (e) {
      var b = el("button", "lab-chip", esc(pretty(e)));
      b.type = "button";
      b.addEventListener("click", function () {
        input.value = e;
        run(true);
      });
      ex.appendChild(b);
    });
    root.appendChild(ex);

    var err = el("div", "lab-error");
    err.setAttribute("role", "alert");
    err.hidden = true;
    root.appendChild(err);

    var out = el("div", "lab-out");
    out.hidden = true;
    root.appendChild(out);

    var secPrev = el("div", "lab-summary");
    var secRes = el("section", "lab-card lab-result");
    var secPlot = el("section", "lab-plotwrap");
    var secRoots = el("section", "lab-rootsec");
    var secSteps = el("section", "lab-stepsec");
    [secPrev, secRes, secPlot, secRoots, secSteps].forEach(function (s) { out.appendChild(s); });

    // gràfica
    var figure = el("figure", "lab-plot");
    var plotBox = el("div", "lab-plot__box");
    figure.appendChild(plotBox);
    var bar = el("div", "lab-plot__bar");
    function mkBtn(txt, title, fn) {
      var b = el("button", "lab-tool", txt);
      b.type = "button";
      b.title = title;
      b.setAttribute("aria-label", title);
      b.addEventListener("click", fn);
      bar.appendChild(b);
    }
    var plot = new Plot(plotBox);
    mkBtn("+", "Apropa", function () { plot.zoom(0.8); });
    mkBtn("−", "Allunya", function () { plot.zoom(1.25); });
    mkBtn("Ajusta la vista", "Torna a la vista inicial", function () { plot.fit(); });
    bar.appendChild(el("span", "lab-plot__hint", "Arrossega per moure; Ctrl + roda del ratolí per fer zoom; doble clic per ajustar."));
    figure.appendChild(bar);
    secPlot.appendChild(el("h3", null, "Gràfica"));
    secPlot.appendChild(figure);

    var current = null;

    function showError(msg) {
      err.hidden = false;
      err.innerHTML = rich(msg);
      out.classList.add("is-stale");
    }
    function clearError() {
      err.hidden = true;
      out.classList.remove("is-stale");
    }

    function render(res, text) {
      out.hidden = false;
      current = res;
      // resum
      secPrev.innerHTML = "";
      secRes.innerHTML = "";
      secRoots.innerHTML = "";
      secSteps.innerHTML = "";

      if (res.special === "zero") {
        secPrev.innerHTML = '<div class="lab-card">' + rich(res.message) + "</div>";
        secPlot.hidden = true;
        return;
      }
      secPlot.hidden = false;

      secPrev.innerHTML = "<div class='lab-poly'>" + tex("p(x)=" + PL.polyTeX(res.p), true) + "</div>";

      // resultat
      if (res.special === "const") {
        secRes.innerHTML = "<p>És un polinomi constant: no té arrels i no es pot descompondre en factors.</p>";
      } else {
        var h = "<h3>Factorització</h3>" + "<div class='lab-final'>" + tex(res.finalTeX, true) + "</div>";
        if (res.altTeX) h += "<p class='lab-final__alt'>Amb coeficients enters:</p><div class='lab-final'>" + tex(res.altTeX, true) + "</div>";
        if (!res.exact) h += "<p class='lab-note'>Hi ha factors sense arrels racionals: les arrels i els coeficients que apareixen amb decimals són <strong>aproximats</strong>.</p>";
        secRes.innerHTML = h;
      }

      // taula d'arrels
      if (res.special !== "const") {
        var rh = "<h3>Arrels reals</h3>";
        if (!res.roots.length) {
          secRoots.innerHTML = rh + "<p>" + rich("El polinomi no té cap arrel real: la gràfica no talla l'eix $OX$, i tots els factors són de grau $2$ irreductibles.") + "</p>";
        } else {
          rh += '<div class="md-typeset__table"><table><thead><tr><th>Arrel</th><th>Valor aproximat</th><th>Multiplicitat</th></tr></thead><tbody>';
          res.roots.forEach(function (r) {
            rh += "<tr><td>" + tex(r.approx ? "x" + r.exact : "x=" + r.exact) + "</td><td>" + esc(fmt(r.val, 4)) + "</td><td>" + r.mult + "</td></tr>";
          });
          rh += "</tbody></table></div>";
          secRoots.innerHTML = rh;
        }
      }

      // gràfica
      var coefs = PL.toNumCoefs(res.p);
      var rootsForPlot = res.roots.map(function (r) {
        return { x: r.val, mult: r.mult, label: r.label };
      });
      plot.setData(coefs, rootsForPlot);

      // passos
      if (res.steps && res.steps.length && res.special !== "const") {
        var ol = el("ol", "lab-steps");
        res.steps.forEach(function (st, idx) {
          var li = el("li", "lab-step");
          var head = el("div", "lab-step__head");
          head.appendChild(el("span", "lab-step__n", String(idx + 1)));
          head.appendChild(el("h4", "lab-step__title", rich(st.title)));
          li.appendChild(head);
          var body = el("div", "lab-step__body");
          st.blocks.forEach(function (b) {
            if (b.t === "p") body.appendChild(el("p", null, rich(b.s)));
            else if (b.t === "math") body.appendChild(el("div", "lab-math", tex(b.s, true)));
            else if (b.t === "ruffini") body.appendChild(el("div", "lab-ruffini-wrap", ruffiniHTML(b)));
          });
          li.appendChild(body);
          ol.appendChild(li);
        });
        secSteps.appendChild(el("h3", null, "Procés pas a pas"));
        secSteps.appendChild(ol);
      }
    }

    function run(focusOut) {
      var text = input.value;
      if (!text.trim()) {
        out.hidden = true;
        showError("Escriu un polinomi, per exemple $x^3-2x^2-5x+6$.");
        return;
      }
      try {
        var res = PL.analyzeText(text);
        clearError();
        render(res, text);
      } catch (e) {
        if (e && e.polyError) showError(e.message);
        else {
          showError("Hi ha hagut un error inesperat en analitzar aquest polinomi.");
          if (window.console) console.error(e);
        }
      }
    }

    var timer = null;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () { run(false); }, 300);
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearTimeout(timer);
      run(true);
    });

    // valor inicial: ?p=... o exemple per defecte
    var start = DEFAULT;
    try {
      var qs = new URLSearchParams(window.location.search).get("p");
      if (qs) start = qs;
    } catch (e3) { /* res */ }
    input.value = start;
    run(false);
  }

  /* ---------- gràfiques d'exemple (no interactives) ---------- */

  function mountDemos() {
    var nodes = document.querySelectorAll(".lab-demo");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.getAttribute("data-ready") || !PL) continue;
      node.setAttribute("data-ready", "1");
      try {
        var p = PL.parsePoly(node.getAttribute("data-poly"));
        var coefs = PL.toNumCoefs(p);
        var xs = node.getAttribute("data-xs").split(",").map(Number);
        var pts = xs.map(function (x) {
          var y = PL.pevalNum(coefs, x);
          var isRoot = Math.abs(y) < 1e-9;
          var sep = Number.isInteger(x) && Number.isInteger(y) ? ", " : "; ";
          return {
            x: x,
            y: isRoot ? 0 : y,
            root: isRoot,
            label: "(" + fmt(x) + sep + fmt(isRoot ? 0 : y) + ")",
          };
        });
        node.classList.add("lab-plot");
        var plot = new Plot(node, { static: true, aspect: 0.5, points: pts, label: "Gràfica de p(x) = " + node.getAttribute("data-poly") });
        plot.coefs = coefs;
        var xmn = Math.min.apply(null, xs);
        var xmx = Math.max.apply(null, xs);
        var x0 = xmn - 0.7;
        var x1 = xmx + 0.7;
        var lo = 0;
        var hi = 0;
        for (var k = 0; k <= 200; k++) {
          var y2 = PL.pevalNum(coefs, xmn + ((xmx - xmn) * k) / 200);
          lo = Math.min(lo, y2);
          hi = Math.max(hi, y2);
        }
        var m = (hi - lo) * 0.3;
        plot.view = { x0: x0, x1: x1, y0: lo - m, y1: hi + m };
        plot.draw();
      } catch (e) {
        if (window.console) console.error(e);
      }
    }
  }

  function init() {
    mount();
    mountDemos();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
