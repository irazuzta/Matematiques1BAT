/* Laboratori d'equacions — interfície (pàgina equacions/laboratori.md).
 * Necessita polinomis-engine.js (window.PolyLab), equacions-engine.js
 * (window.EqLab) i KaTeX (window.katex).
 */
(function () {
  "use strict";

  var SVGNS = "http://www.w3.org/2000/svg";
  var EXAMPLES = [
    ["x^2", "x+2"],
    ["x^3-3x", "2"],
    ["x^4-5x^2", "-4"],
    ["x^2+1", "2x"],
    ["2(x+1)", "2x+3"],
    ["sqrt(x+5)", "x-1"],
    ["2^x", "x+2"],
    ["log(x)", "1-x"],
  ];

  /* ---------- utilitats ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function tex(s, display) {
    if (window.katex) {
      try {
        return window.katex.renderToString(s, { throwOnError: false, displayMode: !!display });
      } catch (e) {
        /* text pla */
      }
    }
    return "<code>" + esc(s) + "</code>";
  }
  function rich(str) {
    return String(str)
      .split("$")
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
      .replace(/sqrt/g, "√")
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
    var s = Math.abs(x) < 0.5 * Math.pow(10, -(d === undefined ? 3 : d)) ? "0" : x.toFixed(d === undefined ? 3 : d);
    if (s.indexOf(".") >= 0) s = s.replace(/0+$/, "").replace(/\.$/, "");
    if (s === "-0") s = "0";
    return s.replace(".", ",").replace("-", "−");
  }

  function ruffiniHTML(b) {
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

  // curves: [{f, cls}]; marks: [{x, y, label, mult}]; mode: 'two' | 'diff'
  function Plot(container, opts) {
    this.opts = opts || {};
    this.box = container;
    this.svg = svg("svg", { class: "lab-plot__svg" + (this.opts.static ? " is-static" : ""), role: "img", "aria-label": this.opts.label || "Gràfica de l'equació" });
    this.box.appendChild(this.svg);
    this.curves = [];
    this.marks = [];
    this.bands = null; // inequacions: [{lo, hi, loC, hiC}] sobre l'eix OX
    this.cond = null; // inequacions: funció y -> bool (tram de la corba que la compleix)
    this.mode = "two";
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
  Plot.prototype.set = function (curves, marks, mode, keepView) {
    this.curves = curves;
    this.marks = marks;
    this.mode = mode;
    if (keepView) this.draw();
    else this.fit();
  };
  Plot.prototype.fit = function () {
    if (this.opts.view) {
      this.view = Object.assign({}, this.opts.view);
      this.draw();
      return;
    }
    var xs = this.marks.map(function (m) { return m.x; });
    var x0, x1;
    if (xs.length) {
      var xmin = Math.min.apply(null, xs.concat([0]));
      var xmax = Math.max.apply(null, xs.concat([0]));
      var pad = Math.max(1.5, (xmax - xmin) * 0.35);
      x0 = xmin - pad;
      x1 = xmax + pad;
    } else {
      x0 = -5;
      x1 = 5;
    }
    if (x1 - x0 < 5) {
      var c = (x0 + x1) / 2;
      x0 = c - 2.5;
      x1 = c + 2.5;
    }
    var ys = [];
    var N = 400;
    this.curves.forEach(function (cv) {
      for (var i = 0; i <= N; i++) {
        var y = cv.f(x0 + ((x1 - x0) * i) / N);
        if (isFinite(y)) ys.push(y);
      }
    });
    ys.sort(function (a, b) { return a - b; });
    var lo = ys.length ? ys[Math.floor(ys.length * 0.05)] : -5;
    var hi = ys.length ? ys[Math.max(0, Math.ceil(ys.length * 0.95) - 1)] : 5;
    var must = [0];
    this.marks.forEach(function (m) { must.push(m.y); });
    lo = Math.min.apply(null, must.concat([lo]));
    hi = Math.max.apply(null, must.concat([hi]));
    if (hi - lo < 1e-9) {
      lo -= 1;
      hi += 1;
    }
    var mg = (hi - lo) * 0.15;
    this.view = { x0: x0, x1: x1, y0: lo - mg, y1: hi + mg };
    this.draw();
  };
  Plot.prototype.zoom = function (k, e) {
    var v = this.view;
    var cx = (v.x0 + v.x1) / 2;
    var cy = (v.y0 + v.y1) / 2;
    if (e) {
      var d = this.toData(e);
      cx = d.x;
      cy = d.y;
    }
    this.view = { x0: cx - (cx - v.x0) * k, x1: cx + (v.x1 - cx) * k, y0: cy - (cy - v.y0) * k, y1: cy + (v.y1 - cy) * k };
    this.draw();
  };
  Plot.prototype.toData = function (e) {
    var rect = this.svg.getBoundingClientRect();
    var px = ((e.clientX - rect.left) / rect.width) * this.W;
    var py = ((e.clientY - rect.top) / rect.height) * this.H;
    var v = this.view;
    return {
      x: v.x0 + ((px - this.ml) / (this.W - this.ml - this.mr)) * (v.x1 - v.x0),
      y: v.y1 - ((py - this.mt) / (this.H - this.mt - this.mb)) * (v.y1 - v.y0),
    };
  };
  Plot.prototype.onDown = function (e) {
    this.drag = { cx: e.clientX, cy: e.clientY, view: Object.assign({}, this.view) };
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
    var sxp = (this.W - this.ml - this.mr) / (this.view.x1 - this.view.x0);
    var snap = null;
    this.marks.forEach(function (m) {
      if (Math.abs(m.x - d.x) * sxp < 9) snap = m.x;
    });
    this.hover = { x: snap !== null ? snap : d.x, snap: snap !== null };
    this.draw();
  };

  Plot.prototype.draw = function () {
    var W = Math.max(280, Math.round(this.box.clientWidth || 600));
    var H = Math.max(this.opts.static ? 200 : 240, Math.min(440, Math.round(W * (this.opts.aspect || 0.62))));
    this.W = W;
    this.H = H;
    var ml = 46, mr = 14, mt = 14, mb = 28;
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

    var clipId = "eqclip" + (this.id = this.id || Math.floor(Math.random() * 1e6));
    var defs = svg("defs", {});
    var cp = svg("clipPath", { id: clipId });
    cp.appendChild(svg("rect", { x: ml, y: mt, width: pw, height: ph }));
    defs.appendChild(cp);
    s.appendChild(defs);

    var gx = niceStep(v.x1 - v.x0, Math.max(3, Math.round(pw / 90)));
    var gy = niceStep(v.y1 - v.y0, Math.max(3, Math.round(ph / 55)));
    var grid = svg("g", { class: "lab-plot__grid" });
    var labels = svg("g", { class: "lab-plot__ticks" });
    for (var i = Math.ceil(v.x0 / gx); i * gx <= v.x1; i++) {
      var X = sx(i * gx);
      grid.appendChild(svg("line", { x1: X, x2: X, y1: mt, y2: mt + ph }));
      var t = svg("text", { x: X, y: mt + ph + 17, "text-anchor": "middle" });
      t.textContent = fmt(i * gx, 6);
      labels.appendChild(t);
    }
    for (var j = Math.ceil(v.y0 / gy); j * gy <= v.y1; j++) {
      var Y = sy(j * gy);
      grid.appendChild(svg("line", { x1: ml, x2: ml + pw, y1: Y, y2: Y }));
      var t2 = svg("text", { x: ml - 6, y: Y + 4, "text-anchor": "end" });
      t2.textContent = fmt(j * gy, 6);
      labels.appendChild(t2);
    }
    s.appendChild(grid);
    var axes = svg("g", { class: "lab-plot__axes" });
    if (v.y0 < 0 && v.y1 > 0) axes.appendChild(svg("line", { x1: ml, x2: ml + pw, y1: sy(0), y2: sy(0) }));
    if (v.x0 < 0 && v.x1 > 0) axes.appendChild(svg("line", { x1: sx(0), x2: sx(0), y1: mt, y2: mt + ph }));
    axes.appendChild(svg("rect", { x: ml, y: mt, width: pw, height: ph, class: "lab-plot__frame" }));
    s.appendChild(axes);
    s.appendChild(labels);

    // corbes
    var g = svg("g", { "clip-path": "url(#" + clipId + ")" });
    var N = Math.max(300, Math.round(pw * 1.5));
    var big = (v.y1 - v.y0) * 50;
    var mid = (v.y0 + v.y1) / 2;
    this.curves.forEach(function (cv) {
      var d = "";
      var open = false;
      var prevY = null;
      for (var k = 0; k <= N; k++) {
        var x = v.x0 + ((v.x1 - v.x0) * k) / N;
        var y = cv.f(x);
        if (!isFinite(y)) {
          open = false;
          continue;
        }
        // salt gran (asímptota): no unim els punts
        if (open && prevY !== null && Math.abs(y - prevY) > (v.y1 - v.y0) * 3 && Math.sign(y - mid) !== Math.sign(prevY - mid)) open = false;
        prevY = y;
        y = Math.max(mid - big, Math.min(mid + big, y));
        d += (open ? "L" : "M") + sx(x).toFixed(2) + " " + sy(y).toFixed(2);
        open = true;
      }
      g.appendChild(svg("path", { d: d, class: "eq-curve " + cv.cls }));
    });
    // inequacions: trams de la corba que compleixen la desigualtat
    var cond = this.cond;
    if (cond && this.curves.length) {
      var f0 = this.curves[0].f;
      var dOn = "";
      var on = false;
      for (var q = 0; q <= N; q++) {
        var xq = v.x0 + ((v.x1 - v.x0) * q) / N;
        var yq = f0(xq);
        if (!isFinite(yq) || !cond(yq)) {
          on = false;
          continue;
        }
        yq = Math.max(mid - big, Math.min(mid + big, yq));
        dOn += (on ? "L" : "M") + sx(xq).toFixed(2) + " " + sy(yq).toFixed(2);
        on = true;
      }
      if (dOn) g.appendChild(svg("path", { d: dOn, class: "eq-curve ineq-on" }));
    }
    s.appendChild(g);

    // solucions
    var two = this.mode === "two";
    var gm = svg("g", { class: "eq-marks" });
    var axisY = v.y0 < 0 && v.y1 > 0 ? sy(0) : v.y0 >= 0 ? mt + ph : mt;
    var bands = this.bands;
    if (bands) {
      bands.forEach(function (b) {
        var X0 = b.lo === -Infinity ? ml : Math.max(ml, sx(b.lo));
        var X1 = b.hi === Infinity ? ml + pw : Math.min(ml + pw, sx(b.hi));
        if (X1 - X0 > 0.5) gm.appendChild(svg("line", { x1: X0, x2: X1, y1: axisY, y2: axisY, class: "ineq-band" }));
      });
    }
    var prevLX = null;
    var prevAlt = false;
    this.marks.forEach(function (m) {
      if (m.x < v.x0 || m.x > v.x1) return;
      var X = sx(m.x);
      if (two && m.y >= v.y0 && m.y <= v.y1) {
        gm.appendChild(svg("line", { x1: X, x2: X, y1: sy(m.y), y2: axisY, class: "eq-drop" }));
        var cpt = svg("circle", { cx: X, cy: sy(m.y), r: 5.5, class: "eq-pt" });
        var ti = svg("title", {});
        ti.textContent = "(" + m.label + ", " + fmt(m.y) + ")";
        cpt.appendChild(ti);
        gm.appendChild(cpt);
      }
      if (bands) gm.appendChild(svg("circle", { cx: X, cy: axisY, r: 5, class: m.inSol ? "ineq-end is-closed" : "ineq-end is-open" }));
      else gm.appendChild(svg("circle", { cx: X, cy: axisY, r: two ? 4 : 5.5, class: "eq-root" }));
      var below = !(two && m.y < 0) && axisY < mt + ph - 22;
      // en mode "tot en un membre", etiqueta a sobre només si és a prop de l'anterior
      var alt = !two && prevLX !== null && Math.abs(X - prevLX) < 34 && !prevAlt;
      prevAlt = alt;
      prevLX = X;
      var ty = below ? axisY + (alt ? -11 : 19) : axisY - 11;
      var tt = svg("text", { x: X, y: ty, "text-anchor": "middle" });
      tt.textContent = m.label + (m.mult > 1 ? " (×" + m.mult + ")" : "");
      gm.appendChild(tt);
    });
    s.appendChild(gm);

    // cursor
    if (this.hover && this.hover.x >= v.x0 && this.hover.x <= v.x1 && this.curves.length) {
      var h = this.hover;
      var gh = svg("g", { class: "lab-plot__hover" });
      gh.appendChild(svg("line", { x1: sx(h.x), x2: sx(h.x), y1: mt, y2: mt + ph }));
      var vals = this.curves.map(function (cv) { return cv.f(h.x); });
      vals.forEach(function (y, k) {
        if (isFinite(y) && y >= v.y0 && y <= v.y1) gh.appendChild(svg("circle", { cx: sx(h.x), cy: sy(y), r: 4, class: "eq-hov " + (two ? (k === 0 ? "is-l" : "is-r") : "is-l") }));
      });
      var txt = "x = " + fmt(h.x);
      var show = function (y) { return isFinite(y) ? fmt(y) : "no definit"; };
      if (two) txt += "   esquerre = " + show(vals[0]) + "   dret = " + show(vals[1]);
      else txt += "   f(x) = " + (h.snap ? "0" : show(vals[0]));
      var rt = svg("text", { x: ml + 8, y: mt + 16, class: "lab-plot__readout" });
      rt.textContent = txt;
      gh.appendChild(rt);
      s.appendChild(gh);
    }
  };

  /* ---------- aplicació ---------- */

  function mount() {
    var root = document.getElementById("lab-equacions");
    if (!root || root.getAttribute("data-ready")) return;
    root.setAttribute("data-ready", "1");
    var EQ = window.EqLab;
    if (!EQ || !window.PolyLab) {
      root.innerHTML = '<p class="lab-error">No s\'ha pogut carregar el motor del laboratori.</p>';
      return;
    }
    root.innerHTML = "";
    root.classList.add("lab");

    var form = el("form", "lab-input eq-input");
    form.setAttribute("autocomplete", "off");
    function mkInput(id, ph, aria) {
      var i = el("input");
      i.type = "text";
      i.id = id;
      i.spellcheck = false;
      i.setAttribute("autocapitalize", "off");
      i.setAttribute("placeholder", ph);
      i.setAttribute("aria-label", aria);
      return i;
    }
    var inL = mkInput("eq-l", "x^2", "Primer membre de l'equació");
    var inR = mkInput("eq-r", "x + 2", "Segon membre de l'equació");
    form.appendChild(inL);
    form.appendChild(el("span", "eq-input__eq", "="));
    form.appendChild(inR);
    var sub = el("button", "eq-submit", "Resol");
    sub.type = "submit";
    sub.hidden = true;
    form.appendChild(sub);
    root.appendChild(form);

    root.appendChild(
      el(
        "p",
        "lab-help",
        "Escriu cada membre de l'equació a la seva caixa. Fes servir <code>^</code> per a les potències (<code>x^3</code>), <code>/</code> per a les fraccions (<code>x/2</code>) i parèntesis (<code>(x-1)(x+2)</code>). " +
          "També pots escriure altres funcions, però aleshores només se'n dibuixa la gràfica i se'n donen les solucions aproximades: <code>sqrt(x)</code> (arrel quadrada), <code>cbrt(x)</code> (arrel cúbica), <code>2^x</code>, <code>e^x</code>, <code>ln(x)</code>, <code>log(x)</code>, <code>log_2(x)</code>, <code>abs(x)</code>."
      )
    );

    var ex = el("div", "lab-examples");
    ex.appendChild(el("span", "lab-examples__t", "Exemples:"));
    EXAMPLES.forEach(function (e) {
      var b = el("button", "lab-chip", esc(pretty(e[0]) + " = " + pretty(e[1])));
      b.type = "button";
      b.addEventListener("click", function () {
        inL.value = e[0];
        inR.value = e[1];
        run();
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

    var secEq = el("div", "lab-card eq-summary");
    var secPlot = el("section", "lab-plotwrap");
    var secSteps = el("section", "lab-stepsec");
    [secEq, secPlot, secSteps].forEach(function (s) { out.appendChild(s); });

    // gràfica
    secPlot.appendChild(el("h3", null, "Gràfica"));
    var seg = el("div", "eq-seg");
    seg.setAttribute("role", "group");
    seg.setAttribute("aria-label", "Tipus de gràfica");
    var bTwo = el("button", "eq-seg__b is-on", "Dues gràfiques");
    var bDiff = el("button", "eq-seg__b", "Tot en un membre");
    [bTwo, bDiff].forEach(function (b) {
      b.type = "button";
      seg.appendChild(b);
    });
    secPlot.appendChild(seg);
    var legend = el("div", "eq-legend");
    secPlot.appendChild(legend);
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
    secPlot.appendChild(figure);
    var plotNote = el("p", "lab-note");
    secPlot.appendChild(plotNote);

    var mode = "two";
    var current = null;

    function setMode(m, keep) {
      mode = m;
      bTwo.classList.toggle("is-on", m === "two");
      bDiff.classList.toggle("is-on", m === "diff");
      bTwo.setAttribute("aria-pressed", m === "two");
      bDiff.setAttribute("aria-pressed", m === "diff");
      if (current) drawPlot(keep);
    }
    bTwo.addEventListener("click", function () { setMode("two", false); });
    bDiff.addEventListener("click", function () { setMode("diff", false); });

    function drawPlot(keep) {
      var r = current;
      var marks = r.sols.map(function (s) {
        return { x: s.val, y: mode === "two" ? r.fl(s.val) : 0, label: s.label, mult: s.mult };
      });
      var fTeX = r.mode === "poly" ? window.EqLab.polyTeX(r.pdiff) : r.texL + "-\\left(" + r.texR + "\\right)";
      if (mode === "two") {
        plot.set(
          [
            { f: r.fl, cls: "is-l" },
            { f: r.fr, cls: "is-r" },
          ],
          marks,
          "two",
          keep
        );
        legend.innerHTML =
          '<span class="eq-legend__i"><span class="eq-sw is-l"></span>' + tex("y=" + r.texL) + "</span>" +
          '<span class="eq-legend__i"><span class="eq-sw is-r"></span>' + tex("y=" + r.texR) + "</span>";
        plotNote.innerHTML = rich(
          r.kind === "identity" || r.kind === "many"
            ? "Les dues gràfiques coincideixen: tots els punts són comuns."
            : r.sols.length
            ? "Les solucions són les abscisses dels punts on es tallen les dues gràfiques (marcats amb una línia fins a l'eix $OX$)."
            : "Les dues gràfiques no es tallen: l'equació no té solució."
        );
      } else {
        plot.set(
          [
            {
              f: function (x) {
                var a = r.fl(x);
                var b = r.fr(x);
                return isFinite(a) && isFinite(b) ? a - b : NaN;
              },
              cls: "is-l",
            },
          ],
          marks,
          "diff",
          keep
        );
        legend.innerHTML = '<span class="eq-legend__i"><span class="eq-sw is-l"></span>' + tex("f(x)=" + fTeX) + "</span>";
        plotNote.innerHTML = rich(
          r.kind === "identity" || r.kind === "many"
            ? "La funció $f(x)$ val zero: la gràfica és el mateix eix $OX$."
            : r.sols.length
            ? "Hem passat tots els termes al primer membre: les solucions són els punts on la gràfica de $f(x)$ talla l'eix $OX$."
            : "La gràfica de $f(x)$ no talla l'eix $OX$: l'equació no té solució."
        );
      }
    }

    function showError(msg) {
      err.hidden = false;
      err.innerHTML = rich(msg);
      out.classList.add("is-stale");
    }
    function clearError() {
      err.hidden = true;
      out.classList.remove("is-stale");
    }

    function render(r) {
      out.hidden = false;
      current = r;
      // equació i solucions
      var h = "<div class='lab-poly'>" + tex(r.eqTeX, true) + "</div>";
      var sum;
      if (r.kind === "identity") sum = "És una **identitat**: qualsevol nombre real és solució.";
      else if (r.kind === "many") sum = "Té **infinites solucions** (els dos membres coincideixen en tot un interval).";
      else if (!r.sols.length) sum = "**No té cap solució real.**";
      else {
        var parts = r.sols.map(function (s) {
          return "$x" + (s.approxTeX ? s.tex : "=" + s.tex) + "$" + (s.mult > 1 ? " (" + (s.mult === 2 ? "doble" : s.mult === 3 ? "triple" : "multiplicitat " + s.mult) + ")" : "");
        });
        sum = "**" + (r.sols.length === 1 ? "Solució" : "Solucions") + ":** " + parts.join(", ");
        if (r.mode === "numeric") sum += " (aproximades)";
      }
      h += "<p class='eq-sols'>" + rich(sum) + "</p>";
      secEq.innerHTML = h;
      drawPlot(false);
      // passos
      secSteps.innerHTML = "";
      secSteps.appendChild(el("h3", null, r.mode === "poly" ? "Resolució pas a pas" : "Solucions aproximades"));
      var ol = el("ol", "lab-steps");
      r.steps.forEach(function (st, idx) {
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
      secSteps.appendChild(ol);
    }

    function run() {
      var l = inL.value;
      var r = inR.value;
      if (!l.trim() || !r.trim()) {
        showError("Escriu els dos membres de l'equació, per exemple $x^2$ i $x+2$.");
        return;
      }
      try {
        var res = window.EqLab.solve(l, r);
        clearError();
        render(res);
      } catch (e) {
        if (e && (e.eqError || e.polyError)) showError(e.message);
        else {
          showError("Hi ha hagut un error inesperat en analitzar aquesta equació.");
          if (window.console) console.error(e);
        }
      }
    }

    var timer = null;
    [inL, inR].forEach(function (i) {
      i.addEventListener("input", function () {
        clearTimeout(timer);
        timer = setTimeout(run, 350);
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearTimeout(timer);
      run();
    });

    var startL = EXAMPLES[0][0];
    var startR = EXAMPLES[0][1];
    try {
      var qs = new URLSearchParams(window.location.search);
      if (qs.get("l")) startL = qs.get("l");
      if (qs.get("r")) startR = qs.get("r");
    } catch (e3) { /* res */ }
    inL.value = startL;
    inR.value = startR;
    setMode("two", true);
    run();
  }

  /* ---------- gràfiques d'exemple de la pàgina (no interactives) ---------- */

  function mountDemos() {
    var EQ = window.EqLab;
    var nodes = document.querySelectorAll(".eq-demo");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.getAttribute("data-ready") || !EQ) continue;
      node.setAttribute("data-ready", "1");
      try {
        var r = EQ.solve(node.getAttribute("data-l"), node.getAttribute("data-r"));
        var m = node.getAttribute("data-mode") || "two";
        node.classList.add("lab-plot");
        var plot = new Plot(node, { static: true, aspect: 0.5, label: "Gràfica de l'equació " + node.getAttribute("data-l") + " = " + node.getAttribute("data-r") });
        var marks = r.sols.map(function (s) { return { x: s.val, y: m === "two" ? r.fl(s.val) : 0, label: s.label, mult: s.mult }; });
        var curves = m === "two" ? [{ f: r.fl, cls: "is-l" }, { f: r.fr, cls: "is-r" }] : [{ f: function (x) { return r.fl(x) - r.fr(x); }, cls: "is-l" }];
        plot.set(curves, marks, m, false);
      } catch (e) {
        if (window.console) console.error(e);
      }
    }
  }

  /* ---------- gràfiques d'inequacions de la teoria (no interactives) ----------
     <div class="ineq-demo" data-poly="x^2-x-6" data-rel="<" data-labels="−2;3"
          data-view="-4,5,-8,8"></div>
     Sense data-rel només es dibuixa la paràbola i els punts de tall. */

  var RELS = {
    "<": function (y) { return y < 0; },
    "<=": function (y) { return y <= 0; },
    ">": function (y) { return y > 0; },
    ">=": function (y) { return y >= 0; },
  };

  function ineqBands(f, roots, rel) {
    var test = RELS[rel];
    var strict = rel === "<" || rel === ">";
    var tol = 1e-9;
    var rs = roots.slice().sort(function (a, b) { return a - b; });
    // peces ordenades: interval, punt, interval, punt, ..., interval
    var pieces = [];
    var edges = [-Infinity].concat(rs, [Infinity]);
    for (var i = 0; i < edges.length - 1; i++) {
      var a = edges[i];
      var b = edges[i + 1];
      var t = a === -Infinity ? (b === Infinity ? 0 : b - 1) : b === Infinity ? a + 1 : (a + b) / 2;
      var y = f(t);
      pieces.push({ lo: a, hi: b, pt: false, ok: Math.abs(y) > tol && test(y) });
      if (b !== Infinity) pieces.push({ lo: b, hi: b, pt: true, ok: !strict });
    }
    var out = [];
    var cur = null;
    pieces.forEach(function (p) {
      if (!p.ok) {
        if (cur) out.push(cur);
        cur = null;
        return;
      }
      if (!cur) cur = { lo: p.lo, hi: p.hi, loC: p.pt, hiC: p.pt };
      else {
        cur.hi = p.hi;
        cur.hiC = p.pt;
      }
    });
    if (cur) out.push(cur);
    return out;
  }

  function mountIneq() {
    var EQ = window.EqLab;
    var nodes = document.querySelectorAll(".ineq-demo");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.getAttribute("data-ready") || !EQ) continue;
      node.setAttribute("data-ready", "1");
      try {
        var poly = node.getAttribute("data-poly");
        var rel = node.getAttribute("data-rel");
        rel = { lt: "<", le: "<=", gt: ">", ge: ">=" }[rel] || rel;
        var r = EQ.solve(poly, "0");
        var labels = (node.getAttribute("data-labels") || "").split(";").filter(function (t) { return t; });
        var view = null;
        var vv = (node.getAttribute("data-view") || "").split(",").map(Number);
        if (vv.length === 4 && vv.every(isFinite)) view = { x0: vv[0], x1: vv[1], y0: vv[2], y1: vv[3] };
        node.classList.add("lab-plot");
        var plot = new Plot(node, { static: true, aspect: 0.5, view: view, label: "Gràfica de y = " + poly });
        var hasRel = !!RELS[rel];
        var strict = rel === "<" || rel === ">";
        var marks = r.sols.map(function (s, k) { return { x: s.val, y: 0, label: labels[k] || s.label, mult: 1, inSol: !strict }; });
        if (hasRel) {
          plot.bands = ineqBands(r.fl, r.sols.map(function (s) { return s.val; }), rel);
          plot.cond = RELS[rel];
        }
        plot.set([{ f: r.fl, cls: "is-l" }], marks, "diff", false);
      } catch (e) {
        if (window.console) console.error(e);
      }
    }
  }

  window.EqLabIneqBands = ineqBands;

  function init() {
    mount();
    mountDemos();
    mountIneq();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) document$.subscribe(init);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
