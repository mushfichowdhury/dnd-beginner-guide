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

  // Warforged (Eberron)
  "Constructed Resilience": "You have advantage on saving throws against being poisoned, resistance to poison damage, immunity to disease, and you don't need to eat, drink, or breathe.",
  "Sentry's Rest": "When you take a long rest, you spend at least 6 hours in an inactive but conscious state instead of sleeping.",
  "Integrated Protection": "Your body has built-in defensive layers. Your base AC is 11 + your proficiency bonus (no armor) or AC + proficiency bonus (with armor).",
  "Specialized Design": "You gain one skill proficiency and one tool proficiency of your choice.",

  // Changeling (Eberron)
  "Shapechanger": "As an action, you can change your appearance and voice. You determine the specifics including height, weight, facial features, hair, and voice.",
  "Changeling Instincts": "You gain proficiency in two of the following skills: Deception, Insight, Intimidation, or Persuasion.",

  // Kalashtar (Eberron)
  "Dual Mind": "You have advantage on all Wisdom saving throws.",
  "Mind Link": "You can telepathically speak to any creature within 10 × your level feet. The creature must share a language with you to respond.",
  "Severed from Dreams": "You are immune to spells and effects that require you to dream, like the Dream spell.",

  // Shifter (Eberron)
  "Shifting": "As a bonus action, you can assume a more bestial form for 1 minute. You gain temporary HP and a subrace-specific benefit.",

  // Centaur (Ravnica)
  "Charge": "If you move at least 30 feet toward a target and hit it with a melee attack, deal an extra 1d6 damage.",
  "Hooves": "Your hooves are natural melee weapons that deal 1d4 + Strength modifier bludgeoning damage.",
  "Equine Build": "You count as one size larger for carrying capacity. Climbing costs 4× extra movement. Medium creatures can ride you.",

  // Loxodon (Ravnica)
  "Trunk": "Your trunk can grasp things, lift objects up to 5× your Strength, and use as a snorkel while submerged.",
  "Loxodon Serenity": "You have advantage on saving throws against being charmed or frightened.",

  // Minotaur (Ravnica)
  "Horns": "Your horns are natural melee weapons that deal 1d6 + Strength modifier piercing damage.",
  "Goring Rush": "After using the Dash action, you can make one melee attack with your horns as a bonus action.",
  "Hammering Horns": "After hitting with a melee attack, you can use a bonus action to shove the target 10 feet away.",
  "Labyrinthine Recall": "You can always recall the path you have traveled.",

  // Vedalken (Ravnica)
  "Vedalken Dispassion": "You have advantage on Intelligence, Wisdom, and Charisma saving throws.",
  "Tireless Precision": "You gain proficiency with one tool and one skill of your choice, and can add 1d4 to checks with that tool or skill.",
  "Partially Amphibious": "You can breathe underwater for up to 1 hour. After that, you must spend at least 1 hour on land before using this again.",

  // Simic Hybrid (Ravnica)
  "Animal Enhancement": "At 1st level, choose manta glide, nimble climber, or underwater adaptation. At 5th level, choose grappling appendages, carapace, or acid spit.",

  // Satyr (Theros)
  "Fey": "Your creature type is fey rather than humanoid. This makes you immune to spells that specifically target humanoids.",
  "Ram": "Your ram is a natural melee weapon that deals 1d4 + Strength modifier bludgeoning damage.",
  "Mirthful Leaps": "When you make a long or high jump, you can add 1d8 extra feet to the distance.",
  "Reveler": "You gain proficiency in Performance and Persuasion skills, and one musical instrument of your choice.",

  // Leonin (Theros)
  "Hunter's Instincts": "You gain proficiency in one of the following: Athletics, Intimidation, Perception, or Survival.",
  "Daunting Roar": "As a bonus action, you can let out a menacing roar. Each creature within 10 feet must make a Wisdom save or become frightened until end of your next turn.",

  // Githyanki (Mordenkainen's)
  "Githyanki Psionics": "You know the Mage Hand cantrip. At 3rd level, cast Jump once per long rest. At 5th level, cast Misty Step once per long rest.",
  "Martial Prodigy": "You have proficiency with light and medium armor and with shortswords, longswords, and greatswords.",
  "Astral Knowledge": "After a long rest, you gain proficiency in one skill of your choice until you finish your next long rest.",
  "Psychic Resilience": "You have resistance to psychic damage.",

  // Githzerai (Mordenkainen's)
  "Githzerai Psionics": "You know the Mage Hand cantrip. At 3rd level, cast Shield once per long rest. At 5th level, cast Detect Thoughts once per long rest.",

  // Eladrin (Mordenkainen's)
  "Fey Step": "As a bonus action, you can teleport up to 30 feet to an unoccupied space. Usable once per short or long rest. The effect depends on your current season.",

  // Shadar-kai (Mordenkainen's)
  "Blessing of the Raven Queen": "As a bonus action, teleport up to 30 feet. After teleporting, you gain resistance to all damage until the start of your next turn. Usable once per long rest.",
  "Necrotic Resistance": "You have resistance to necrotic damage.",

  // Deep Gnome (Mordenkainen's)
  "Superior Darkvision": "You can see in dim light within 120 feet as if it were bright light, and in darkness as if it were dim light.",
  "Stone Camouflage": "You have advantage on Dexterity (Stealth) checks to hide in rocky terrain.",
  "Gift of the Svirfneblin": "You can cast Nondetection on yourself at will without material components.",

  // Duergar (Mordenkainen's)
  "Duergar Magic": "At 3rd level, cast Enlarge/Reduce (enlarge only) on yourself once per long rest. At 5th level, cast Invisibility on yourself once per long rest.",
  "Psionic Fortitude": "You have advantage on saving throws against being charmed or stunned.",

  // Dhampir (Van Richten's)
  "Vampiric Bite": "Your fanged bite deals 1d4 + Constitution modifier piercing damage. You gain a benefit: bonus to next ability check or attack, or regain HP equal to the damage dealt.",
  "Spider Climb": "You have a climbing speed equal to your walking speed. You can climb difficult surfaces, including ceilings, without needing a check.",
  "Deathless Nature": "You don't need to breathe. You have advantage on death saving throws and on saves against disease.",

  // Hexblood (Van Richten's)
  "Eerie Token": "You can create a small token from your body. While it exists, you can use an action to see or hear through it. You can also deliver touch-range spells through it.",
  "Hex Magic": "You can cast Disguise Self and Hex once each per long rest without expending a spell slot.",
  "Magic Token": "You can harmlessly remove a small piece of your body (tooth, nail, lock of hair) to create a supernatural token for remote spying.",
  "Fey Creature Type": "Your creature type is fey rather than humanoid.",

  // Reborn (Van Richten's)
  "Knowledge from a Past Life": "When you make an ability check, you can add a d6 to the roll. You can use this a number of times equal to your proficiency bonus per long rest.",
  "Ancestral Legacy": "If you previously had a different race, you retain any climbing, flying, or swimming speed and two skill proficiencies from that race.",

  // Fairy (Witchlight)
  "Fairy Magic": "You know the Druidcraft cantrip. At 3rd level, cast Faerie Fire once per long rest. At 5th level, cast Enlarge/Reduce once per long rest.",

  // Harengon (Witchlight)
  "Hare-Trigger": "You add your proficiency bonus to initiative rolls.",
  "Leporine Senses": "You have proficiency in the Perception skill.",
  "Lucky Footwork": "When you fail a Dexterity saving throw, you can use your reaction to add a d4 to the result, potentially turning it into a success.",
  "Rabbit Hop": "As a bonus action, jump a number of feet equal to 5 × your proficiency bonus without provoking opportunity attacks.",

  // Owlin (Witchlight)
  "Silent Feathers": "You have proficiency in the Stealth skill.",

  // Astral Elf (Spelljammer)
  "Astral Fire": "You know one cantrip of your choice from Dancing Lights, Light, or Sacred Flame. Intelligence, Wisdom, or Charisma is your casting ability.",
  "Starlight Step": "As a bonus action, you can teleport up to 30 feet to an unoccupied space you can see. Proficiency bonus uses per long rest.",

  // Autognome (Spelljammer)
  "Armored Casing": "You are encased in thin metal or another durable material. While not wearing armor, your base AC is 13 + Dexterity modifier.",
  "Built for Success": "You can add a d4 to one attack roll, ability check, or saving throw. Proficiency bonus uses per long rest.",
  "Mechanical Nature": "You have resistance to poison damage and immunity to disease. You don't need to eat, drink, or breathe. Mending repairs you for 1d8 HP.",

  // Giff (Spelljammer)
  "Astral Spark": "Your attacks deal extra force damage equal to your proficiency bonus. This applies once per turn.",
  "Firearms Mastery": "You ignore the loading property of firearms and don't have disadvantage when firing in melee.",
  "Hippo Build": "You count as one size larger for determining carrying capacity and the weight you can push, drag, or lift.",

  // Hadozee (Spelljammer)
  "Dexterous Feet": "You can use your feet to manipulate objects, open doors, and hold items (but not wield weapons or shields).",
  "Glide": "When you fall, you can move horizontally 5 feet for every 1 foot you descend and take no falling damage.",
  "Hadozee Resilience": "When you take damage, you can use your reaction to reduce the damage by 1d6 + proficiency bonus.",

  // Plasmoid (Spelljammer)
  "Amorphous": "You can squeeze through spaces as narrow as 1 inch without squeezing.",
  "Natural Resilience": "You have resistance to acid and poison damage.",
  "Shape Self": "As an action, you can reshape your body to give yourself a head, limbs, or other features. You can also form a pseudopod up to 10 feet long.",

  // Thri-kreen (Spelljammer)
  "Chameleon Carapace": "Your shell changes color to match your surroundings, giving you advantage on Stealth checks to hide.",
  "Secondary Arms": "You have two smaller secondary arms that can manipulate objects, open doors, and hold items but cannot wield weapons or shields.",
  "Sleepless": "You do not require sleep and can remain fully conscious during a long rest, provided you do nothing more than light activity.",
  "Thri-kreen Telepathy": "You can communicate telepathically with any creature within 120 feet that you can see. The target doesn't need to share a language.",

  // Kender (Dragonlance)
  "Fearless": "You are immune to the frightened condition.",
  "Kender Aptitude": "You gain proficiency in one of the following skills: Insight, Investigation, Sleight of Hand, Stealth, or Survival.",
  "Taunt": "As a bonus action, you can taunt a creature within 60 feet. It must make a Wisdom save or have disadvantage on attacks against targets other than you until the start of your next turn.",
};
