import { Race } from "@/types";

export const races: Race[] = [
  {
    id: "human",
    name: "Human",
    synopsis:
      "Humans are the most adaptable and ambitious of all races. They vary widely in appearance and temperament, thriving in every corner of the world through sheer determination and versatility.",
    hint: "Good if you want flexibility and a bonus to every ability score",
    abilityBonuses: "+1 to all ability scores",
    traits: ["Extra Language", "Extra Skill Proficiency"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores now tied to background. Humans gain Heroic Inspiration at the start of each day and a free Origin feat.",
    source: "PHB",
  },
  {
    id: "elf",
    name: "Elf",
    synopsis:
      "Elves are graceful, long-lived beings with keen senses and a deep connection to nature and magic. They move through the world with an otherworldly elegance that reflects centuries of experience.",
    hint: "Good if you like dexterity, magic, and never being caught off guard",
    abilityBonuses: "+2 Dexterity",
    traits: ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. All elf variants gain associated spells at levels 3 and 5. Drow no longer have Sunlight Sensitivity.",
    source: "PHB",
  },
  {
    id: "dwarf",
    name: "Dwarf",
    synopsis:
      "Dwarves are stout, resilient folk born of mountain stone. Known for their craftsmanship and tenacity, they are among the toughest and most loyal companions an adventurer could ask for.",
    hint: "Good if you like being tough, resilient, and hard to knock down",
    abilityBonuses: "+2 Constitution",
    traits: ["Darkvision", "Dwarven Resilience", "Stonecunning", "Tool Proficiency"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. Dwarves gain Stonecunning as a Tremorsense-like feature and additional resistances.",
    source: "PHB",
  },
  {
    id: "halfling",
    name: "Halfling",
    synopsis:
      "Halflings are small, cheerful folk who prefer comfort but possess surprising bravery. Their natural luck and nimbleness make them excellent adventurers despite their diminutive stature.",
    hint: "Good if you want to reroll bad dice — literally (Lucky trait)",
    abilityBonuses: "+2 Dexterity",
    traits: ["Lucky", "Brave", "Halfling Nimbleness"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. Lucky now lets you reroll any d20 roll of 1, not just attack rolls.",
    source: "PHB",
  },
  {
    id: "half-elf",
    name: "Half-Elf",
    synopsis:
      "Half-elves blend human ambition with elven grace. They are charismatic diplomats who bridge two worlds, gaining extra skills and adaptability from their dual heritage.",
    hint: "Good if you want charisma, versatility, and extra skill proficiencies",
    abilityBonuses: "+2 Charisma, +1 to two others",
    traits: ["Darkvision", "Fey Ancestry", "Skill Versatility"],
    editions: ["5e"],
    source: "PHB",
  },
  {
    id: "half-orc",
    name: "Half-Orc",
    synopsis:
      "Half-orcs combine human cunning with orcish strength and ferocity. They can shrug off blows that would fell others and deliver devastating attacks fueled by primal endurance.",
    hint: "Good if you want to hit hard and stay standing when you should be down",
    abilityBonuses: "+2 Strength, +1 Constitution",
    traits: ["Darkvision", "Menacing", "Relentless Endurance", "Savage Attacks"],
    editions: ["5e"],
    source: "PHB",
  },
  {
    id: "gnome",
    name: "Gnome",
    synopsis:
      "Gnomes are curious inventors and tricksters with an innate resistance to magic. Their boundless enthusiasm and sharp minds make them natural problem-solvers and spellcasters.",
    hint: "Good if you like outsmarting enemies and resisting spells",
    abilityBonuses: "+2 Intelligence",
    traits: ["Darkvision", "Gnome Cunning"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. Gnome Cunning now grants advantage on all Intelligence, Wisdom, and Charisma saving throws against spells.",
    source: "PHB",
  },
  {
    id: "tiefling",
    name: "Tiefling",
    synopsis:
      "Tieflings bear the mark of an infernal heritage, granting them innate fire magic and a striking appearance. Their charisma and resilience make them natural leaders and spellcasters.",
    hint: "Good if you like dark aesthetics and free fire spells",
    abilityBonuses: "+2 Charisma, +1 Intelligence",
    traits: ["Darkvision", "Hellish Resistance", "Infernal Legacy"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Three new lineages (Abyssal, Chthonic, Infernal) with unique spell progressions at levels 3 and 5.",
    source: "PHB",
  },
  {
    id: "dragonborn",
    name: "Dragonborn",
    synopsis:
      "Dragonborn are proud, draconic humanoids who carry the legacy of dragons in their blood. They can unleash a devastating breath weapon and embody the strength of their draconic ancestors.",
    hint: "Good if you want to breathe fire (or ice, or lightning) on your enemies",
    abilityBonuses: "+2 Strength, +1 Charisma",
    traits: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Breath Weapon now scales with level (1d10 → 4d10) and can be used as part of the Attack action. Choose Chromatic, Metallic, or Gem ancestry.",
    source: "PHB",
  },
  // 5.5e-only species
  {
    id: "aasimar",
    name: "Aasimar",
    synopsis:
      "Aasimar are touched by celestial power, bearing a divine spark within. They can unleash radiant energy and transform into angelic forms, serving as beacons of hope in dark times.",
    hint: "Good if you want healing powers and a radiant angelic transformation",
    abilityBonuses: "Tied to background",
    traits: ["Darkvision", "Celestial Resistance", "Healing Hands", "Light Bearer"],
    editions: ["5.5e"],
    source: "PHB",
  },
  {
    id: "goliath",
    name: "Goliath",
    synopsis:
      "Goliaths are towering, competitive mountain-dwellers who thrive on physical challenges. Their stone-like endurance and powerful builds make them natural-born warriors and athletes.",
    hint: "Good if you want to be the biggest, toughest person in any room",
    abilityBonuses: "Tied to background",
    traits: ["Large Form", "Powerful Build", "Stone's Endurance", "Giant Ancestry"],
    editions: ["5.5e"],
    source: "PHB",
  },
  {
    id: "orc",
    name: "Orc",
    synopsis:
      "Orcs are fierce, powerful warriors with a deep connection to primal strength. In the 2024 rules, they stand as a full species with abilities reflecting their relentless drive and vitality.",
    hint: "Good if you want raw strength, relentless endurance, and aggressive charges",
    abilityBonuses: "Tied to background",
    traits: ["Darkvision", "Adrenaline Rush", "Relentless Endurance"],
    editions: ["5.5e"],
    source: "PHB",
  },
];
