/* The PM & AI PM Handbook — app logic (vanilla, no framework) */
(function () {
  "use strict";
  var H = window.HANDBOOK;
  var view = document.getElementById("view");
  var navEl = document.getElementById("nav");
  var progress = document.getElementById("progress");
  var modal = document.getElementById("search-modal");
  var searchInput = document.getElementById("search-input");
  var resultsEl = document.getElementById("search-results");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function partIdOfPage(pageId) {
    for (var pid in H.parts) if (H.parts[pid].pages.indexOf(pageId) >= 0) return pid;
    return null;
  }
  function firstPageOfPart(pid) { return H.parts[pid].pages[0]; }

  /* ---------------- theme ---------------- */
  function initTheme() {
    var saved = localStorage.getItem("hb-theme");
    var t = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
  }
  initTheme();
  document.getElementById("theme-btn").addEventListener("click", function () {
    var t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("hb-theme", t);
  });

  /* ---------------- sidebar ---------------- */
  function buildNav() {
    var html = "";
    H.groups.forEach(function (g) {
      html += '<div class="nav-group-label">' + esc(g.label) + "</div>";
      g.parts.forEach(function (pid) {
        var p = H.parts[pid];
        if (p.type === "glossary") {
          html += '<div class="nav-part"><a class="nav-link glossary" data-nav="' + firstPageOfPart(pid) +
            '"><span class="part-no">' + p.num + "</span> " + esc(p.title) + "</a></div>";
        } else {
          html += '<div class="nav-part collapsed" data-part="' + pid + '">' +
            '<button data-toggle-part="' + pid + '">' +
            '<svg class="twirl" viewBox="0 0 24 24" width="14" height="14"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '<span class="part-no">' + p.num + '</span><span>' + esc(p.title) + "</span></button>" +
            '<div class="nav-children">';
          p.pages.forEach(function (cid) {
            var c = H.pages[cid];
            html += '<a class="nav-link" data-nav="' + cid + '">' +
              '<span class="part-no" style="color:var(--text-3)">' + c.num + "</span> " + esc(c.title) + "</a>";
          });
          html += "</div></div>";
        }
      });
    });
    navEl.innerHTML = html;
  }

  function setActiveNav(pageId) {
    var links = navEl.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) links[i].classList.toggle("active", links[i].getAttribute("data-nav") === pageId);
    var pid = partIdOfPage(pageId);
    var partEl = navEl.querySelector('[data-part="' + pid + '"]');
    if (partEl) partEl.classList.remove("collapsed");
  }

  /* ---------------- rendering ---------------- */
  function stripTags(h) { var d = document.createElement("div"); d.innerHTML = h; return d.textContent || ""; }
  function blurb(htmlStr, n) { var t = stripTags(htmlStr).trim(); return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, "") + "…" : t; }

  function renderHome() {
    var m = H.meta;
    var s = "";
    s += '<section class="hero">';
    s += '<span class="hero-edition">' + esc(m.edition) + "</span>";
    s += "<h1>" + esc(m.title) + "</h1>";
    s += '<p class="lede">' + esc(m.subtitle) + "</p>";
    s += '<p class="stats">' + esc(m.stats) + "</p>";
    s += '<div class="hero-cta">' +
      '<a class="btn btn-primary" data-nav="' + H.order[0] + '">Start reading →</a>' +
      '<a class="btn btn-ghost" data-nav="glossary-3">Browse glossary</a></div>';
    s += "</section>";
    H.groups.forEach(function (g) {
      s += '<div class="home-section-label">' + esc(g.label) + "</div>";
      s += '<div class="parts-grid">';
      g.parts.forEach(function (pid) {
        var p = H.parts[pid];
        var meta = p.type === "glossary" ? p.count + " terms" : p.count + " chapters";
        s += '<a class="part-card" data-nav="' + firstPageOfPart(pid) + '">' +
          '<span class="pc-track"></span>' +
          '<div class="pc-no">PART ' + (p.num < 10 ? "0" : "") + p.num + "</div>" +
          "<h3>" + esc(p.title) + "</h3>" +
          "<p>" + esc(blurb(p.intro_html, 96)) + "</p>" +
          '<div class="pc-meta">' + meta + " →</div></a>";
      });
      s += "</div>";
    });
    return s;
  }

  function renderChapter(pageId) {
    var c = H.pages[pageId];
    var s = '<div class="chapter-head"><div class="eyebrow">' + esc(c.partTitle) + "</div>" +
      '<h1 class="chapter-title">' + esc(c.title) + "</h1></div>";
    s += '<div class="chapter-layout"><div class="chapter-main prose">' + c.html + "</div>";
    if (c.sections && c.sections.length) {
      s += '<nav class="onthispage"><h4>On this page</h4>';
      c.sections.forEach(function (sec) {
        s += '<a data-scroll="' + sec.id + '">' + esc(sec.title) + "</a>";
      });
      s += "</nav>";
    }
    s += "</div>";
    s += pager(pageId);
    return s;
  }

  function pager(pageId) {
    var i = H.order.indexOf(pageId);
    var prev = i > 0 ? H.order[i - 1] : null;
    var next = i >= 0 && i < H.order.length - 1 ? H.order[i + 1] : null;
    function cell(id, dir, cls) {
      if (!id) return '<span class="empty"></span>';
      var p = H.pages[id];
      var t = p.title;
      return '<a class="' + cls + '" data-nav="' + id + '"><span class="dir">' + dir + "</span>" +
        '<span class="ttl">' + esc(t) + "</span></a>";
    }
    return '<div class="pager">' + cell(prev, "← Previous", "prev") + cell(next, "Next →", "next") + "</div>";
  }

  function renderGlossary(pageId) {
    var g = H.pages[pageId];
    var s = '<div class="gloss-head"><div class="eyebrow">Glossary</div>' +
      '<h1 class="chapter-title">' + esc(g.title) + "</h1>" +
      '<div class="prose" style="margin-top:18px">' + g.intro_html + "</div></div>";
    s += '<div class="gloss-filter"><input type="text" id="gfilter" placeholder="Filter ' + g.count +
      ' terms…" autocomplete="off" /><span class="gloss-count" id="gcount">' + g.count + " terms</span></div>";
    s += '<div class="alpha-index">';
    g.letters.forEach(function (L) { s += '<a data-scroll="L-' + pageId + "-" + L.letter + '">' + esc(L.letter) + "</a>"; });
    s += "</div>";
    s += '<div id="gloss-body">';
    g.letters.forEach(function (L) {
      s += '<section class="gloss-letter"><h2 id="L-' + pageId + "-" + L.letter + '">' + esc(L.letter) + "</h2>";
      L.terms.forEach(function (t) {
        s += '<dl class="term" id="' + t.id + '" data-term="' + esc(t.term.toLowerCase()) +
          '"><dt>' + esc(t.term) + "</dt><dd>" + t.def + "</dd></dl>";
      });
      s += "</section>";
    });
    s += "</div>";
    return s;
  }

  function renderPage(pageId) {
    var p = H.pages[pageId];
    return '<div class="chapter-head"><h1 class="chapter-title">' + esc(p.title) + "</h1></div>" +
      '<div class="chapter-main prose" style="margin:0 auto">' + p.html + "</div>";
  }

  var currentPage = null;
  function render(pageId, anchor) {
    var page = pageId === "home" ? { kind: "home" } : H.pages[pageId];
    if (!page) { location.hash = "#home"; return; }
    currentPage = pageId;
    if (page.kind === "home") view.innerHTML = renderHome();
    else if (page.kind === "chapter") view.innerHTML = renderChapter(pageId);
    else if (page.kind === "glossary") view.innerHTML = renderGlossary(pageId);
    else view.innerHTML = renderPage(pageId);

    setActiveNav(pageId);
    document.body.classList.remove("nav-open");
    document.title = (pageId === "home" ? "The PM & AI PM Handbook" : page.title + " · PM & AI PM Handbook");

    if (page.kind === "glossary") wireGlossary();

    if (anchor) {
      var t = document.getElementById(anchor);
      if (t) { t.scrollIntoView(); flash(t); }
      else window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
    updateProgress();
    updateSpy();
  }

  function flash(elm) { elm.classList.add("flash"); setTimeout(function () { elm.classList.remove("flash"); }, 1600); }

  /* ---------------- glossary filter ---------------- */
  function wireGlossary() {
    var inp = document.getElementById("gfilter");
    var count = document.getElementById("gcount");
    if (!inp) return;
    inp.addEventListener("input", function () {
      var q = inp.value.trim().toLowerCase();
      var terms = view.querySelectorAll(".term");
      var shown = 0;
      terms.forEach(function (t) {
        var hit = !q || t.getAttribute("data-term").indexOf(q) >= 0 || t.textContent.toLowerCase().indexOf(q) >= 0;
        t.style.display = hit ? "" : "none";
        if (hit) shown++;
      });
      view.querySelectorAll(".gloss-letter").forEach(function (sec) {
        var any = sec.querySelectorAll('.term:not([style*="none"])').length;
        sec.style.display = any ? "" : "none";
      });
      count.textContent = shown + (q ? " matches" : " terms");
      var empty = document.getElementById("gloss-empty");
      if (shown === 0 && !empty) {
        var d = document.createElement("div"); d.id = "gloss-empty"; d.className = "gloss-empty";
        d.textContent = "No terms match “" + inp.value + "”.";
        document.getElementById("gloss-body").appendChild(d);
      } else if (shown > 0 && empty) empty.remove();
    });
  }

  /* ---------------- routing ---------------- */
  function route() {
    var raw = decodeURIComponent(location.hash.slice(1));
    var slash = raw.indexOf("/");
    var pageId = slash >= 0 ? raw.slice(0, slash) : raw;
    var anchor = slash >= 0 ? raw.slice(slash + 1) : "";
    if (!pageId) pageId = "home";
    render(pageId, anchor);
  }
  function navigate(pageId, anchor) {
    var target = "#" + pageId + (anchor ? "/" + anchor : "");
    if (location.hash === target) render(pageId, anchor);
    else location.hash = target;
  }

  /* ---------------- delegated clicks ---------------- */
  document.addEventListener("click", function (e) {
    var navt = e.target.closest("[data-nav]");
    if (navt) { e.preventDefault(); navigate(navt.getAttribute("data-nav"), navt.getAttribute("data-anchor") || ""); return; }
    var tog = e.target.closest("[data-toggle-part]");
    if (tog) { tog.parentElement.classList.toggle("collapsed"); return; }
    var sc = e.target.closest("[data-scroll]");
    if (sc) { var t = document.getElementById(sc.getAttribute("data-scroll")); if (t) { t.scrollIntoView({ behavior: "smooth" }); } return; }
  });

  document.getElementById("menu-btn").addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
  document.getElementById("backdrop").addEventListener("click", function () { document.body.classList.remove("nav-open"); });

  /* ---------------- search ---------------- */
  var activeIdx = 0, currentResults = [];
  function openSearch() { modal.classList.add("open"); searchInput.value = ""; renderResults(""); searchInput.focus(); }
  function closeSearch() { modal.classList.remove("open"); }
  function tokens(q) { return q.toLowerCase().split(/\s+/).filter(Boolean); }

  function searchIndex(q) {
    var toks = tokens(q);
    if (!toks.length) return [];
    var out = [];
    for (var i = 0; i < H.search.length; i++) {
      var r = H.search[i], title = r.title.toLowerCase(), hay = title + " " + r.text;
      var ok = true, score = 0;
      for (var j = 0; j < toks.length; j++) {
        var tk = toks[j];
        if (hay.indexOf(tk) < 0) { ok = false; break; }
        if (title.indexOf(tk) === 0) score += 100;
        else if (title.indexOf(tk) >= 0) score += 40;
        else score += 8;
      }
      if (ok) {
        if (r.kind === "term") score += 12;
        if (r.kind === "chapter") score += 6;
        out.push({ r: r, score: score });
      }
    }
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, 40).map(function (o) { return o.r; });
  }

  function hl(text, q) {
    var toks = tokens(q); var out = esc(text);
    toks.forEach(function (tk) {
      if (!tk) return;
      var re = new RegExp("(" + tk.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
      out = out.replace(re, "<mark>$1</mark>");
    });
    return out;
  }

  var KIND = { chapter: "Chapter", section: "Section", term: "Term", glossary: "Glossary", page: "Page" };
  function renderResults(q) {
    currentResults = searchIndex(q); activeIdx = 0;
    if (!q.trim()) {
      resultsEl.innerHTML = '<div class="sr-empty">Search ' + H.search.length +
        " entries — chapters, sections, and glossary terms.</div>";
      return;
    }
    if (!currentResults.length) {
      resultsEl.innerHTML = '<div class="sr-empty">No results for “' + esc(q) + "”.</div>";
      return;
    }
    var s = "";
    currentResults.forEach(function (r, i) {
      s += '<div class="sr-item' + (i === 0 ? " active" : "") + '" data-i="' + i + '">' +
        '<span class="sr-kind">' + (KIND[r.kind] || r.kind) + "</span>" +
        '<span class="sr-text"><span class="sr-title">' + hl(r.title, q) + "</span>" +
        '<span class="sr-sub">' + esc(r.sub) + "</span></span></div>";
    });
    resultsEl.innerHTML = s;
  }
  function pickResult(i) {
    var r = currentResults[i]; if (!r) return;
    closeSearch(); navigate(r.pageId, r.anchor || "");
  }
  function moveActive(d) {
    var items = resultsEl.querySelectorAll(".sr-item"); if (!items.length) return;
    items[activeIdx] && items[activeIdx].classList.remove("active");
    activeIdx = (activeIdx + d + items.length) % items.length;
    items[activeIdx].classList.add("active");
    items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  document.getElementById("search-btn").addEventListener("click", openSearch);
  document.getElementById("search-close").addEventListener("click", closeSearch);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeSearch(); });
  searchInput.addEventListener("input", function () { renderResults(searchInput.value); });
  resultsEl.addEventListener("click", function (e) {
    var it = e.target.closest(".sr-item"); if (it) pickResult(+it.getAttribute("data-i"));
  });
  resultsEl.addEventListener("mousemove", function (e) {
    var it = e.target.closest(".sr-item"); if (!it) return;
    var i = +it.getAttribute("data-i");
    if (i !== activeIdx) { var items = resultsEl.querySelectorAll(".sr-item"); items[activeIdx] && items[activeIdx].classList.remove("active"); activeIdx = i; it.classList.add("active"); }
  });

  document.addEventListener("keydown", function (e) {
    var open = modal.classList.contains("open");
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open ? closeSearch() : openSearch(); return; }
    if (e.key === "/" && !open && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); return; }
    if (!open) return;
    if (e.key === "Escape") closeSearch();
    else if (e.key === "ArrowDown") { e.preventDefault(); moveActive(1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); moveActive(-1); }
    else if (e.key === "Enter") { e.preventDefault(); pickResult(activeIdx); }
  });

  /* ---------------- scroll: progress + spy ---------------- */
  function updateProgress() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  function updateSpy() {
    var links = view.querySelectorAll(".onthispage a"); if (!links.length) return;
    var heads = view.querySelectorAll(".prose h3[id]");
    var top = 110, cur = null;
    heads.forEach(function (h) { if (h.getBoundingClientRect().top <= top) cur = h.id; });
    links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("data-scroll") === cur); });
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () { updateProgress(); updateSpy(); ticking = false; });
  }, { passive: true });

  /* ---------------- boot ---------------- */
  buildNav();
  window.addEventListener("hashchange", route);
  route();
})();
