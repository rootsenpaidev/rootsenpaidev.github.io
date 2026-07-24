const I18N = {
  en: {
    title: "WTTG III Guide",
    subtitle: "How to play, websites, threats, miners & keys",
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
    footer: "Fan guide · Data from WTTG Wiki & community",
    invalidMinute: "Enter a number between 0 and 59.",

    tabGuide: "How to Play",
    guideIntroTitle: "The Objective",
    guideIntro: "You play as Simon, stuck in a motel with a debt to pay off. From the lobby computer you browse the Dark Net (the \"Codex of Silence\" wiki) to dig up 8 hidden keys. Chat with users on A.C.R.S. to buy extra wiki links with DOSCoin, mine more DOSCoin on the side with virtual machines, and survive the night — 8 different threats are hunting you, and there's no safe room.",
    guideLoopTitle: "The Nightly Loop",
    guideLoop: "Prep your room → browse timed & always-on sites for keys and clues → mine DOSCoin on VirtMesh to fund upgrades and NPC favors → react to threats as they trigger → find all 8 keys to end the run.",
    prepTitle: "Pre-9:30 PM Prep Checklist",
    prepHint: "Threats start hunting around 9:30 PM on Normal. Everything below should be done before then.",
    prep1: "Lock every back door in the main building, including the Electrical Room door.",
    prep2: "Turn off 2–3 lights around your room — makes Lucas's search harder and costs almost nothing.",
    prep3: "Place motion sensors: one covering the right end of the motel, one the left end (both for Tanner), and one on a back door (for Lucas).",
    prep4: "Pick up at least one bag of meth from motel rooms or the parking lot for Cletus — carry only one at a time.",
    prep5: "Keep roughly 50 DOS in reserve for emergency payoffs (e.g. the Bomb Maker).",
    prep6: "Check the parking lot for the Kidnapper's van before every trip outside.",
    threatsTitle: "The 8 Threats",
    threatsHint: "Each threat has a fixed trigger and a reliable counter — panic is more dangerous than any of them.",
    threats: {
      tanner: {
        name: "Tanner",
        trigger: "Ambushes you leaving your motel room, or appears while you're at the office computer.",
        counter: "Lock the room door and check the peephole before leaving — wait until he's out of view. At the computer, look away and wait for his leaving cue instead of turning to check."
      },
      lucas: {
        name: "Lucas",
        trigger: "Slips in through any unlocked back door, including the Electrical Room.",
        counter: "Lock all back doors the moment a run starts. If cornered, a laundry cart or locker hideout works — pass the quiet-time minigame to stay hidden."
      },
      noir: {
        name: "Noir (pair)",
        trigger: "Two masked figures who appear more often in darkness.",
        counter: "Keep a flashlight ready. Read their formation, light them briefly, turn away and count to ten before checking again — don't rely on darkness alone."
      },
      tucker: {
        name: "Tucker",
        trigger: "Starts playing music over the motel intercom.",
        counter: "Find the motel room marked with a playing card and hide inside until the track ends — you can't stop it manually."
      },
      cletus: {
        name: "Cletus",
        trigger: "Confronts you if you're not carrying his product.",
        counter: "Always have exactly one bag of meth on hand. Carrying more than one means he takes all of it."
      },
      kidnapper: {
        name: "Kidnapper",
        trigger: "A van appears in the parking lot, especially during a power cut.",
        counter: "Scan the lot before stepping outside. If the van is there, stay in and wait it out."
      },
      breather: {
        name: "Breather",
        trigger: "Lurks close by during quiet, low-activity moments.",
        counter: "Stay still and avoid sudden light, sound, or movement until the encounter passes."
      },
      bombmaker: {
        name: "The Bomb Maker",
        trigger: "Only activates once you visit his website — entirely avoidable.",
        counter: "Skip his site early on. If triggered, he messages a code — find the beeping bomb, enter it, then pay him 50 DOS to make him stop."
      }
    }
  },
  tr: {
    title: "WTTG III Rehberi",
    subtitle: "Nasıl oynanır, siteler, tehditler, madenciler ve anahtarlar",
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
    footer: "Fan rehberi · WTTG Wiki & topluluk verisi",
    invalidMinute: "0 ile 59 arasında bir sayı gir.",

    tabGuide: "Nasıl Oynanır",
    guideIntroTitle: "Amaç",
    guideIntro: "Simon'ı oynuyorsun, bir motelde borcunu ödemeye çalışıyorsun. Lobideki bilgisayardan Dark Net'e (\"Codex of Silence\" wiki'sine) girip 8 gizli anahtarı buluyorsun. A.C.R.S üzerindeki kullanıcılarla sohbet ederek DOSCoin karşılığında ekstra wiki linkleri satın alabilir, yandan sanal makinelerle DOSCoin madenciliği yapabilir ve geceyi atlatmaya çalışırsın — seni avlayan 8 farklı tehdit var ve güvenli bir oda yok.",
    guideLoopTitle: "Gecelik Döngü",
    guideLoop: "Odanı hazırla → anahtar ve ipucu için zamanlı ve her zaman açık siteleri gez → VirtMesh'te DOSCoin madencilik yap, upgrade ve NPC istekleri için kullan → tehditler tetiklendikçe tepki ver → 8 anahtarı da bulup geceyi bitir.",
    prepTitle: "21:30 Öncesi Hazırlık Listesi",
    prepHint: "Tehditler Normal zorlukta yaklaşık 21:30'da avlanmaya başlar. Aşağıdakilerin hepsi ondan önce bitmiş olmalı.",
    prep1: "Elektrik odası dahil ana binadaki bütün arka kapıları kilitle.",
    prep2: "Odanın etrafındaki 2-3 ışığı kapat — Lucas'ın seni bulmasını zorlaştırır, neredeyse hiçbir maliyeti yoktur.",
    prep3: "Hareket sensörü yerleştir: biri motelin sağ ucunu, biri sol ucunu (ikisi de Tanner için), biri de bir arka kapıyı (Lucas için) kapsasın.",
    prep4: "Cletus için motel odalarından veya otoparktan en az bir paket mal al — aynı anda sadece bir tane taşı.",
    prep5: "Acil ödemeler için (ör. Bomb Maker) yaklaşık 50 DOS yedekte tut.",
    prep6: "Dışarı her çıkışından önce otoparkta Kidnapper'ın minibüsü var mı diye kontrol et.",
    threatsTitle: "8 Tehdit",
    threatsHint: "Her tehdidin sabit bir tetikleyicisi ve güvenilir bir karşı hamlesi var — panik, tehditlerin kendisinden daha tehlikeli.",
    threats: {
      tanner: {
        name: "Tanner",
        trigger: "Odandan çıkarken pusu kurar veya ofisteki bilgisayardayken belirir.",
        counter: "Odadayken kapıyı kilitle, çıkmadan önce gözetleme deliğinden bak — görünmez olana kadar bekle. Bilgisayardayken bakmayı kes, kontrol etmek için dönmek yerine gitme sinyalini bekle."
      },
      lucas: {
        name: "Lucas",
        trigger: "Elektrik odası dahil kilitlenmemiş herhangi bir arka kapıdan sızar.",
        counter: "Oyun başlar başlamaz bütün arka kapıları kilitle. Köşeye sıkışırsan çamaşır sepeti ya da dolap işe yarar — sessiz kalma mini oyununu geçip saklan."
      },
      noir: {
        name: "Noir (ikili)",
        trigger: "Karanlıkta daha sık görünen iki maskeli figür.",
        counter: "Bir el feneri hazır bulundur. Formasyonlarını oku, kısa süre ışık tut, arkanı dön ve tekrar bakmadan önce ona kadar say — sadece karanlığa güvenme."
      },
      tucker: {
        name: "Tucker",
        trigger: "Motel interkomundan müzik çalmaya başlar.",
        counter: "Üzerinde oyun kartı işareti olan motel odasını bul ve müzik bitene kadar orada saklan — elle durduramazsın."
      },
      cletus: {
        name: "Cletus",
        trigger: "Yanında malı yoksa seninle yüzleşir.",
        counter: "Her zaman elinde tam olarak bir paket mal bulunsun. Birden fazla taşırsan hepsine el koyar."
      },
      kidnapper: {
        name: "Kidnapper",
        trigger: "Otoparkta bir minibüs belirir, özellikle elektrik kesintisi sırasında.",
        counter: "Dışarı çıkmadan önce otoparkı tara. Minibüs oradaysa içeride kal ve geçmesini bekle."
      },
      breather: {
        name: "Breather",
        trigger: "Sessiz, düşük hareketli anlarda yakınlarda pusuya yatar.",
        counter: "Karşılaşma geçene kadar hareketsiz kal, ani ışık, ses veya harekete girme."
      },
      bombmaker: {
        name: "The Bomb Maker",
        trigger: "Sadece onun web sitesini ziyaret edersen aktif olur — tamamen kaçınılabilir.",
        counter: "Başta sitesine girme. Tetiklenirse sana bir kod mesaj atar — çalan bombayı bul, kodu gir, sonra durması için ona 50 DOS öde."
      }
    }
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
