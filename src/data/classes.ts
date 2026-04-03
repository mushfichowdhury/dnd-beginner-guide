import { DndClass } from "@/types";

export const classes: DndClass[] = [
  {
    id: "barbarian",
    name: "Barbarian",
    synopsis:
      "Barbarians are fierce warriors fueled by primal rage. They charge into battle with reckless abandon, shrugging off damage and delivering devastating blows with raw physical power.",
    hint: "Good if you want to rage and shrug off damage like it's nothing",
    hitDie: "d12",
    primaryAbility: "Strength",
    role: "Tank / Melee DPS",
    source: "PHB",
  },
  {
    id: "bard",
    name: "Bard",
    synopsis:
      "Bards are charismatic performers who weave magic through music, words, and art. They excel as party faces, supporters, and surprisingly versatile spellcasters who can adapt to almost any situation.",
    hint: "Good if you want to talk your way out of anything and buff your allies",
    hitDie: "d8",
    primaryAbility: "Charisma",
    role: "Support / Face / Utility",
    source: "PHB",
  },
  {
    id: "cleric",
    name: "Cleric",
    synopsis:
      "Clerics are divine spellcasters who channel the power of their deity. Depending on their domain, they can heal allies, smite foes, or tank on the front lines — they are the most flexible support class.",
    hint: "Good if you like healing players and being support for the party",
    hitDie: "d8",
    primaryAbility: "Wisdom",
    role: "Healer / Support / Tank",
    source: "PHB",
  },
  {
    id: "druid",
    name: "Druid",
    synopsis:
      "Druids draw power from nature itself, commanding the elements and transforming into beasts. They are versatile spellcasters who can heal, deal damage, and control the battlefield.",
    hint: "Good if you want to shapeshift into animals and control the battlefield",
    hitDie: "d8",
    primaryAbility: "Wisdom",
    role: "Support / Controller / Wildcard",
    source: "PHB",
  },
  {
    id: "fighter",
    name: "Fighter",
    synopsis:
      "Fighters are masters of martial combat, trained in every weapon and armor style. They are the most straightforward class — reliable, effective, and deadly with more attacks than anyone else.",
    hint: "Good if you want to be great at combat without complexity",
    hitDie: "d10",
    primaryAbility: "Strength or Dexterity",
    role: "Frontline DPS / Tank",
    source: "PHB",
  },
  {
    id: "monk",
    name: "Monk",
    synopsis:
      "Monks are martial artists who harness Ki energy for supernatural feats. They strike fast, dodge attacks, and stun enemies with their fists — no heavy armor or weapons needed.",
    hint: "Good if you want fast martial arts and no heavy armor",
    hitDie: "d8",
    primaryAbility: "Dexterity & Wisdom",
    role: "Melee DPS / Mobile Striker",
    source: "PHB",
  },
  {
    id: "paladin",
    name: "Paladin",
    synopsis:
      "Paladins are holy warriors bound by sacred oaths. They combine martial prowess with divine magic, delivering devastating smites and protecting allies with healing and auras.",
    hint: "Good if you want to smite evil and protect your allies",
    hitDie: "d10",
    primaryAbility: "Strength & Charisma",
    role: "Tank / Burst DPS / Off-Healer",
    source: "PHB",
  },
  {
    id: "ranger",
    name: "Ranger",
    synopsis:
      "Rangers are skilled wilderness warriors who combine martial combat with nature magic. They track prey, fight from range, and can form bonds with animal companions or master terrain-based magic.",
    hint: "Good if you love nature, tracking, and fighting from range",
    hitDie: "d10",
    primaryAbility: "Dexterity & Wisdom",
    role: "Ranged DPS / Explorer",
    source: "PHB",
  },
  {
    id: "rogue",
    name: "Rogue",
    synopsis:
      "Rogues are cunning specialists who rely on stealth, skill, and precision. A single well-placed Sneak Attack can deal massive damage, and their expertise makes them unmatched at skills and trickery.",
    hint: "Good if you like stealth, cunning, and massive sneak attack damage",
    hitDie: "d8",
    primaryAbility: "Dexterity",
    role: "Stealth DPS / Skill Monkey",
    source: "PHB",
  },
  {
    id: "sorcerer",
    name: "Sorcerer",
    synopsis:
      "Sorcerers wield innate magical power born from their bloodline or a cosmic event. They have fewer spells than wizards but can twist and enhance them with Metamagic for explosive results.",
    hint: "Good if you want raw magical talent you were born with",
    hitDie: "d6",
    primaryAbility: "Charisma",
    role: "Ranged DPS / Blaster",
    source: "PHB",
  },
  {
    id: "warlock",
    name: "Warlock",
    synopsis:
      "Warlocks draw power from a pact with a mysterious patron — a fiend, fey, or eldritch entity. They have limited spell slots that recharge on short rests and the iconic Eldritch Blast cantrip.",
    hint: "Good if you want powerful magic from a mysterious patron deal",
    hitDie: "d8",
    primaryAbility: "Charisma",
    role: "Ranged DPS / Roleplay-Heavy",
    source: "PHB",
  },
  {
    id: "wizard",
    name: "Wizard",
    synopsis:
      "Wizards are scholars of the arcane who learn magic through study and practice. They have the largest spell list in the game, with a spellbook that grows as they discover new knowledge.",
    hint: "Good if you want the biggest spell list and ultimate arcane versatility",
    hitDie: "d6",
    primaryAbility: "Intelligence",
    role: "Ranged DPS / Utility / Controller",
    source: "PHB",
  },
  {
    id: "artificer",
    name: "Artificer",
    synopsis:
      "Artificers are magical inventors who infuse items with arcane power. They craft magical gear, deploy mechanical companions, and support the party with unique magical items no other class can create.",
    hint: "Good if you want to craft magical items and be the party's tech genius",
    hitDie: "d8",
    primaryAbility: "Intelligence",
    role: "Support / Utility / Crafter",
    source: "Tasha's Cauldron",
  },
];
