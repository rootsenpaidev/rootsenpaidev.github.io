const WEBSITES = {
  always: [
    "Blushing Brides", "Cavity Lease", "Crisis Calls", "Doctor Murder",
    "Dont Waste It", "Doughy", "Encrave", "Forever Friend", "Jakobs Sink",
    "LostTapes", "Oneless", "Prohibited Stockpile", "Red Triangle", "Ring Ring",
    "Symphoros Chosen", "Synapse Decay", "Tango Down", "Thanks For Visiting!",
    "The Bomb Maker", "The Hole", "The Light Within", "The Loogaroo",
    "Time Sharing", "TRACK06", "VoluVision", "World Wide Workers"
  ],
  timed: {
    "00-14": ["FindLove", "Forsaken Gifts", "Mors N More Market", "Order Of Nine", "The Prey"],
    "00-29": ["Blackhat Post", "Drug Tickets", "Kill For Me", "MamaBruguglio", "Red Handed", "ViaMarisRoute"],
    "15-29": ["Building A Future", "Eat My Shit", "Overnight Success"],
    "30-44": ["Bizzare Propagation", "Crystal Guild", "I Am Here", "Keep Sake", "Shelter", "You There?"],
    "30-59": ["Chevron", "finalStanding", "Lab Monkey", "The Grey"],
    "45-59": ["The Hall"]
  },
  dead: [
    "Abyssal Chat", "Bathroom Cams", "Bone Altar", "Carrion Stage", "Corpses For Sale",
    "Crimson Bazaar", "Crimson Relay", "Dread Signal", "Drone Spy", "Echo Vault",
    "Eternal Loop", "Father Donald", "Flicker Stream", "Foot Doctor", "Forgive Me",
    "Ghost Proxy", "Gloom Archive", "Iron Ledger", "Lost Signals", "Murk Lair",
    "Mutilation", "My Gut", "Noir Gallery", "Obsidian Trade", "Phantom Lot",
    "Red Veil", "Rust Network", "Secure Drop", "Shade Broker", "Shadow Cache",
    "Specter Hub", "The Black Waves", "The End Of NY", "Veiled Eyes", "Void Library", "Wraith Cam"
  ],
  maybe: ["Backrooms", "Deep Journal", "Hollow Key", "Silent Auction", "The Butcher"],
  fbi: [
    "Cryptic Forge", "Dusk Haven", "Evidence Locker", "Hidden Pleasures",
    "Iron Mask", "Is Evil", "Pale Market", "Roses Destruction"
  ]
};

const TIME_WINDOWS = {
  "00-14": { start: 0, end: 14, label: ":00 – :14", color: "#ff6b6b" },
  "00-29": { start: 0, end: 29, label: ":00 – :29", color: "#ffa94d" },
  "15-29": { start: 15, end: 29, label: ":15 – :29", color: "#ffd43b" },
  "30-44": { start: 30, end: 44, label: ":30 – :44", color: "#69db7c" },
  "30-59": { start: 30, end: 59, label: ":30 – :59", color: "#4dabf7" },
  "45-59": { start: 45, end: 59, label: ":45 – :59", color: "#da77f2" }
};

const SITE_WINDOWS = {};
Object.entries(WEBSITES.timed).forEach(([window, sites]) => {
  sites.forEach(site => {
    if (!SITE_WINDOWS[site]) SITE_WINDOWS[site] = [];
    SITE_WINDOWS[site].push(window);
  });
});

function isSiteAvailable(site, minute) {
  if (WEBSITES.always.includes(site)) return true;
  if (WEBSITES.fbi.includes(site)) return true;
  const windows = SITE_WINDOWS[site];
  if (!windows) return false;
  return windows.some(w => {
    const tw = TIME_WINDOWS[w];
    return minute >= tw.start && minute <= tw.end;
  });
}

function getSiteCategory(site) {
  if (WEBSITES.always.includes(site)) return "always";
  if (SITE_WINDOWS[site]) return "timed";
  if (WEBSITES.dead.includes(site)) return "dead";
  if (WEBSITES.maybe.includes(site)) return "maybe";
  if (WEBSITES.fbi.includes(site)) return "fbi";
  return "unknown";
}

const MINERS = {
  tier1: {
    label: "Tier I",
    cost: "",
    color: "#69db7c",
    items: [
      { name: "WebTyk", rate: 1.84 },
      { name: "UserJyx", rate: 1.80 },
      { name: "NetVorn", rate: 1.45 },
      { name: "CloudFuz", rate: 0.88 },
      { name: "SysBlip", rate: 0.87 },
      { name: "DevQuix", rate: 0.64 },
      { name: "IT_Kwez", rate: 0.42 },
      { name: "DataRax", rate: 0.32 },
      { name: "WorkZap", rate: 0.31 },
      { name: "CodePlix", rate: 0.30 }
    ]
  },
  tier2: {
    label: "Tier II",
    cost: "",
    color: "#4dabf7",
    items: [
      { name: "OpsHax", rate: 3.23 },
      { name: "SecErux", rate: 2.73 },
      { name: "GameDrux", rate: 2.57 },
      { name: "PrintYis", rate: 2.43 },
      { name: "FileNuz", rate: 1.88 },
      { name: "Prod Glin", rate: 1.80 },
      { name: "VM_Wekl", rate: 1.74 },
      { name: "BackShiv", rate: 1.49 },
      { name: "TestXor", rate: 1.36 },
      { name: "LabBzop", rate: 0.48 }
    ]
  },
  tier3: {
    label: "Tier III",
    cost: "",
    color: "#da77f2",
    items: [
      { name: "Phoenix", rate: 4.79 },
      { name: "MediaVlu", rate: 3.93 },
      { name: "QA_Pivz", rate: 3.58 },
      { name: "HR_Treq", rate: 3.42 },
      { name: "VPN_Qwer", rate: 3.38 },
      { name: "SalesMiv", rate: 3.21 },
      { name: "ChatEzk", rate: 3.17 },
      { name: "EngZolp", rate: 2.63 },
      { name: "LogJuk", rate: 0.30, special: true }
    ]
  }
};

const KEY_EXAMPLES = [
  { wiki: "Wiki 1", site: "Mama Brugelino", key: "6", hex: "0693bcd8" },
  { wiki: "Wiki 1", site: "VoluVision", key: "4", hex: "8264e616" },
  { wiki: "Wiki 1", site: "Crisis Calls", key: "8", hex: "bf6a079f" },
  { wiki: "Wiki 1", site: "Symphoros Chosen", key: "2", hex: "39da40bf" },
  { wiki: "Wiki 2", site: "Chevron", key: "3", hex: "0d64027c" },
  { wiki: "Wiki 2", site: "Synapse Decay", key: "1", hex: "0134d66a", decrypted: "f934" },
  { wiki: "Wiki 3", site: "Cavity Lease", key: "5", hex: "fa9593c4" },
  { wiki: "Wiki 3", site: "The Grey", key: "7", hex: "dbdde6b2" }
];

const CAREFUL_SITES = ["The Bomb Maker"];

const THREATS = [
  { key: "tanner", color: "#ff6b6b" },
  { key: "lucas", color: "#ffa94d" },
  { key: "noir", color: "#a855f7" },
  { key: "tucker", color: "#4dabf7" },
  { key: "cletus", color: "#69db7c" },
  { key: "kidnapper", color: "#f0a030" },
  { key: "breather", color: "#9898a8" },
  { key: "bombmaker", color: "#e02525" }
];

const PREP_KEYS = ["prep1", "prep2", "prep3", "prep4", "prep5", "prep6"];

const ALL_SITES = [
  ...WEBSITES.always.map(s => ({ name: s, category: "always", careful: CAREFUL_SITES.includes(s) })),
  ...Object.values(WEBSITES.timed).flat().map(s => ({ name: s, category: "timed" })),
  ...WEBSITES.dead.map(s => ({ name: s, category: "dead" })),
  ...WEBSITES.maybe.map(s => ({ name: s, category: "maybe" })),
  ...WEBSITES.fbi.map(s => ({ name: s, category: "fbi" }))
];
