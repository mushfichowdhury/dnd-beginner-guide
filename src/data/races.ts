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
      "Ability scores tied to background. Choose a lineage (Drow, High Elf, or Wood Elf) that grants unique spells at levels 1, 3, and 5. Drow no longer have Sunlight Sensitivity.",
    source: "PHB",
    variantEditions: ["5.5e"],
    variants: [
      {
        id: "drow",
        name: "Drow",
        description:
          "Drow elves hail from the Underdark, gaining superior darkvision (120 ft) and innate magic tied to shadow and deception. Sunlight Sensitivity is removed in the 2024 rules.",
        spells: [
          { level: 1, name: "Dancing Lights", note: "cantrip" },
          { level: 3, name: "Faerie Fire", note: "once per long rest" },
          { level: 5, name: "Darkness", note: "once per long rest" },
        ],
        mechanicalSummary: "Dancing Lights → Faerie Fire → Darkness",
      },
      {
        id: "high-elf",
        name: "High Elf",
        description:
          "High elves are steeped in arcane tradition, gaining access to wizard-adjacent magic. Their innate spellcasting makes them natural spellcasters and scholars.",
        spells: [
          { level: 1, name: "Prestidigitation", note: "cantrip" },
          { level: 3, name: "Detect Magic", note: "once per long rest" },
          { level: 5, name: "Misty Step", note: "once per long rest" },
        ],
        mechanicalSummary: "Prestidigitation → Detect Magic → Misty Step",
      },
      {
        id: "wood-elf",
        name: "Wood Elf",
        description:
          "Wood elves are swift and attuned to the natural world, gaining druidic magic and enhanced mobility. Their base walking speed increases by 5 feet.",
        spells: [
          { level: 1, name: "Druidcraft", note: "cantrip" },
          { level: 3, name: "Longstrider", note: "once per long rest" },
          { level: 5, name: "Pass Without Trace", note: "once per long rest" },
        ],
        mechanicalSummary: "Druidcraft → Longstrider → Pass Without Trace",
      },
    ],
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
    traits: ["Darkvision", "Gnome Cunning", "Gnomish Lineage"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. Gnome Cunning now grants advantage on all Int/Wis/Cha saving throws against spells. Choose a Gnomish Lineage (Forest or Rock).",
    source: "PHB",
    variantEditions: ["5.5e"],
    variants: [
      {
        id: "forest-gnome",
        name: "Forest Gnome",
        description:
          "Forest gnomes have a natural affinity for illusion and can communicate with small animals. Their magic reflects their playful, woodland nature.",
        spells: [
          { level: 1, name: "Minor Illusion", note: "cantrip" },
          { level: 1, name: "Speak with Animals", note: "PB uses per long rest" },
        ],
        mechanicalSummary: "Minor Illusion + Speak with Animals",
      },
      {
        id: "rock-gnome",
        name: "Rock Gnome",
        description:
          "Rock gnomes are gifted tinkerers and craftspeople who can create small clockwork devices. Their practical ingenuity complements their magical aptitude.",
        spells: [
          { level: 1, name: "Mending", note: "cantrip" },
          { level: 1, name: "Prestidigitation", note: "cantrip" },
        ],
        mechanicalSummary: "Mending + Prestidigitation + Tinker",
      },
    ],
  },
  {
    id: "tiefling",
    name: "Tiefling",
    synopsis:
      "Tieflings bear the mark of an infernal heritage, granting them innate fire magic and a striking appearance. Their charisma and resilience make them natural leaders and spellcasters.",
    hint: "Good if you like dark aesthetics and free fire spells",
    abilityBonuses: "+2 Charisma, +1 Intelligence",
    traits: ["Darkvision", "Hellish Resistance", "Fiendish Legacy"],
    editions: ["5e", "5.5e"],
    changes5_5e:
      "Ability scores tied to background. Choose a Fiendish Legacy (Abyssal, Chthonic, or Infernal), each with unique spell progressions at levels 1, 3, and 5.",
    source: "PHB",
    variantEditions: ["5.5e"],
    variants: [
      {
        id: "abyssal",
        name: "Abyssal",
        description:
          "Your fiendish legacy ties you to the chaotic demons of the Abyss, granting poison-related magic that corrupts and debilitates your foes.",
        spells: [
          { level: 1, name: "Poison Spray", note: "cantrip" },
          { level: 3, name: "Ray of Sickness", note: "once per long rest" },
          { level: 5, name: "Hold Person", note: "once per long rest" },
        ],
        mechanicalSummary: "Poison Spray → Ray of Sickness → Hold Person",
      },
      {
        id: "chthonic",
        name: "Chthonic",
        description:
          "Your fiendish legacy ties you to the underworld, granting necrotic magic and communion with death. Your spells drain life and weaken enemies.",
        spells: [
          { level: 1, name: "Chill Touch", note: "cantrip" },
          { level: 3, name: "False Life", note: "once per long rest" },
          { level: 5, name: "Ray of Enfeeblement", note: "once per long rest" },
        ],
        mechanicalSummary: "Chill Touch → False Life → Ray of Enfeeblement",
      },
      {
        id: "infernal",
        name: "Infernal",
        description:
          "Your fiendish legacy ties you to the Nine Hells, granting fire magic and charm abilities. Your spells burn and beguile in equal measure.",
        spells: [
          { level: 1, name: "Fire Bolt", note: "cantrip" },
          { level: 3, name: "Charm Person", note: "once per long rest" },
          { level: 5, name: "Suggestion", note: "once per long rest" },
        ],
        mechanicalSummary: "Fire Bolt → Charm Person → Suggestion",
      },
    ],
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
    variants: [
      {
        id: "chromatic",
        name: "Chromatic",
        description:
          "Descended from chromatic dragons (black, blue, green, red, white). Your breath weapon deals damage based on your dragon color. You gain Chromatic Warding, becoming immune to your damage type at higher levels.",
        mechanicalSummary: "Breath weapon + Chromatic Warding immunity",
        subVariants: [
          { id: "black", name: "Black Dragon", damageType: "Acid", description: "Acid breath in a 30-foot line (Dex save). You gain resistance to acid damage." },
          { id: "blue", name: "Blue Dragon", damageType: "Lightning", description: "Lightning breath in a 30-foot line (Dex save). You gain resistance to lightning damage." },
          { id: "green", name: "Green Dragon", damageType: "Poison", description: "Poison breath in a 15-foot cone (Con save). You gain resistance to poison damage." },
          { id: "red", name: "Red Dragon", damageType: "Fire", description: "Fire breath in a 15-foot cone (Dex save). You gain resistance to fire damage." },
          { id: "white", name: "White Dragon", damageType: "Cold", description: "Cold breath in a 15-foot cone (Con save). You gain resistance to cold damage." },
        ],
      },
      {
        id: "metallic",
        name: "Metallic",
        description:
          "Descended from metallic dragons (brass, bronze, copper, gold, silver). In addition to a destructive breath weapon, you gain a second breath that can incapacitate or push enemies away.",
        mechanicalSummary: "Destructive + utility breath weapons",
        subVariants: [
          { id: "brass", name: "Brass Dragon", damageType: "Fire", description: "Fire breath in a 15-foot cone (Dex save). Second breath: sleep gas in a 15-foot cone." },
          { id: "bronze", name: "Bronze Dragon", damageType: "Lightning", description: "Lightning breath in a 30-foot line (Dex save). Second breath: push enemies 30 feet." },
          { id: "copper", name: "Copper Dragon", damageType: "Acid", description: "Acid breath in a 30-foot line (Dex save). Second breath: slow enemies in a 15-foot cone." },
          { id: "gold", name: "Gold Dragon", damageType: "Fire", description: "Fire breath in a 15-foot cone (Dex save). Second breath: weaken enemies (Str save)." },
          { id: "silver", name: "Silver Dragon", damageType: "Cold", description: "Cold breath in a 15-foot cone (Con save). Second breath: paralyze enemies (Con save)." },
        ],
      },
      {
        id: "gem",
        name: "Gem",
        description:
          "Descended from gem dragons (amethyst, crystal, emerald, sapphire, topaz). Your breath weapon deals damage based on your dragon type. You also gain limited flight via psionic energy.",
        mechanicalSummary: "Breath weapon + psionic flight",
        subVariants: [
          { id: "amethyst", name: "Amethyst Dragon", damageType: "Force", description: "Force breath in a 15-foot cone (Dex save). You gain resistance to force damage." },
          { id: "crystal", name: "Crystal Dragon", damageType: "Radiant", description: "Radiant breath in a 30-foot line (Dex save). You gain resistance to radiant damage." },
          { id: "emerald", name: "Emerald Dragon", damageType: "Psychic", description: "Psychic breath in a 15-foot cone (Int save). You gain resistance to psychic damage." },
          { id: "sapphire", name: "Sapphire Dragon", damageType: "Thunder", description: "Thunder breath in a 15-foot cone (Con save). You gain resistance to thunder damage." },
          { id: "topaz", name: "Topaz Dragon", damageType: "Necrotic", description: "Necrotic breath in a 15-foot cone (Con save). You gain resistance to necrotic damage." },
        ],
      },
    ],
  },
  // 5.5e-only species
  {
    id: "aasimar",
    name: "Aasimar",
    synopsis:
      "Aasimar are touched by celestial power, bearing a divine spark within. They can unleash radiant energy and transform into angelic forms, serving as beacons of hope in dark times.",
    hint: "Good if you want healing powers and a radiant angelic transformation",
    abilityBonuses: "Tied to background",
    traits: ["Darkvision", "Celestial Resistance", "Healing Hands", "Light Bearer", "Celestial Revelation"],
    editions: ["5.5e"],
    source: "PHB",
    variants: [
      {
        id: "heavenly-wings",
        name: "Heavenly Wings",
        description:
          "As a bonus action, you sprout spectral wings and gain a flying speed of 30 feet for 1 minute. You can use this once per long rest. The wings vanish early if you are incapacitated.",
        mechanicalSummary: "Bonus action: 30 ft fly speed for 1 min",
      },
      {
        id: "inner-radiance",
        name: "Inner Radiance",
        description:
          "As a bonus action, you emit radiant energy for 1 minute. At the end of each of your turns, you and each creature of your choice within 10 feet take radiant damage equal to your proficiency bonus. Once per long rest.",
        mechanicalSummary: "AoE radiant damage equal to PB each turn",
      },
      {
        id: "necrotic-shroud",
        name: "Necrotic Shroud",
        description:
          "As a bonus action, you unleash frightening divine energy for 1 minute. Creatures of your choice within 10 feet must make a Charisma save or be frightened until the end of your next turn. Once per turn, you deal extra necrotic damage equal to your proficiency bonus. Once per long rest.",
        mechanicalSummary: "Frighten nearby enemies + bonus necrotic damage",
      },
    ],
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
    variants: [
      {
        id: "cloud-giant",
        name: "Cloud Giant",
        description:
          "You can magically teleport up to 30 feet to an unoccupied space you can see. You can use this a number of times equal to your proficiency bonus, regaining all uses on a long rest.",
        mechanicalSummary: "Teleport 30 ft (PB/long rest)",
      },
      {
        id: "fire-giant",
        name: "Fire Giant",
        description:
          "When you hit with an attack roll or deal damage with a spell, you can deal an extra 1d10 fire damage to the target. You can use this a number of times equal to your proficiency bonus, regaining all uses on a long rest.",
        mechanicalSummary: "Extra 1d10 fire damage (PB/long rest)",
      },
      {
        id: "frost-giant",
        name: "Frost Giant",
        description:
          "When you take damage, you can use your reaction to gain resistance to cold damage and immunity to the cold condition until the start of your next turn. Usable a number of times equal to your proficiency bonus per long rest.",
        mechanicalSummary: "Reaction: cold resistance + cold immunity",
      },
      {
        id: "hill-giant",
        name: "Hill Giant",
        description:
          "When you hit a Large or smaller creature with an attack roll, you can knock it Prone. You can use this a number of times equal to your proficiency bonus, regaining all uses on a long rest.",
        mechanicalSummary: "Knock Large or smaller creatures Prone",
      },
      {
        id: "stone-giant",
        name: "Stone Giant",
        description:
          "When you take damage, you can use your reaction to reduce it by 1d12 + your Constitution modifier. Usable a number of times equal to your proficiency bonus per long rest.",
        mechanicalSummary: "Reaction: reduce damage by 1d12 + Con",
      },
      {
        id: "storm-giant",
        name: "Storm Giant",
        description:
          "When a creature you can see within 60 feet of you deals damage to you, you can use your reaction to deal 1d8 lightning damage to that creature. Usable a number of times equal to your proficiency bonus per long rest.",
        mechanicalSummary: "Reaction: 1d8 lightning to attacker (60 ft)",
      },
    ],
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

  // ========== VOLO'S GUIDE RACES (5e only) ==========
  {
    id: "tabaxi",
    name: "Tabaxi",
    synopsis:
      "Tabaxi are curious cat-folk driven by an insatiable wanderlust. They are incredibly fast and agile, capable of bursts of speed that leave other races in the dust.",
    hint: "Good if you want incredible speed and climbing, plus a feline aesthetic",
    abilityBonuses: "+2 Dexterity, +1 Charisma",
    traits: ["Darkvision", "Feline Agility", "Cat's Claws", "Cat's Talent"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "firbolg",
    name: "Firbolg",
    synopsis:
      "Firbolgs are gentle, reclusive giants with a deep bond to nature. They can turn invisible, disguise themselves with magic, and communicate with beasts and plants.",
    hint: "Good if you want a gentle giant who uses nature magic and stealth",
    abilityBonuses: "+2 Wisdom, +1 Strength",
    traits: ["Firbolg Magic", "Hidden Step", "Powerful Build", "Speech of Beast and Leaf"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "kenku",
    name: "Kenku",
    synopsis:
      "Kenku are flightless crow-folk cursed to only speak through mimicry. They are exceptional forgers and imitators, making them natural rogues and tricksters.",
    hint: "Good if you love creative roleplay and mimicking sounds and voices",
    abilityBonuses: "+2 Dexterity, +1 Wisdom",
    traits: ["Expert Forgery", "Kenku Training", "Mimicry"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "goblin",
    name: "Goblin",
    synopsis:
      "Goblins are small, scrappy survivors who punch above their weight. Their ability to disengage or hide as a bonus action makes them slippery and hard to pin down.",
    hint: "Good if you want a small, cunning trickster who's hard to catch",
    abilityBonuses: "+2 Dexterity, +1 Constitution",
    traits: ["Darkvision", "Fury of the Small", "Nimble Escape"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "bugbear",
    name: "Bugbear",
    synopsis:
      "Bugbears are hulking goblinoids who combine brute strength with surprising stealth. Their long arms give them extra reach, and they deal devastating damage from ambushes.",
    hint: "Good if you want to hit hard from surprise with extra melee reach",
    abilityBonuses: "+2 Strength, +1 Dexterity",
    traits: ["Darkvision", "Long-Limbed", "Powerful Build", "Surprise Attack", "Sneaky"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "lizardfolk",
    name: "Lizardfolk",
    synopsis:
      "Lizardfolk are cold-blooded reptilian hunters with natural armor and powerful jaws. They view the world through a pragmatic, survival-first lens that makes for unique roleplay.",
    hint: "Good if you want natural armor, a bite attack, and a survivalist mindset",
    abilityBonuses: "+2 Constitution, +1 Wisdom",
    traits: ["Natural Armor", "Hungry Jaws", "Cunning Artisan", "Hold Breath", "Hunter's Lore"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "kobold",
    name: "Kobold",
    synopsis:
      "Kobolds are small, dragon-worshipping reptilians who thrive through teamwork and cunning traps. Their Pack Tactics ability makes them deadly when fighting alongside allies.",
    hint: "Good if you want advantage on attacks whenever an ally is nearby",
    abilityBonuses: "+2 Dexterity, -2 Strength",
    traits: ["Darkvision", "Grovel Cower and Beg", "Pack Tactics", "Sunlight Sensitivity"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "yuan-ti-pureblood",
    name: "Yuan-Ti Pureblood",
    synopsis:
      "Yuan-Ti Purebloods are serpentine humanoids with innate magic resistance and poison immunity. They are often considered one of the most mechanically powerful races in 5e.",
    hint: "Good if you want magic resistance and innate spellcasting — very powerful",
    abilityBonuses: "+2 Charisma, +1 Intelligence",
    traits: ["Darkvision", "Innate Spellcasting", "Magic Resistance", "Poison Immunity"],
    editions: ["5e"],
    source: "Volo's Guide",
  },
  {
    id: "tortle",
    name: "Tortle",
    synopsis:
      "Tortles are nomadic turtle-folk with a natural shell that provides exceptional armor. They need no equipment to be well-protected, making them ideal for classes that lack armor proficiency.",
    hint: "Good if you want 17 AC with no armor — great for monks, druids, and casters",
    abilityBonuses: "+2 Strength, +1 Wisdom",
    traits: ["Natural Armor", "Claws", "Hold Breath", "Shell Defense", "Survival Instinct"],
    editions: ["5e"],
    source: "Xanathar's Guide",
  },

  // ========== MORDENKAINEN'S RACES (5e only) ==========
  {
    id: "aarakocra",
    name: "Aarakocra",
    synopsis:
      "Aarakocra are bird-folk from the Elemental Plane of Air who possess the coveted ability to fly from level 1. Their aerial mobility is unmatched among playable races.",
    hint: "Good if you want to fly from level 1 — one of the strongest racial features",
    abilityBonuses: "+2 Dexterity, +1 Wisdom",
    traits: ["Flight", "Talons", "Wind Caller"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },
  {
    id: "genasi",
    name: "Genasi",
    synopsis:
      "Genasi are planetouched beings infused with elemental power. Choose Air, Earth, Fire, or Water — each grants unique resistances, abilities, and innate spellcasting tied to your element.",
    hint: "Good if you want elemental powers — pick your element and lean into it",
    abilityBonuses: "+2 Constitution, +1 varies by element",
    traits: ["Elemental Heritage", "Innate Spellcasting", "Elemental Resistance"],
    editions: ["5e"],
    source: "Mordenkainen's",
    variants: [
      {
        id: "air",
        name: "Air Genasi",
        description:
          "Infused with the power of elemental air. You can hold your breath indefinitely and cast Levitate once per long rest. You gain resistance to lightning damage.",
      },
      {
        id: "earth",
        name: "Earth Genasi",
        description:
          "Infused with the power of elemental earth. You can move across difficult terrain made of earth or stone without extra movement and cast Pass Without Trace once per long rest.",
      },
      {
        id: "fire",
        name: "Fire Genasi",
        description:
          "Infused with the power of elemental fire. You gain resistance to fire damage and can cast Produce Flame and Burning Hands. Your skin may glow with an inner warmth.",
      },
      {
        id: "water",
        name: "Water Genasi",
        description:
          "Infused with the power of elemental water. You can breathe underwater, have a swimming speed, and gain resistance to acid damage. You can cast Shape Water and Create or Destroy Water.",
      },
    ],
  },
];
