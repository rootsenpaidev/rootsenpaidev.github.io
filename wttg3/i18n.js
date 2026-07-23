const I18N = {
  en: {
    title: "WTTG III Guide",
    subtitle: "Websites, miners & keys",
    tabTime: "Check Time",
    tabSites: "Sites",
    tabMiners: "Miners",
    tabKeys: "Keys",
    timeLabel: "In-game minute",
    timeHint: "Enter 0–59 (e.g. 23). Shows which timed sites are open.",
    timePlaceholder: "e.g. 23",
    timeCheck: "Check",
    timedOpen: "Timed sites open now",
    timedNone: "No timed sites at this minute.",
    alwaysNote: "Always-available sites work at any minute.",
    searchPlaceholder: "Search site…",
    filterAll: "All",
    badgeAlways: "Always",
    badgeTimed: "Timed",
    badgeDead: "Offline",
    badgeMaybe: "Maybe dead",
    badgeFbi: "FBI seized",
    badgeCareful: "Careful",
    winAlways: "Always open",
    winFbi: "FBI seizure page only",
    winDead: "Never available",
    winMaybe: "Probably permanently dead",
    winUnknown: "Unknown",
    catAlways: "Always Available",
    catTimed: "Time-Limited",
    catDead: "Never Available",
    catMaybe: "Probably Dead",
    catFbi: "FBI Seized",
    carefulNote: "Dangerous content",
    tierStart: "Available from start",
    tier2Cost: "75 DOS Coin upgrade",
    tier3Cost: "250 DOS Coin upgrade",
    keysRule: "Each wiki spawns 2 keys. The other 2 keys land randomly across the three wikis (e.g. 4-2-2 or 2-2-2).",
    keysWarn: "Keys are hidden hex text on wiki pages — don't confuse them with links.",
    keysExamples: "Example keys",
    keyLabel: "Key",
    logjukTip: "LogJuk has low mining speed but stays mounted permanently without issues.",
    footer: "Fan guide · Data from TwisTonFire & community",
    invalidMinute: "Enter a number between 0 and 59."
  },
  tr: {
    title: "WTTG III Rehberi",
    subtitle: "Siteler, madenciler ve anahtarlar",
    tabTime: "Saat Kontrol",
    tabSites: "Siteler",
    tabMiners: "Madenciler",
    tabKeys: "Anahtarlar",
    timeLabel: "Oyun içi dakika",
    timeHint: "0–59 arası gir (ör. 23). Hangi zamanlı sitelerin açık olduğunu gösterir.",
    timePlaceholder: "ör. 23",
    timeCheck: "Kontrol",
    timedOpen: "Şu an açık zamanlı siteler",
    timedNone: "Bu dakikada zamanlı site yok.",
    alwaysNote: "Her zaman açık siteler tüm dakikalarda çalışır.",
    searchPlaceholder: "Site ara…",
    filterAll: "Tümü",
    badgeAlways: "Her Zaman",
    badgeTimed: "Zamanlı",
    badgeDead: "Kapalı",
    badgeMaybe: "Muhtemelen ölü",
    badgeFbi: "FBI el koymuş",
    badgeCareful: "Dikkat",
    winAlways: "Her zaman açık",
    winFbi: "Sadece müsadere sayfası",
    winDead: "Asla erişilemez",
    winMaybe: "Muhtemelen kalıcı kapalı",
    winUnknown: "Bilinmiyor",
    catAlways: "Her Zaman Açık",
    catTimed: "Zamanlı Siteler",
    catDead: "Asla Erişilemez",
    catMaybe: "Muhtemelen Ölü",
    catFbi: "FBI El Koymuş",
    carefulNote: "Tehlikeli içerik",
    tierStart: "Başlangıçta mevcut",
    tier2Cost: "75 DOS Coin yükseltme",
    tier3Cost: "250 DOS Coin yükseltme",
    keysRule: "Her wiki'de 2 anahtar spawn olur. Diğer 2 anahtar üç wiki'den rastgele birine gider (ör. 4-2-2 veya 2-2-2).",
    keysWarn: "Anahtarlar wiki sayfalarında gizli hex metinlerdir — link sanma.",
    keysExamples: "Örnek anahtarlar",
    keyLabel: "Anahtar",
    logjukTip: "LogJuk düşük madencilik hızına sahip ama kalıcı mount için idealdir, sorun çıkarmaz.",
    footer: "Fan rehberi · TwisTonFire & topluluk verisi",
    invalidMinute: "0 ile 59 arasında bir sayı gir."
  }
};

const TIER_COST_KEYS = { tier1: "tierStart", tier2: "tier2Cost", tier3: "tier3Cost" };

async function detectLanguage() {
  const saved = localStorage.getItem("wttg3-lang");
  if (saved === "en" || saved === "tr") return saved;

  try {
    const res = await fetch("https://ipapi.co/country/", { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const country = (await res.text()).trim();
      if (country === "TR") return "tr";
      return "en";
    }
  } catch (_) { /* fallback below */ }

  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("tr")) return "tr";
  return "en";
}

function getSiteWindowLabel(site, lang) {
  const t = I18N[lang];
  if (WEBSITES.always.includes(site)) return t.winAlways;
  if (WEBSITES.fbi.includes(site)) return t.winFbi;
  if (WEBSITES.dead.includes(site)) return t.winDead;
  if (WEBSITES.maybe.includes(site)) return t.winMaybe;
  const windows = SITE_WINDOWS[site];
  if (!windows) return t.winUnknown;
  return windows.map(w => TIME_WINDOWS[w].label).join(" · ");
}
