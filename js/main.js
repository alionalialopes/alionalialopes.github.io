(function () {
  const cfg = window.SITE_CONFIG || {};
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Links configuráveis */
  $$("[data-linkedin]").forEach(a => {
    if (cfg.linkedin) a.href = cfg.linkedin; else a.hidden = true;
  });
  $$("[data-email]").forEach(a => {
    if (cfg.email) a.href = "mailto:" + cfg.email; else a.closest("li").hidden = true;
  });
  $$("[data-cv]").forEach(a => { if (cfg.cvPath) a.href = cfg.cvPath; });
  $("#year").textContent = new Date().getFullYear();

  /* Ferramentas */
  const tools = $("#tools");
  (window.TOOLS || []).forEach(t => { const li = document.createElement("li"); li.textContent = t; tools.appendChild(li); });

  /* Cases: cards + popup (<dialog>) */
  const typeLabel = { launched: "Produto lançado", concept: "Estudo conceitual", prototype: "Protótipo" };
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const casesEl = $("#cases"), dlg = $("#case-dialog"), dlgBody = $("#case-dialog-body");
  const cases = window.CASES || [];
  let lastTrigger = null;
  const root = window.SITE_ROOT || "";

  cases.forEach((c, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "case-card";
    card.dataset.id = c.id;
    card.setAttribute("aria-haspopup", "dialog");
    const thumb = c.image ? `<span class="case-card__img"><img src="${root}${c.imageSmall || c.image}" alt="${esc(c.imageAlt || "")}" width="800" height="556" loading="lazy" decoding="async"></span>` : "";
    card.innerHTML = `${thumb}
      <span class="case-card__top"><span class="badge${c.type === "launched" ? "" : " badge--concept"}">${typeLabel[c.type] || c.type}</span></span>
      <span class="case-card__title">${esc(c.title)}</span>
      <span class="case-card__role">${esc(c.role || "")}</span>
      <span class="case-card__headline">${esc(c.headline || "")}</span>
      <span class="case-card__cta">Ver case completo <span aria-hidden="true">↗</span></span>`;
    card.addEventListener("click", () => openCase(c, card));
    casesEl.appendChild(card);
  });

  function paragraphs(v) { return (Array.isArray(v) ? v : [v]).map(p => `<p>${esc(p)}</p>`).join(""); }

  function openCase(c, trigger) {
    lastTrigger = trigger;
    const metrics = (c.metrics || []).map(m => `<li><b>${esc(m.value)}</b><span>${esc(m.label)}</span></li>`).join("");
    let n = 0;
    const topics = (window.CASE_TOPICS || []).filter(([k]) => c.topics[k]).map(([k, label]) => {
      n++;
      return `<section class="topic"><h3><span>${String(n).padStart(2, "0")}</span>${label}</h3>${paragraphs(c.topics[k])}</section>`;
    }).join("");
    const tools = (c.tools || []).map(t => `<li>${esc(t)}</li>`).join("");
    dlgBody.innerHTML = `
      <header class="dlg__head">
        <span class="badge${c.type === "launched" ? "" : " badge--concept"}">${typeLabel[c.type] || c.type}</span>
        <h2 id="case-dialog-title">${esc(c.title)}</h2>
        <p class="dlg__role">${esc(c.role || "")}</p>
        <p class="dlg__headline">${esc(c.headline || "")}</p>
      </header>
      ${c.image ? `<figure class="dlg__cover"><img src="${root}${c.image}" srcset="${root}${c.imageSmall} 800w, ${root}${c.image} 1600w" sizes="(min-width: 960px) 860px, 100vw" alt="${esc(c.imageAlt || "")}" decoding="async"></figure>` : ""}
      ${metrics ? `<ul class="dlg__metrics">${metrics}</ul>` : ""}
      <div class="topics">${topics}</div>
      ${tools ? `<div class="dlg__tools"><h3>Ferramentas utilizadas</h3><ul>${tools}</ul></div>` : ""}`;
    dlg.scrollTop = 0;
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    document.body.classList.add("no-scroll");
    history.replaceState(null, "", "#case-" + c.id);
  }

  function closeCase() {
    if (dlg.open) dlg.close();
  }
  dlg.addEventListener("close", () => {
    document.body.classList.remove("no-scroll");
    history.replaceState(null, "", "#portfolio");
    if (lastTrigger) lastTrigger.focus();
  });
  dlg.addEventListener("click", e => { if (e.target === dlg || e.target.closest("[data-close]")) closeCase(); });

  /* Link direto para um case (#case-id) */
  const hash = location.hash.match(/^#case-(.+)$/);
  if (hash) {
    const c = cases.find(x => x.id === hash[1]);
    if (c) openCase(c, $(`.case-card[data-id="${c.id}"]`));
  }

  /* Menu mobile */
  const toggle = $(".nav__toggle"), menu = $("#menu");
  const setMenu = o => { menu.classList.toggle("is-open", o); toggle.setAttribute("aria-expanded", String(o)); toggle.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); };
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

  /* Link ativo por seção */
  const links = $$(".nav__menu a");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => io.observe(s));

    /* Reveal */
    const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); rv.unobserve(e.target); } }), { threshold: .12 });
    $$(".section__head, .big, .timeline li, .pillar, .skill, .ai-grid li, .case-card").forEach(el => { el.classList.add("reveal"); rv.observe(el); });

    /* Contadores */
    if (!reduce) {
      const co = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        const el = e.target, to = +el.dataset.to, div = +el.dataset.div || 1, suf = el.dataset.suffix || "";
        const t0 = performance.now(), dur = 1200;
        const tick = t => { const p = Math.min((t - t0) / dur, 1), v = Math.round(to * (1 - Math.pow(1 - p, 3)) / div); el.textContent = v + suf; if (p < 1) requestAnimationFrame(tick); };
        requestAnimationFrame(tick);
      }), { threshold: .6 });
      $$(".count").forEach(c => co.observe(c));
    }
  }
})();
