(function () {
  "use strict";

  let lang = "en";
  let activeFilter = "all";

  const $ = id => document.getElementById(id);
  const panels = document.querySelectorAll(".panel");
  const tabs = document.querySelectorAll(".pill-tab");

  const FILTERS = [
    { key: "all", label: "filterAll" },
    { key: "always", label: "badgeAlways" },
    { key: "timed", label: "badgeTimed" },
    { key: "dead", label: "badgeDead" },
    { key: "maybe", label: "badgeMaybe" },
    { key: "fbi", label: "badgeFbi" }
  ];

  const CAT_ORDER = [
    { key: "always", label: "catAlways" },
    { key: "timed", label: "catTimed" },
    { key: "dead", label: "catDead" },
    { key: "maybe", label: "catMaybe" },
    { key: "fbi", label: "catFbi" }
  ];

  const RANK_CLASS = ["gold", "silver", "bronze"];

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      $("panel-" + tab.dataset.tab).classList.add("active");
    });
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang, true));
  });

  const minuteInput = $("minute-input");
  const timeError = $("time-error");
  const timeResult = $("time-result");
  const timeCount = $("time-count");

  function t(key) { return I18N[lang][key]; }

  async function init() {
    setupFilterPills();
    lang = await detectLanguage();
    setLanguage(lang, false);

    $("time-btn").addEventListener("click", checkTime);
    minuteInput.addEventListener("keydown", e => { if (e.key === "Enter") checkTime(); });
    minuteInput.addEventListener("input", () => {
      minuteInput.value = minuteInput.value.replace(/\D/g, "").slice(0, 2);
      if (minuteInput.value.length >= 1) checkTime();
    });
    $("search").addEventListener("input", applySiteFilter);
  }

  function setLanguage(code, save) {
    lang = code;
    if (save) localStorage.setItem("wttg3-lang", code);
    document.documentElement.lang = code;
    document.title = I18N[code].title;

    document.querySelectorAll(".lang-btn").forEach(b =>
      b.classList.toggle("active", b.dataset.lang === code)
    );

    applyStaticText();
    updateFilterLabels();
    renderSites();
    renderMiners();
    renderKeys();
    checkTime();
  }

  function applyStaticText() {
    const map = {
      "t-title": "title", "t-subtitle": "subtitle",
      "t-tabTime": "tabTime", "t-tabSites": "tabSites",
      "t-tabMiners": "tabMiners", "t-tabKeys": "tabKeys",
      "t-timeLabel": "timeLabel", "t-timeHint": "timeHint",
      "t-timedOpen": "timedOpen", "t-alwaysNote": "alwaysNote",
      "t-keysRule": "keysRule", "t-keysWarn": "keysWarn",
      "t-keysExamples": "keysExamples", "t-logjukTip": "logjukTip",
      "t-footer": "footer"
    };
    Object.entries(map).forEach(([id, key]) => { $(id).textContent = t(key); });
    minuteInput.placeholder = "00";
    $("time-btn").textContent = t("timeCheck");
    $("search").placeholder = t("searchPlaceholder");
  }

  function setupFilterPills() {
    $("filter-pills").innerHTML = FILTERS.map(f =>
      `<button type="button" class="f-chip${f.key === activeFilter ? " active" : ""}" data-f="${f.key}"></button>`
    ).join("");

    $("filter-pills").addEventListener("click", e => {
      const chip = e.target.closest(".f-chip");
      if (!chip) return;
      activeFilter = chip.dataset.f;
      $("filter-pills").querySelectorAll(".f-chip").forEach(c =>
        c.classList.toggle("active", c.dataset.f === activeFilter)
      );
      applySiteFilter();
    });
  }

  function updateFilterLabels() {
    $("filter-pills").querySelectorAll(".f-chip").forEach(chip => {
      const f = FILTERS.find(x => x.key === chip.dataset.f);
      if (f) chip.textContent = t(f.label);
    });
  }

  function parseMinute(raw) {
    const s = String(raw).trim().replace(/^:/, "");
    if (s === "") return null;
    const n = parseInt(s, 10);
    if (isNaN(n) || n < 0 || n > 59) return false;
    return n;
  }

  function checkTime() {
    const val = parseMinute(minuteInput.value);
    timeError.hidden = true;

    if (val === null) {
      timeResult.innerHTML = `<span class="chip empty">${t("timedNone")}</span>`;
      timeCount.textContent = "—";
      return;
    }
    if (val === false) {
      timeError.textContent = t("invalidMinute");
      timeError.hidden = false;
      timeResult.innerHTML = "";
      timeCount.textContent = "!";
      return;
    }

    const open = ALL_SITES.filter(s => s.category === "timed" && isSiteAvailable(s.name, val));
    timeCount.textContent = open.length;

    if (!open.length) {
      timeResult.innerHTML = `<span class="chip empty">${t("timedNone")}</span>`;
    } else {
      timeResult.innerHTML = open.map((s, i) =>
        `<span class="chip" style="animation-delay:${i * 30}ms">${s.name}</span>`
      ).join("");
    }
  }

  function siteChip(name, careful) {
    const tag = careful ? `<span class="tag-careful">${t("badgeCareful")}</span>` : "";
    return `<li class="site-row" data-name="${name.toLowerCase()}"><span class="name">${name}${tag}</span></li>`;
  }

  function renderTimedBlock() {
    const groups = Object.entries(WEBSITES.timed).map(([winKey, names]) => {
      const tw = TIME_WINDOWS[winKey];
      const rows = names.map(n => siteChip(n, CAREFUL_SITES.includes(n))).join("");
      return `<div class="window-group">
        <div class="window-head"><span class="window-dot" style="background:${tw.color}"></span>${tw.label}</div>
        <ul class="site-rows" style="--wcolor:${tw.color}">${rows}</ul>
      </div>`;
    }).join("");

    const total = Object.values(WEBSITES.timed).flat().length;
    return `<div class="cat-block" data-cat="timed">
      <div class="cat-head">
        <span class="cat-dot timed"></span>
        <h3>${t("catTimed")}</h3>
        <span class="cat-count">${total}</span>
      </div>
      <div class="window-groups">${groups}</div>
    </div>`;
  }

  function renderSites() {
    $("site-lists").innerHTML = CAT_ORDER.map(cat => {
      if (cat.key === "timed") return renderTimedBlock();

      const sites = ALL_SITES.filter(s => s.category === cat.key);
      const rows = sites.map(s => siteChip(s.name, s.careful)).join("");

      return `<div class="cat-block" data-cat="${cat.key}">
        <div class="cat-head">
          <span class="cat-dot ${cat.key}"></span>
          <h3>${t(cat.label)}</h3>
          <span class="cat-count">${sites.length}</span>
        </div>
        <ul class="site-rows">${rows}</ul>
      </div>`;
    }).join("");
    applySiteFilter();
  }

  function applySiteFilter() {
    const q = $("search").value.toLowerCase().trim();
    document.querySelectorAll(".cat-block").forEach(block => {
      const cat = block.dataset.cat;
      block.style.display = (activeFilter === "all" || activeFilter === cat) ? "" : "none";
      block.querySelectorAll(".site-row").forEach(row => {
        row.classList.toggle("hidden", !!(q && !row.dataset.name.includes(q)));
      });
    });
    document.querySelectorAll(".window-group").forEach(g => {
      const anyVisible = [...g.querySelectorAll(".site-row")].some(r => !r.classList.contains("hidden"));
      g.style.display = anyVisible ? "" : "none";
    });
  }

  function renderMiners() {
    const costMap = { tier1: t("tierStart"), tier2: t("tier2Cost"), tier3: t("tier3Cost") };
    $("miner-lists").innerHTML = Object.entries(MINERS).map(([key, tier]) => {
      const rows = tier.items.map((m, i) => {
        const rankCls = i < 3 ? RANK_CLASS[i] : "";
        const rowCls = [i < 3 ? "top" : "", m.special ? "special" : ""].filter(Boolean).join(" ");
        return `<li class="miner-row ${rowCls}">
          <span class="rank ${rankCls}">${i + 1}</span>
          <span class="mname">${m.name}</span>
          <span class="mrate">${m.rate}</span>
        </li>`;
      }).join("");

      return `<div class="tier-card" data-tier="${key}">
        <div class="tier-top">
          <h3>${tier.label}</h3>
          <div class="tier-cost">${costMap[key]}</div>
        </div>
        <ul class="miner-rows">${rows}</ul>
      </div>`;
    }).join("");
  }

  function renderKeys() {
    $("key-list").innerHTML = KEY_EXAMPLES.map(k => `
      <li>
        <div>
          <div class="loc">${k.wiki} · ${k.site}</div>
          <span>${t("keyLabel")} ${k.key}</span>
        </div>
        <span class="hex">${k.hex}${k.decrypted ? ` · ${k.decrypted}` : ""}</span>
      </li>
    `).join("");
  }

  init();
})();
