export type Tier = "S" | "A" | "B" | "C";

// Reddit community consensus class power rankings (r/dndnext, r/3d6, r/dnd)
export const classRankings: Record<string, Tier> = {
  wizard: "S",
  cleric: "S",
  paladin: "S",
  bard: "A",
  druid: "A",
  fighter: "A",
  sorcerer: "A",
  warlock: "A",
  ranger: "B",
  rogue: "B",
  barbarian: "B",
  artificer: "B",
  monk: "C",
  "blood-hunter": "B",
  illrigger: "B",
};

// Reddit community consensus subclass power rankings
export const subclassRankings: Record<string, Tier> = {
  // ========== BARBARIAN ==========
  "totem-warrior": "S",
  zealot: "A",
  "ancestral-guardian": "A",
  beast: "B",
  "wild-magic-barbarian": "B",
  "storm-herald": "C",
  berserker: "C",
  battlerager: "C",

  // ========== BARD ==========
  "college-of-lore": "S",
  "college-of-glamour": "A",
  "college-of-swords": "A",
  "college-of-creation": "B",
  "college-of-valor": "B",
  "college-of-whispers": "C",
  "college-of-spirits": "A",
  "college-of-the-road": "B",
  "college-of-masks": "B",

  // ========== CLERIC ==========
  "peace-domain": "S",
  "twilight-domain": "S",
  "life-domain": "A",
  "forge-domain": "A",
  "light-domain": "A",
  "war-domain": "A",
  "tempest-domain": "A",
  "order-domain": "A",
  "knowledge-domain": "A",
  "grave-domain": "B",
  "nature-domain": "B",
  "trickery-domain": "C",

  // ========== DRUID ==========
  "circle-of-the-shepherd": "S",
  "circle-of-the-moon": "A",
  "circle-of-wildfire": "A",
  "circle-of-dreams": "B",
  "circle-of-the-land": "B",
  "circle-of-spores": "C",
  "circle-of-stars": "S",
  "circle-of-ash": "B",
  "circle-of-the-petal": "B",

  // ========== FIGHTER ==========
  "battle-master": "S",
  "rune-knight": "S",
  "eldritch-knight": "A",
  "psi-warrior": "A",
  cavalier: "A",
  samurai: "B",
  "arcane-archer": "C",
  champion: "C",
  "purple-dragon-knight": "C",
  "echo-knight": "S",
  gunslinger: "B",
  pugilist: "B",
  "the-spirit-fused": "B",

  // ========== MONK ==========
  "way-of-mercy": "S",
  "way-of-the-open-hand": "A",
  "way-of-shadow": "A",
  "way-of-the-drunken-master": "B",
  "way-of-the-kensei": "B",
  "way-of-the-sun-soul": "C",
  "way-of-the-long-death": "B",
  "way-of-the-four-elements": "C",
  "way-of-the-ascendant-dragon": "B",
  "way-of-the-cobalt-soul": "A",
  "sheep-dragon-shepherd": "B",

  // ========== PALADIN ==========
  "oath-of-vengeance": "S",
  "oath-of-conquest": "S",
  "oath-of-devotion": "A",
  "oath-of-redemption": "A",
  "oath-of-the-ancients": "A",
  "oath-of-glory": "B",
  "oath-of-the-watchers": "B",
  "oath-of-the-crown": "B",
  "oath-of-thunder": "B",
  "oath-of-the-river": "B",

  // ========== RANGER ==========
  "gloom-stalker": "S",
  "fey-wanderer": "A",
  swarmkeeper: "A",
  hunter: "B",
  "horizon-walker": "B",
  "monster-slayer": "B",
  "beast-master": "C",
  drakewarden: "A",
  "corrupted-ranger": "B",

  // ========== ROGUE ==========
  soulknife: "S",
  "arcane-trickster": "S",
  swashbuckler: "A",
  scout: "A",
  inquisitive: "B",
  thief: "B",
  assassin: "C",
  mastermind: "C",
  phantom: "S",
  "waxwork-rogue": "B",

  // ========== SORCERER ==========
  "clockwork-soul": "S",
  "aberrant-mind": "S",
  "divine-soul": "A",
  "shadow-magic": "A",
  "draconic-bloodline": "B",
  "wild-magic": "B",
  "storm-sorcery": "C",
  runechild: "B",
  "oni-bloodline": "B",

  // ========== WARLOCK ==========
  "the-hexblade": "S",
  "the-genie": "S",
  "the-fiend": "A",
  "the-celestial": "A",
  "the-great-old-one": "B",
  "the-fathomless": "B",
  "the-undying": "C",
  "the-undead": "A",
  "the-lantern": "B",

  // ========== WIZARD ==========
  bladesinging: "S",
  "school-of-divination": "S",
  "chronurgy-magic": "S",
  "war-magic": "A",
  "school-of-abjuration": "A",
  "order-of-scribes": "A",
  "school-of-conjuration": "A",
  "school-of-illusion": "A",
  "school-of-necromancy": "A",
  "school-of-evocation": "B",
  "school-of-enchantment": "B",
  "school-of-transmutation": "B",
  "graviturgy-magic": "B",
  "school-of-geomancy": "B",
  "origami-mage": "B",

  // ========== ARTIFICER ==========
  armorer: "S",
  "battle-smith": "A",
  artillerist: "A",
  alchemist: "C",

  // ========== BLOOD HUNTER ==========
  "order-of-the-ghostslayer": "S",
  "order-of-the-lycan": "A",
  "order-of-the-mutant": "B",
  "order-of-the-profane-soul": "B",

  // ========== ILLRIGGER ==========
  "architect-of-ruin": "A",
  painkiller: "A",
  shadowmaster: "B",
};
