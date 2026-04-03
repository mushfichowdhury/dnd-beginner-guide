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
};

// Reddit community consensus subclass power rankings
export const subclassRankings: Record<string, Tier> = {
  // ========== BARBARIAN ==========
  "totem-warrior": "S",
  zealot: "A",
  "ancestral-guardian": "A",
  beast: "B",
  "storm-herald": "C",
  berserker: "C",

  // ========== BARD ==========
  "college-of-lore": "S",
  "college-of-glamour": "A",
  "college-of-swords": "A",
  "college-of-creation": "B",
  "college-of-valor": "B",
  "college-of-whispers": "C",

  // ========== CLERIC ==========
  "peace-domain": "S",
  "life-domain": "A",
  "forge-domain": "A",
  "light-domain": "A",
  "grave-domain": "B",

  // ========== DRUID ==========
  "circle-of-the-shepherd": "S",
  "circle-of-the-moon": "A",
  "circle-of-wildfire": "A",
  "circle-of-dreams": "B",
  "circle-of-the-land": "B",
  "circle-of-spores": "C",

  // ========== FIGHTER ==========
  "battle-master": "S",
  "rune-knight": "S",
  "eldritch-knight": "A",
  "psi-warrior": "A",
  cavalier: "A",
  samurai: "B",
  "arcane-archer": "C",
  champion: "C",

  // ========== MONK ==========
  "way-of-mercy": "S",
  "way-of-the-open-hand": "A",
  "way-of-shadow": "A",
  "way-of-the-drunken-master": "B",
  "way-of-the-kensei": "B",
  "way-of-the-sun-soul": "C",

  // ========== PALADIN ==========
  "oath-of-vengeance": "S",
  "oath-of-conquest": "S",
  "oath-of-devotion": "A",
  "oath-of-redemption": "A",
  "oath-of-glory": "B",

  // ========== RANGER ==========
  "gloom-stalker": "S",
  "fey-wanderer": "A",
  swarmkeeper: "A",
  hunter: "B",
  "horizon-walker": "B",
  "monster-slayer": "B",
  "beast-master": "C",

  // ========== ROGUE ==========
  soulknife: "S",
  "arcane-trickster": "S",
  swashbuckler: "A",
  scout: "A",
  inquisitive: "B",
  thief: "B",
  assassin: "C",
  mastermind: "C",

  // ========== SORCERER ==========
  "clockwork-soul": "S",
  "aberrant-mind": "S",
  "divine-soul": "A",
  "shadow-magic": "A",
  "draconic-bloodline": "B",
  "wild-magic": "B",
  "storm-sorcery": "C",

  // ========== WARLOCK ==========
  "the-hexblade": "S",
  "the-genie": "S",
  "the-fiend": "A",
  "the-celestial": "A",
  "the-great-old-one": "B",
  "the-fathomless": "B",

  // ========== WIZARD ==========
  bladesinging: "S",
  "war-magic": "A",
  "school-of-abjuration": "A",
  "school-of-evocation": "B",

  // ========== ARTIFICER ==========
  armorer: "S",
  "battle-smith": "A",
  artillerist: "A",
  alchemist: "C",
};
