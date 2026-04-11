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

  // ========== EBERRON RACES (5e only) ==========
  {
    id: "warforged",
    name: "Warforged",
    synopsis:
      "Warforged are living constructs originally built for war. Made of wood, metal, and stone infused with magic, they are sentient beings who don't need to eat, drink, or breathe — and they never sleep.",
    hint: "Good if you want to be a living robot who never sleeps and resists poison",
    abilityBonuses: "+2 Constitution, +1 to one other",
    traits: ["Constructed Resilience", "Sentry's Rest", "Integrated Protection", "Specialized Design"],
    editions: ["5e"],
    source: "Eberron",
  },
  {
    id: "changeling",
    name: "Changeling",
    synopsis:
      "Changelings are shapeshifters who can alter their appearance at will. This innate ability makes them natural spies, con artists, and infiltrators — though many simply use it to fit in wherever they go.",
    hint: "Good if you want to change your appearance at will for perfect disguises",
    abilityBonuses: "+2 Charisma, +1 to one other",
    traits: ["Shapechanger", "Changeling Instincts"],
    editions: ["5e"],
    source: "Eberron",
  },
  {
    id: "kalashtar",
    name: "Kalashtar",
    synopsis:
      "Kalashtar are humans bound to spirits from the plane of dreams. This psychic bond grants them telepathy, mental resilience, and a serene disposition — but also makes them targets of the Dreaming Dark.",
    hint: "Good if you want psychic resistance and telepathy from a dream spirit bond",
    abilityBonuses: "+2 Wisdom, +1 Charisma",
    traits: ["Dual Mind", "Mental Discipline", "Mind Link", "Severed from Dreams"],
    editions: ["5e"],
    source: "Eberron",
  },
  {
    id: "shifter",
    name: "Shifter",
    synopsis:
      "Shifters are descendants of humans and lycanthropes who can temporarily shift into bestial forms. Each subrace emphasizes a different animal aspect — toughness, claws, speed, or tracking instincts.",
    hint: "Good if you want to briefly transform with bestial features for combat bonuses",
    abilityBonuses: "+1 Dexterity, +1 varies by subrace",
    traits: ["Darkvision", "Shifting"],
    editions: ["5e"],
    source: "Eberron",
    variants: [
      {
        id: "beasthide",
        name: "Beasthide",
        description:
          "When you shift, you gain temporary HP and +1 AC. Beasthide shifters are tough and durable, drawing on bear or boar ancestry.",
      },
      {
        id: "longtooth",
        name: "Longtooth",
        description:
          "When you shift, you grow fangs and can make a bite attack as a bonus action. Longtooth shifters channel wolf or tiger ancestry.",
      },
      {
        id: "swiftstride",
        name: "Swiftstride",
        description:
          "When you shift, your walking speed increases by 10 feet and you can move away from enemies without provoking opportunity attacks. Channels fox or cat ancestry.",
      },
      {
        id: "wildhunt",
        name: "Wildhunt",
        description:
          "When you shift, no creature within 30 feet can have advantage on attacks against you. Wildhunt shifters channel hawk or hound ancestry for supernatural awareness.",
      },
    ],
  },

  // ========== RAVNICA RACES (5e only) ==========
  {
    id: "centaur",
    name: "Centaur",
    synopsis:
      "Centaurs are half-human, half-horse beings with powerful builds and a love of open spaces. Their charge ability and hooves make them formidable in melee, and they can even carry willing allies.",
    hint: "Good if you want to charge enemies and carry allies on your back",
    abilityBonuses: "+2 Strength, +1 Wisdom",
    traits: ["Fey", "Charge", "Hooves", "Equine Build"],
    editions: ["5e"],
    source: "Ravnica",
  },
  {
    id: "loxodon",
    name: "Loxodon",
    synopsis:
      "Loxodons are elephant-folk with thick skin, a prehensile trunk, and a calm, community-minded nature. Their natural armor and serenity make them excellent tanks and support characters.",
    hint: "Good if you want natural armor, a trunk for grappling, and advantage vs charm and fright",
    abilityBonuses: "+2 Constitution, +1 Wisdom",
    traits: ["Natural Armor", "Trunk", "Keen Smell", "Loxodon Serenity"],
    editions: ["5e"],
    source: "Ravnica",
  },
  {
    id: "minotaur",
    name: "Minotaur",
    synopsis:
      "Minotaurs are hulking bull-headed humanoids who excel at charging through enemies. Their horns are natural weapons, and they possess an uncanny ability to navigate mazes and complex structures.",
    hint: "Good if you want to gore enemies with horn charges and never get lost",
    abilityBonuses: "+2 Strength, +1 Constitution",
    traits: ["Horns", "Goring Rush", "Hammering Horns", "Labyrinthine Recall"],
    editions: ["5e"],
    source: "Ravnica",
  },
  {
    id: "vedalken",
    name: "Vedalken",
    synopsis:
      "Vedalken are tall, blue-skinned beings driven by an insatiable thirst for knowledge. Their analytical minds grant them advantage on mental saving throws and bonuses to precision-based skills.",
    hint: "Good if you want advantage on mental saves and bonuses to tool and skill checks",
    abilityBonuses: "+2 Intelligence, +1 Wisdom",
    traits: ["Vedalken Dispassion", "Tireless Precision", "Partially Amphibious"],
    editions: ["5e"],
    source: "Ravnica",
  },
  {
    id: "simic-hybrid",
    name: "Simic Hybrid",
    synopsis:
      "Simic Hybrids are beings who have been magically enhanced with animal adaptations. At character creation and again at 5th level, you choose enhancements like claws, wings, underwater breathing, or extra limbs.",
    hint: "Good if you want to graft animal parts onto yourself for claws, flight, or underwater breathing",
    abilityBonuses: "+2 Constitution, +1 to one other",
    traits: ["Darkvision", "Animal Enhancement"],
    editions: ["5e"],
    source: "Ravnica",
  },

  // ========== THEROS RACES (5e only) ==========
  {
    id: "satyr",
    name: "Satyr",
    synopsis:
      "Satyrs are fey creatures with goat-like legs who love revelry, music, and mischief. Their fey nature grants them magic resistance — one of the most powerful racial features in the game.",
    hint: "Good if you want magic resistance as a fey creature who loves revelry",
    abilityBonuses: "+2 Charisma, +1 Dexterity",
    traits: ["Fey", "Magic Resistance", "Mirthful Leaps", "Ram", "Reveler"],
    editions: ["5e"],
    source: "Theros",
  },
  {
    id: "leonin",
    name: "Leonin",
    synopsis:
      "Leonin are proud lion-folk warriors with powerful claws and a terrifying roar. They are fiercely independent and distrustful of gods, preferring to rely on their own strength and community.",
    hint: "Good if you want a lion-folk warrior with a terrifying roar",
    abilityBonuses: "+2 Constitution, +1 Strength",
    traits: ["Darkvision", "Claws", "Hunter's Instincts", "Daunting Roar"],
    editions: ["5e"],
    source: "Theros",
  },

  // ========== MORDENKAINEN'S / MOTM RACES ==========
  {
    id: "githyanki",
    name: "Githyanki",
    synopsis:
      "Githyanki are astral warriors who dwell in the Astral Plane, riding red dragons and waging eternal war against mind flayers. They combine martial prowess with innate psionic abilities.",
    hint: "Good if you want an astral warrior with psionics, armor proficiency, and a militant culture",
    abilityBonuses: "+2 Strength, +1 Intelligence",
    traits: ["Darkvision", "Githyanki Psionics", "Martial Prodigy", "Psychic Resilience"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },
  {
    id: "githzerai",
    name: "Githzerai",
    synopsis:
      "Githzerai are disciplined monks from the plane of Limbo who harness pure mental focus to shape chaos itself. Their psionic training grants them powerful defensive abilities.",
    hint: "Good if you want a monastic psionic who shrugs off mental attacks and casts Shield",
    abilityBonuses: "+2 Wisdom, +1 Intelligence",
    traits: ["Darkvision", "Githzerai Psionics", "Mental Discipline", "Psychic Resilience"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },
  {
    id: "eladrin",
    name: "Eladrin",
    synopsis:
      "Eladrin are elves of the Feywild whose appearance and abilities shift with the seasons. Their signature Fey Step teleportation comes with a bonus effect based on their current season — charm, frighten, teleport an ally, or deal fire damage.",
    hint: "Good if you want a fey elf who teleports with seasonal effects",
    abilityBonuses: "+2 Charisma, +1 Dexterity",
    traits: ["Darkvision", "Fey Ancestry", "Fey Step", "Trance"],
    editions: ["5e"],
    source: "Mordenkainen's",
    variants: [
      {
        id: "autumn",
        name: "Autumn",
        description:
          "When you use Fey Step, up to two creatures within 10 feet of where you teleport to must make a Wisdom save or be charmed for 1 minute.",
      },
      {
        id: "winter",
        name: "Winter",
        description:
          "When you use Fey Step, one creature within 5 feet of where you teleport to must make a Wisdom save or be frightened until the end of your next turn.",
      },
      {
        id: "spring",
        name: "Spring",
        description:
          "When you use Fey Step, you can instead teleport a willing creature within 5 feet of you to the destination space.",
      },
      {
        id: "summer",
        name: "Summer",
        description:
          "When you use Fey Step, each creature of your choice within 5 feet of where you teleport from must make a Constitution save or take fire damage equal to your Charisma modifier.",
      },
    ],
  },
  {
    id: "shadar-kai",
    name: "Shadar-kai",
    synopsis:
      "Shadar-kai are elves of the Shadowfell, servants of the Raven Queen. Their grim existence has made them resilient to necrotic energy, and they can teleport through shadows as a bonus action.",
    hint: "Good if you want a Shadowfell elf who teleports and resists necrotic damage",
    abilityBonuses: "+2 Dexterity, +1 Constitution",
    traits: ["Darkvision", "Fey Ancestry", "Blessing of the Raven Queen", "Necrotic Resistance"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },
  {
    id: "deep-gnome",
    name: "Deep Gnome",
    synopsis:
      "Deep Gnomes, or Svirfneblin, are gnomes adapted to the Underdark. They possess superior darkvision, innate camouflage in rocky terrain, and the same cunning resistance to magic as their surface kin.",
    hint: "Good if you want an underdark gnome with superior darkvision and stealth in rocky terrain",
    abilityBonuses: "+2 Intelligence, +1 Dexterity",
    traits: ["Superior Darkvision", "Gnome Cunning", "Stone Camouflage", "Gift of the Svirfneblin"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },
  {
    id: "duergar",
    name: "Duergar",
    synopsis:
      "Duergar are gray dwarves of the Underdark, forged by centuries of enslavement under mind flayers. They possess innate psionic magic to turn invisible and enlarge themselves — but sunlight weakens them.",
    hint: "Good if you want an underdark dwarf who can turn invisible and grow to large size",
    abilityBonuses: "+2 Constitution, +1 Strength",
    traits: ["Superior Darkvision", "Dwarven Resilience", "Duergar Magic", "Psionic Fortitude", "Sunlight Sensitivity"],
    editions: ["5e"],
    source: "Mordenkainen's",
  },

  // ========== VAN RICHTEN'S LINEAGES (5e only) ==========
  {
    id: "dhampir",
    name: "Dhampir",
    synopsis:
      "Dhampirs are half-vampires with an unnatural hunger. Their vampiric bite heals them or empowers their abilities, and they can climb walls like a spider — making them terrifying predators.",
    hint: "Good if you want a half-vampire with a bite attack that heals you and spider climbing",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Darkvision", "Vampiric Bite", "Spider Climb", "Deathless Nature"],
    editions: ["5e"],
    source: "Van Richten's",
  },
  {
    id: "hexblood",
    name: "Hexblood",
    synopsis:
      "Hexbloods are fey-cursed beings — perhaps once human, now touched by hag magic. They can create eerie tokens from their own body to spy remotely and cast innate hex magic.",
    hint: "Good if you want a fey-cursed creature with innate Hex and remote spying",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Darkvision", "Eerie Token", "Hex Magic", "Fey Creature Type"],
    editions: ["5e"],
    source: "Van Richten's",
  },
  {
    id: "reborn",
    name: "Reborn",
    synopsis:
      "Reborn are beings who have died and returned — whether as undead, constructs, or something else entirely. They carry fragmented memories of past lives and possess an unnatural resilience to death.",
    hint: "Good if you want to play someone who died and came back, with echoes of past lives",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Deathless Nature", "Knowledge from a Past Life", "Ancestral Legacy"],
    editions: ["5e"],
    source: "Van Richten's",
  },

  // ========== WITCHLIGHT / MOTM RACES (5e only) ==========
  {
    id: "fairy",
    name: "Fairy",
    synopsis:
      "Fairies are tiny fey beings with innate flight and magic. Despite their small size, they pack a punch with spells like Faerie Fire and Enlarge/Reduce, making them surprisingly versatile in any class.",
    hint: "Good if you want to be a tiny flying fey creature with innate magic",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Fey", "Flight", "Fairy Magic"],
    editions: ["5e"],
    source: "Witchlight",
  },
  {
    id: "harengon",
    name: "Harengon",
    synopsis:
      "Harengon are rabbit-folk from the Feywild with exceptional reflexes and luck. Their bonus to initiative, reaction-based saving throw boost, and powerful jumps make them nimble and hard to pin down.",
    hint: "Good if you want a rabbit-folk with bonus to initiative and exceptional jumping",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Hare-Trigger", "Leporine Senses", "Lucky Footwork", "Rabbit Hop"],
    editions: ["5e"],
    source: "Witchlight",
  },
  {
    id: "owlin",
    name: "Owlin",
    synopsis:
      "Owlins are owl-like humanoids with large wings and keen senses. Their silent flight and darkvision make them perfect scouts, and their Stealth proficiency ensures they're rarely detected.",
    hint: "Good if you want a flying owl-person with stealth proficiency",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Darkvision", "Flight", "Silent Feathers"],
    editions: ["5e"],
    source: "Witchlight",
  },

  // ========== SPELLJAMMER RACES (5e only) ==========
  {
    id: "astral-elf",
    name: "Astral Elf",
    synopsis:
      "Astral Elves have lived in the Astral Plane for so long that they've gained starlight-infused abilities. They can teleport via Starlight Step and their Astral Fire cantrip channels radiant energy.",
    hint: "Good if you want an elf from the Astral Plane who teleports via starlight",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Darkvision", "Fey Ancestry", "Astral Fire", "Starlight Step", "Trance"],
    editions: ["5e"],
    source: "Spelljammer",
  },
  {
    id: "autognome",
    name: "Autognome",
    synopsis:
      "Autognomes are mechanical beings created by rock gnomes. They have natural armor, can add a d4 to failed saving throws, and repair themselves during short rests — making them remarkably resilient.",
    hint: "Good if you want a small clockwork robot with natural armor and self-repair",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Armored Casing", "Built for Success", "Mechanical Nature", "Sentry's Rest"],
    editions: ["5e"],
    source: "Spelljammer",
  },
  {
    id: "giff",
    name: "Giff",
    synopsis:
      "Giff are hippo-headed humanoids with a military culture and a love of firearms. Their Astral Spark adds force damage to weapon attacks, and their powerful build lets them dominate in strength contests.",
    hint: "Good if you want a hippo-folk with bonus weapon damage and powerful build",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Astral Spark", "Firearms Mastery", "Hippo Build"],
    editions: ["5e"],
    source: "Spelljammer",
  },
  {
    id: "hadozee",
    name: "Hadozee",
    synopsis:
      "Hadozees are simian beings with wing-like membranes that let them glide through the air. They can use their reaction to reduce falling damage and their dexterous feet can manipulate objects.",
    hint: "Good if you want a simian glider who reduces fall damage with wing membranes",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Dexterous Feet", "Glide", "Hadozee Resilience"],
    editions: ["5e"],
    source: "Spelljammer",
  },
  {
    id: "plasmoid",
    name: "Plasmoid",
    synopsis:
      "Plasmoids are amorphous ooze-like beings who can reshape their bodies, squeeze through tiny gaps, and resist acid and poison. They're one of the most unusual playable races available.",
    hint: "Good if you want an ooze-person who can squeeze through tiny gaps and reshape their body",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Amorphous", "Darkvision", "Hold Breath", "Natural Resilience", "Shape Self"],
    editions: ["5e"],
    source: "Spelljammer",
  },
  {
    id: "thri-kreen",
    name: "Thri-kreen",
    synopsis:
      "Thri-kreen are four-armed insectoid beings with natural camouflage and telepathy. Their secondary arms can hold extra items and their chameleon carapace lets them blend into any environment.",
    hint: "Good if you want a four-armed insectoid with natural camouflage and telepathy",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Chameleon Carapace", "Darkvision", "Secondary Arms", "Sleepless", "Thri-kreen Telepathy"],
    editions: ["5e"],
    source: "Spelljammer",
  },

  // ========== DRAGONLANCE RACES (5e only) ==========
  {
    id: "kender",
    name: "Kender",
    synopsis:
      "Kender are small, fearless folk from Krynn with an insatiable curiosity and a knack for taunting enemies. They are immune to the frightened condition and can provoke foes into reckless attacks.",
    hint: "Good if you want a fearless halfling-like trickster who can taunt enemies into rage",
    abilityBonuses: "+2/+1 to any two, or +1 to three",
    traits: ["Fearless", "Kender Aptitude", "Taunt"],
    editions: ["5e"],
    source: "Dragonlance",
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
