export const traitDescriptions: Record<string, string> = {
  // Common traits
  "Darkvision": "You can see in dim light within 60 feet as if it were bright light, and in darkness as if it were dim light.",
  "Keen Senses": "You have proficiency in the Perception skill.",
  "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
  "Trance": "You don't need to sleep. Instead, you meditate for 4 hours a day and gain the same benefit as 8 hours of sleep.",

  // Dwarf
  "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance to poison damage.",
  "Stonecunning": "When making a History check related to stonework, you add double your proficiency bonus.",
  "Tool Proficiency": "You gain proficiency with one set of artisan's tools of your choice.",

  // Halfling
  "Lucky": "When you roll a 1 on a d20 for an attack roll, ability check, or saving throw, you can reroll and must use the new roll.",
  "Brave": "You have advantage on saving throws against being frightened.",
  "Halfling Nimbleness": "You can move through the space of any creature that is one size larger than you.",

  // Half-Elf
  "Skill Versatility": "You gain proficiency in two skills of your choice.",

  // Half-Orc
  "Menacing": "You gain proficiency in the Intimidation skill.",
  "Relentless Endurance": "When you drop to 0 HP but aren't killed outright, you can drop to 1 HP instead. Usable once per long rest.",
  "Savage Attacks": "When you score a critical hit with a melee weapon, you roll one extra damage die and add it to the total.",

  // Gnome
  "Gnome Cunning": "You have advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",

  // Tiefling
  "Hellish Resistance": "You have resistance to fire damage.",
  "Infernal Legacy": "You know the Thaumaturgy cantrip. At 3rd level you can cast Hellish Rebuke once per long rest.",
  "Fiendish Legacy": "Choose Abyssal, Chthonic, or Infernal legacy. Each grants a cantrip at level 1 and additional spells at levels 3 and 5, cast once per long rest.",

  // Gnome (5.5e)
  "Gnomish Lineage": "Choose Forest Gnome or Rock Gnome lineage. Each grants unique cantrips and abilities reflecting your gnomish heritage.",

  // Aasimar (5.5e)
  "Celestial Revelation": "At 3rd level, choose a celestial transformation: Heavenly Wings (flight), Inner Radiance (AoE radiant damage), or Necrotic Shroud (frighten + necrotic damage). Usable once per long rest as a bonus action for 1 minute.",

  // Dragonborn
  "Draconic Ancestry": "Choose a dragon type. This determines your breath weapon's damage type and your damage resistance.",
  "Breath Weapon": "You can exhale destructive energy in a 15-foot cone or 30-foot line, dealing damage based on your ancestry.",
  "Damage Resistance": "You have resistance to the damage type associated with your draconic ancestry.",

  // Human
  "Extra Language": "You can speak, read, and write one extra language of your choice.",
  "Extra Skill Proficiency": "You gain proficiency in one skill of your choice.",

  // Aasimar
  "Celestial Resistance": "You have resistance to necrotic and radiant damage.",
  "Healing Hands": "As an action, you can touch a creature and restore HP equal to your level. Usable once per long rest.",
  "Light Bearer": "You know the Light cantrip. Charisma is your spellcasting ability for it.",

  // Goliath
  "Large Form": "You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift.",
  "Powerful Build": "You count as one size larger when determining carrying capacity and the weight you can push, drag, or lift.",
  "Stone's Endurance": "When you take damage, you can use your reaction to roll a d12 + Con modifier and reduce the damage by that amount.",
  "Giant Ancestry": "You gain a supernatural boon tied to your giant heritage, such as cloud, fire, frost, hill, stone, or storm giant traits.",

  // Orc
  "Adrenaline Rush": "You can Dash as a bonus action and gain temporary HP equal to your proficiency bonus. Usable once per long rest.",

  // Tabaxi
  "Feline Agility": "When you move on your turn, you can double your speed until the end of the turn. You must then spend a turn not moving to use this again.",
  "Cat's Claws": "You have a climbing speed of 20 feet and can use your claws for unarmed strikes dealing 1d4 slashing damage.",
  "Cat's Talent": "You have proficiency in the Perception and Stealth skills.",

  // Firbolg
  "Firbolg Magic": "You can cast Detect Magic and Disguise Self once each per short or long rest, using Wisdom as your spellcasting ability.",
  "Hidden Step": "As a bonus action, you can turn invisible until the start of your next turn or until you attack or cast a spell.",
  "Speech of Beast and Leaf": "You can communicate simple ideas to beasts and plants. They can understand you but you can't understand them.",

  // Kenku
  "Expert Forgery": "You can duplicate other creatures' handwriting and craftwork with advantage on checks to produce forgeries.",
  "Kenku Training": "You gain proficiency in two of the following skills: Acrobatics, Deception, Stealth, or Sleight of Hand.",
  "Mimicry": "You can mimic sounds and voices you've heard. A creature that hears you can tell it's an imitation with a successful Insight check.",

  // Goblin
  "Fury of the Small": "When you damage a creature larger than you, you deal extra damage equal to your level. Usable once per short or long rest.",
  "Nimble Escape": "You can take the Disengage or Hide action as a bonus action on each of your turns.",

  // Bugbear
  "Long-Limbed": "Your reach for melee attacks is 5 feet greater than normal.",
  "Surprise Attack": "If you hit a surprised creature on your first turn, it takes an extra 2d6 damage.",
  "Sneaky": "You gain proficiency in the Stealth skill.",

  // Lizardfolk
  "Natural Armor": "Your base AC is 13 + Dexterity modifier when not wearing armor. You can use a shield and still gain this benefit.",
  "Hungry Jaws": "As a bonus action, you can make a bite attack. On a hit, you gain temporary HP equal to your Con modifier.",
  "Cunning Artisan": "During a short rest, you can craft a simple weapon or shield from the remains of a slain creature.",
  "Hold Breath": "You can hold your breath for up to 15 minutes at a time.",
  "Hunter's Lore": "You gain proficiency in two of the following skills: Animal Handling, Nature, Perception, Stealth, or Survival.",

  // Kobold
  "Grovel Cower and Beg": "As an action, you cower pathetically. Until the end of your next turn, allies have advantage on attacks against enemies within 10 feet of you.",
  "Pack Tactics": "You have advantage on attack rolls against a creature if at least one ally is within 5 feet of it.",
  "Sunlight Sensitivity": "You have disadvantage on attack rolls and Perception checks that rely on sight when you or your target is in direct sunlight.",

  // Yuan-Ti Pureblood
  "Innate Spellcasting": "You know the Poison Spray cantrip. At higher levels, you gain additional spells you can cast once per long rest.",
  "Magic Resistance": "You have advantage on saving throws against spells and other magical effects.",
  "Poison Immunity": "You are immune to poison damage and the poisoned condition.",

  // Tortle
  "Claws": "Your claws are natural weapons that deal 1d4 slashing damage on a hit.",
  "Shell Defense": "You can withdraw into your shell as an action, gaining +4 AC and advantage on Strength and Constitution saves, but your speed drops to 0.",
  "Survival Instinct": "You gain proficiency in the Survival skill.",

  // Aarakocra
  "Flight": "You have a flying speed of 50 feet. You can't fly while wearing medium or heavy armor.",
  "Talons": "Your talons are natural weapons that deal 1d4 slashing damage on a hit.",
  "Wind Caller": "You can cast Gust of Wind once per long rest without material components.",

  // Genasi
  "Elemental Heritage": "Your connection to the elemental planes grants you unique abilities based on your chosen element (Air, Earth, Fire, or Water).",
  "Elemental Resistance": "You have resistance to the damage type associated with your elemental heritage.",
};
