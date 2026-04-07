export interface RaceNameData {
  firstNames: string[];
  surnames: string[];
  titles: string[];
}

export const raceNames: Record<string, RaceNameData> = {
  human: {
    firstNames: ["Alaric", "Brenna", "Cedric", "Dahlia", "Edmund", "Fiona", "Gareth", "Helena", "Ivan", "Joanna", "Kaelen", "Lyra", "Magnus", "Nadia", "Osric", "Petra", "Roland", "Seren", "Tobias", "Wren", "Adrienne", "Aldric", "Ambrose", "Anselm", "Astrid", "Beatrix", "Benedict", "Blanche", "Callum", "Cassia", "Conrad", "Cordelia", "Darian", "Dorian", "Edith", "Elara", "Evander", "Florence", "Frederick", "Gwendolyn", "Harold", "Ingrid", "Jasper", "Kateryn", "Leofric", "Lynnette", "Marcellus", "Mildred", "Nikolai", "Octavia", "Percival", "Rosalind", "Sigrid", "Sylvester", "Theron", "Ulric", "Verity", "Vivienne", "Wystan", "Ysabel"],
    surnames: ["Stoneheart", "Ashford", "Brightwood", "Crowley", "Dunmere", "Fairwind", "Greycloak", "Hawthorne", "Ironside", "Kingsley", "Lockwood", "Mercer", "Northcott", "Oakenshield", "Ravencrest", "Silverbrook", "Thornwall", "Whitmore"],
    titles: ["the Brave", "the Bold", "the Wanderer", "the Valiant", "the Unyielding", "the Just", "the Merciful", "the Relentless", "the Cunning", "the Steadfast", "the Lionhearted", "the Resolute"],
  },
  elf: {
    firstNames: ["Aelindra", "Thalion", "Caelynn", "Dareth", "Erevan", "Faelwen", "Galanodel", "Haelra", "Ielenia", "Kaelith", "Lirael", "Miriel", "Naevys", "Orinael", "Phaelara", "Quillathe", "Ryllara", "Sylvari", "Thaelar", "Vaelorn", "Aelithar", "Ainmire", "Aldanath", "Aramil", "Ardeth", "Celadon", "Daelindra", "Elaith", "Felosial", "Fenmarel", "Galinndan", "Hadarai", "Immeral", "Ivaelath", "Jelenneth", "Keyleth", "Liadon", "Lunariel", "Mythindra", "Naeris", "Nelabar", "Orianna", "Paelias", "Phaen", "Quarion", "Riardon", "Rilaeni", "Selanar", "Shaladel", "Silaqui", "Soveliss", "Tamnaeth", "Therindel", "Uladar", "Valmyr", "Xenith", "Yasilindra", "Zylvara", "Aerindel", "Caelar"],
    surnames: ["Moonwhisper", "Starweave", "Leafsong", "Dawnstrider", "Nightbreeze", "Silverleaf", "Galeheart", "Sunpetal", "Willowmere", "Brightstar", "Rainshadow", "Dewglimmer", "Thornblossom", "Mistwalker", "Sunsorrow", "Amberfall"],
    titles: ["the Eternal", "the Dawnbringer", "the Starlit", "the Graceful", "the Ageless", "the Fey-Touched", "the Moonborn", "the Lightweaver", "the Whisperwind", "the Verdant", "the Silvertongue", "the Dreamwatcher"],
  },
  dwarf: {
    firstNames: ["Thorin", "Bruna", "Dain", "Elda", "Fargrim", "Gurdis", "Harbek", "Ilda", "Kildrak", "Liftrasa", "Morgran", "Nora", "Orsik", "Riswynn", "Storn", "Tordek", "Ulfgar", "Vondal", "Whurbin", "Barendd", "Adrik", "Alberich", "Artin", "Audhild", "Bafur", "Baldur", "Beloril", "Benzan", "Bromm", "Dagnal", "Dolrak", "Dorthil", "Duggan", "Ebba", "Eskeri", "Falrik", "Finellen", "Gamil", "Ghorin", "Gimra", "Gorm", "Grobar", "Halmir", "Hlin", "Horgar", "Kathra", "Kerith", "Kettil", "Kolson", "Kristryd", "Kurak", "Lorrak", "Mardred", "Norin", "Nurvala", "Orla", "Oskar", "Rurik", "Torbera", "Valki"],
    surnames: ["Ironforge", "Stoneaxe", "Deepdelver", "Battlehammer", "Boulderback", "Coppervein", "Firebeard", "Goldpick", "Hammerstone", "Ironbrow", "Mithrilmantle", "Oakenshield", "Rockheart", "Steelgrip", "Thunderhelm", "Anvilthorn"],
    titles: ["the Unbreakable", "the Stoneborn", "the Hammerer", "the Ironclad", "the Anvil", "the Deepforged", "the Mountain's Heart", "the Unyielding", "the Grudgebearer", "the Fireforged", "the Shieldwall", "the Steadfast"],
  },
  halfling: {
    firstNames: ["Bramble", "Cora", "Dandy", "Eldon", "Fern", "Garret", "Hilary", "Idris", "Jillian", "Kithri", "Lavinia", "Merric", "Nedda", "Osborn", "Paela", "Roscoe", "Seraphina", "Tillo", "Verna", "Wellby", "Alton", "Andry", "Beau", "Bree", "Callie", "Corrin", "Curran", "Danika", "Derry", "Eloise", "Finn", "Florian", "Gillian", "Greta", "Hazel", "Ida", "Jasper", "Keelin", "Kipper", "Lily", "Linnet", "Lyle", "Milo", "Myra", "Oleander", "Orla", "Perry", "Pippin", "Rowan", "Ruby", "Sadie", "Sandy", "Tansy", "Tibault", "Ulla", "Waverly", "Wendell", "Willa", "Yolanda", "Zephyr"],
    surnames: ["Bramblewood", "Goodbarrel", "Underbough", "Tealeaf", "Thorngage", "Highhill", "Greenbottle", "Brushgather", "Leagallow", "Tosscobble", "Hilltopple", "Stoutbridge", "Appleblossom", "Copperkettle", "Mossfoot", "Sweetwater"],
    titles: ["the Lucky", "the Quick", "the Cheerful", "the Nimble", "the Merry", "the Lighthearted", "the Gentle", "the Clever", "the Kind", "the Stouthearted", "the Adventurous", "the Plucky"],
  },
  "half-elf": {
    firstNames: ["Arannis", "Brenna", "Caelynn", "Darian", "Elena", "Faelar", "Galinndan", "Helena", "Ielenia", "Kaelen", "Lirael", "Milo", "Naevys", "Osric", "Petra", "Rolen", "Seren", "Theron", "Vaelorn", "Wren", "Aldric", "Aliana", "Amara", "Andara", "Arella", "Arien", "Belindra", "Caius", "Cassia", "Celindra", "Corvain", "Daela", "Dorian", "Elara", "Elindra", "Evander", "Faela", "Fenwyn", "Gareth", "Hadriel", "Jadis", "Jareth", "Kendra", "Laena", "Lirith", "Lorath", "Lyara", "Maeris", "Marien", "Nalera", "Nathiel", "Orren", "Raelin", "Rhowyn", "Saria", "Thariel", "Vaela", "Zaelar", "Cindrel", "Myrath"],
    surnames: ["Brightwood", "Moonwhisper", "Ashford", "Starweave", "Thornwall", "Silverleaf", "Greycloak", "Dawnstrider", "Hawthorne", "Nightbreeze", "Fairwind", "Sunpetal", "Lockwood", "Galeheart", "Ravencrest", "Amberfall"],
    titles: ["the Twice-Born", "the Bridge", "the Wanderer", "the Harmonious", "the Dusk-Touched", "the Boundless", "the Diplomatic", "the Graceful", "the Worldwise", "the Starlit", "the Steadfast", "the Dreamer"],
  },
  "half-orc": {
    firstNames: ["Brug", "Dench", "Feng", "Gell", "Henk", "Imsh", "Keth", "Lhurk", "Mhurren", "Oshgar", "Brenna", "Droga", "Ekta", "Gareth", "Jalara", "Kansif", "Lagazi", "Myev", "Neega", "Ovak", "Agra", "Ahk", "Arizima", "Baggi", "Barka", "Ceth", "Drak", "Durga", "Enkh", "Frek", "Grull", "Gulka", "Harga", "Hurk", "Ilska", "Jarka", "Jhank", "Karg", "Krull", "Lurka", "Mosk", "Mung", "Narga", "Norka", "Prax", "Rarka", "Reth", "Skrull", "Taharga", "Thaka", "Trak", "Tura", "Ulg", "Urka", "Varga", "Vorg", "Yatka", "Zeth", "Ghola", "Ruxar"],
    surnames: ["Skullcrusher", "Ironhide", "Ashford", "Bloodfist", "Grimjaw", "Stormrage", "Bonecleaver", "Thornwall", "Warborn", "Dreadmaw", "Ravencrest", "Steelgrip", "Flamewalker", "Earthbreaker", "Shadowmane", "Stonefist"],
    titles: ["the Fierce", "the Unbroken", "the Relentless", "the Savage", "the Mighty", "the War-Touched", "the Thundering", "the Resilient", "the Bold", "the Ironwilled", "the Raging", "the Enduring"],
  },
  gnome: {
    firstNames: ["Alston", "Brocc", "Callabon", "Dimble", "Ellywick", "Frug", "Gimble", "Habberdash", "Ivi", "Jebeddo", "Kellen", "Lilbet", "Murnig", "Namfoodle", "Orryn", "Pog", "Quillam", "Roondar", "Sindri", "Tink", "Abble", "Baeren", "Beldar", "Bimpnottin", "Breena", "Calib", "Carlin", "Dabbledob", "Delebean", "Dobble", "Ebble", "Ellyjobell", "Filibert", "Fonkin", "Gerbo", "Glimwick", "Gunder", "Gurick", "Igden", "Ixtli", "Jankin", "Jirik", "Jubble", "Libby", "Lilli", "Lorilla", "Mardnab", "Meece", "Miggry", "Mozelle", "Nackle", "Nelle", "Orla", "Pock", "Seebo", "Shebbidek", "Shimri", "Warryn", "Zook", "Zundrig"],
    surnames: ["Beren", "Daergel", "Fizzlebang", "Garrick", "Nackle", "Scheppen", "Turen", "Sparkgear", "Cogsworth", "Glimwick", "Riddletop", "Wobblecog", "Tinkerstone", "Bramblewit", "Mizzleshaft", "Clockworth"],
    titles: ["the Curious", "the Inventive", "the Tinkerer", "the Riddler", "the Sparkling", "the Bright", "the Whimsical", "the Clever", "the Gadgeteer", "the Wonderstruck", "the Mirthful", "the Keen"],
  },
  tiefling: {
    firstNames: ["Akta", "Baalzephon", "Criella", "Damakos", "Ekemon", "Forgael", "Gremory", "Hadriel", "Iados", "Kairon", "Lerissa", "Makaria", "Nemeia", "Orianna", "Pelaios", "Rieta", "Skamos", "Therai", "Ura", "Zariel", "Akmenos", "Amnon", "Barakas", "Carrion", "Cyndara", "Decarabia", "Despina", "Drago", "Eris", "Executus", "Feared", "Flamel", "Grief", "Harbinger", "Heresy", "Horror", "Infamy", "Invictus", "Kastrel", "Khalith", "Lixue", "Malachar", "Mordai", "Morthos", "Odosi", "Phelaia", "Pyros", "Roven", "Seluvis", "Shade", "Sicarius", "Sinfire", "Sorrow", "Tenosh", "Torment", "Vex", "Wrath", "Xenith", "Zira", "Zovir"],
    surnames: ["Ashblood", "Duskmantle", "Emberheart", "Fellhorn", "Gloomweaver", "Hellbinder", "Infernalis", "Nightveil", "Shadowflame", "Soulbrand", "Thornfire", "Voidwalker", "Wraithborn", "Grimhollow", "Cinderfall", "Dreadspire"],
    titles: ["the Forsaken", "the Hellborn", "the Ember-Eyed", "the Shadowmarked", "the Firebrand", "the Outcast", "the Unbound", "the Twilight", "the Ashwalker", "the Infernal", "the Demonsworn", "the Redeemed"],
  },
  dragonborn: {
    firstNames: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn", "Daar", "Kava", "Surina", "Akra", "Aukan", "Biri", "Clyssith", "Dazzaran", "Dhurrath", "Draako", "Egrath", "Farideh", "Garurt", "Ghiresh", "Harann", "Havilar", "Idrath", "Irhtos", "Jhessail", "Karadjur", "Khirsah", "Korinn", "Kruthik", "Lashaar", "Madarath", "Mardilra", "Miraan", "Mishann", "Nadarr", "Nala", "Perra", "Raiann", "Rashara", "Saphara", "Sashara", "Tasra", "Thava", "Uadjit", "Vethka", "Westruun", "Yariel", "Zirithian", "Zoraan"],
    surnames: ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkmolik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth"],
    titles: ["the Dragonhearted", "the Scaleborn", "the Flamecaller", "the Wyrm's Heir", "the Thunder-Scaled", "the Claw of Justice", "the Breath of Fire", "the Draconic", "the Honorbound", "the Oathkeeper", "the Stormscale", "the Emberwing"],
  },
  aasimar: {
    firstNames: ["Auriel", "Beleth", "Celestine", "Daelan", "Eshara", "Fael", "Gavriel", "Halara", "Iolanthe", "Kethra", "Lumiel", "Mathiel", "Nophiel", "Oriael", "Phanuel", "Raziel", "Serapha", "Thariel", "Urael", "Zarael", "Adaeze", "Amalthea", "Aniel", "Arael", "Archon", "Ardiel", "Astraea", "Auroras", "Azrael", "Caelestis", "Celeste", "Ciel", "Coriel", "Darathriel", "Dawnsong", "Devael", "Diael", "Eliel", "Emriel", "Eraiel", "Ezekiel", "Gloriel", "Grace", "Heliael", "Hosiel", "Isael", "Israfel", "Jael", "Jeraphiel", "Karael", "Lael", "Liriel", "Mirel", "Moriel", "Muriel", "Nael", "Oraiel", "Pariel", "Seraphim", "Zaphiel"],
    surnames: ["Dawnhallow", "Lightbringer", "Celesthorn", "Goldenwing", "Radiantstar", "Sunforge", "Glorymane", "Divineheart", "Brightshield", "Haloborn", "Heavenward", "Starfallen", "Aethermist", "Gracethorn", "Luminalis", "Hallowed"],
    titles: ["the Radiant", "the Divine", "the Hallowed", "the Celestial", "the Graced", "the Luminous", "the Heaven-Sent", "the Blessed", "the Sanctified", "the Angelic", "the Exalted", "the Lightbearer"],
  },
  goliath: {
    firstNames: ["Aukan", "Eglath", "Gae-Al", "Gauthak", "Ilikan", "Kavaki", "Keothi", "Kuori", "Lo-Kag", "Manneo", "Maveith", "Nalla", "Orilo", "Paavu", "Thotham", "Uthal", "Vaunea", "Vimak", "Pethani", "Zeraki"],
    surnames: ["Peakclimber", "Stormborn", "Thunderstep", "Skywatcher", "Cliffbreaker", "Mountainheart", "Galewalker", "Bouldertoss", "Highpeak", "Cragborn", "Windstrider", "Frostpeak", "Ironpeak", "Stonecaller", "Skyreach", "Cloudborn"],
    titles: ["the Towering", "the Mountain", "the Unshaken", "the Summit", "the Giantkin", "the Stonefist", "the Skyborn", "the Peak Walker", "the Mighty", "the Titan", "the Cragborn", "the Unyielding"],
  },
  orc: {
    firstNames: ["Baggi", "Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Lhurk", "Mhurren", "Oshgar", "Ront", "Shump", "Thurak", "Urzul", "Volen", "Yevelda", "Zuggtmoy", "Drelg"],
    surnames: ["Skullsplitter", "Bloodaxe", "Ironjaw", "Bonecrusher", "Warcry", "Doomfist", "Goretusk", "Beastslayer", "Ragefang", "Grimtooth", "Darkblade", "Thundermaw", "Warband", "Deathgrip", "Fleshripper", "Steelclaw"],
    titles: ["the Destroyer", "the Bloodied", "the Warchief", "the Savage", "the Brutal", "the Fearless", "the Ravager", "the Unstoppable", "the Raging", "the Berserker", "the Slaughterer", "the Merciless"],
  },
  tabaxi: {
    firstNames: ["Cloud", "Dusk", "Ember", "Flicker", "Frost", "Haze", "Ivy", "Jade", "Kindle", "Lark", "Mist", "Nimble", "Onyx", "Pounce", "Quill", "Rain", "Shade", "Storm", "Thorn", "Whisper"],
    surnames: ["Swiftclaw", "Nightprowl", "Moonshadow", "Brightfur", "Windchaser", "Duskmane", "Silentpaw", "Stormtail", "Embereye", "Thornwhisker", "Starleap", "Sunspot", "Riverdance", "Mistpelt", "Shadowstalk", "Firemane"],
    titles: ["the Swift", "the Curious", "the Prowler", "the Shadow", "the Windrunner", "the Silent", "the Graceful", "the Far-Traveler", "the Sharp-Eyed", "the Night Hunter", "the Wanderer", "the Mystic"],
  },
  firbolg: {
    firstNames: ["Adran", "Briar", "Cirrus", "Dewdrop", "Elm", "Fern", "Gale", "Heath", "Ivy", "Juniper", "Kindling", "Linden", "Moss", "Nettle", "Oakley", "Petal", "Quercus", "Reed", "Sage", "Thistle"],
    surnames: ["Deeproot", "Mossbeard", "Willowgrove", "Thornbloom", "Oakmantle", "Fernheart", "Stonebrook", "Wildmeadow", "Leafshade", "Barkskin", "Misthollow", "Greenvale", "Bramblewood", "Sungrove", "Earthsong", "Duskbloom"],
    titles: ["the Gentle Giant", "the Grove Keeper", "the Verdant", "the Nature's Voice", "the Earthbound", "the Mossheart", "the Forest Walker", "the Treespeaker", "the Wildborn", "the Rootwarden", "the Peaceful", "the Evergreen"],
  },
  kenku: {
    firstNames: ["Clatter", "Whisper", "Creak", "Rustle", "Clang", "Snap", "Hum", "Buzz", "Click", "Splash", "Thud", "Screech", "Murmur", "Tinkle", "Rattle", "Chirp", "Echo", "Drip", "Whoosh", "Scratch"],
    surnames: ["Shadowmimick", "Darkfeather", "Crowcall", "Nightsound", "Dustwing", "Tinecho", "Blackbeak", "Hollowcry", "Guttercaw", "Rooftop", "Alleywhisper", "Chimneydust", "Cobblestep", "Windowtap", "Eaveswatcher", "Bellchime"],
    titles: ["the Mimic", "the Echo", "the Silent", "the Listener", "the Shadow", "the Soundless", "the Whisperer", "the Watcher", "the Cunning", "the Flightless", "the Clever", "the Unseen"],
  },
  goblin: {
    firstNames: ["Blix", "Crink", "Droop", "Fizzgig", "Gritz", "Hobnob", "Jinx", "Kragg", "Lunk", "Mizzik", "Nix", "Pog", "Quig", "Razzle", "Sniv", "Trix", "Urg", "Vex", "Wort", "Zink"],
    surnames: ["Sharpstick", "Mudsplat", "Rattletrap", "Bonegnaw", "Skullpoke", "Firebelly", "Ironbite", "Sneakfoot", "Quickfingers", "Trapjaw", "Geargrind", "Spiderlick", "Toecutter", "Nailbiter", "Weaselgut", "Roachback"],
    titles: ["the Sneaky", "the Crafty", "the Quick", "the Wily", "the Trickster", "the Cunning", "the Sly", "the Resourceful", "the Scrappy", "the Fierce", "the Unstoppable", "the Devious"],
  },
  bugbear: {
    firstNames: ["Brug", "Crush", "Drusk", "Fang", "Graz", "Hruk", "Klarg", "Lorg", "Mosk", "Narg", "Prug", "Rusk", "Snarl", "Thok", "Usk", "Vrak", "Wruk", "Yark", "Zurk", "Grik"],
    surnames: ["Shadowfang", "Bonecruncher", "Nightstalker", "Ambusher", "Dreadclaw", "Steelarm", "Skullmask", "Darkpelt", "Thornhide", "Beartrap", "Silentcrush", "Goregrip", "Ironpaw", "Lurkhide", "Bramblethorn", "Deadwatch"],
    titles: ["the Lurker", "the Ambusher", "the Silent", "the Brutish", "the Fearsome", "the Shadow", "the Crusher", "the Stalker", "the Hulking", "the Dread", "the Patient", "the Nightborn"],
  },
  lizardfolk: {
    firstNames: ["Arashk", "Beshk", "Cresh", "Drusk", "Esssk", "Faask", "Grith", "Hisssk", "Irsk", "Jhask", "Krash", "Lirsh", "Mirsk", "Neshk", "Othok", "Prash", "Qirsk", "Rashk", "Sseth", "Thrisk"],
    surnames: ["Sharptooth", "Marshwalker", "Scalebright", "Swampstalker", "Ripjaw", "Coldblood", "Sunbask", "Mudscale", "Riverfang", "Deeptide", "Bogstrider", "Thornscale", "Ironjaw", "Mistswim", "Reedcutter", "Shellback"],
    titles: ["the Cunning", "the Cold", "the Efficient", "the Survivor", "the Hunter", "the Pragmatic", "the Scaleborn", "the Swamp Lord", "the Patient", "the Predator", "the Watchful", "the Unfeeling"],
  },
  kobold: {
    firstNames: ["Meepo", "Sniv", "Krix", "Drak", "Erp", "Gix", "Hark", "Ipk", "Jix", "Kip", "Mik", "Nak", "Pik", "Rix", "Sik", "Tik", "Urp", "Vix", "Wik", "Zix"],
    surnames: ["Trapmaster", "Scalespike", "Gemhoarder", "Darkdigger", "Tunnelscout", "Shinyfinder", "Dragonkin", "Pitdelver", "Oreseeker", "Torchsnuffer", "Copperbite", "Goldnose", "Spikejaw", "Sharpclaw", "Tinbender", "Rockchewer"],
    titles: ["the Trapmaker", "the Cunning", "the Bold", "the Scaly", "the Loyal", "the Tunnel King", "the Dragon-Blessed", "the Digger", "the Inventive", "the Fierce", "the Tiny Terror", "the Mighty"],
  },
  "yuan-ti-pureblood": {
    firstNames: ["Asutali", "Dehstali", "Eshtahi", "Hassith", "Isstoth", "Kethath", "Litashi", "Meshtil", "Nesthah", "Ossith", "Phistal", "Quistal", "Reshtil", "Sisseth", "Thessil", "Usthali", "Vishtal", "Xistal", "Yesthil", "Zisthah"],
    surnames: ["Serpentcoil", "Venomfang", "Nightscale", "Shadowserpent", "Duskcoil", "Ashvenom", "Silentfang", "Darktongue", "Emberviper", "Coldscale", "Soulcoil", "Dreamvenom", "Mindserpent", "Fleshweaver", "Dreadscale", "Boneslither"],
    titles: ["the Serpentine", "the Cold-Blooded", "the Deceiver", "the Venomous", "the Whisperer", "the Scaled", "the Insidious", "the Mindful", "the Patient", "the Pureblooded", "the Coiled", "the Malevolent"],
  },
  tortle: {
    firstNames: ["Baka", "Damu", "Garu", "Halu", "Jappa", "Krull", "Lamu", "Maka", "Namu", "Palu", "Quara", "Ramu", "Samu", "Tamu", "Ulu", "Wamu", "Xamu", "Yamu", "Zamu", "Bolu"],
    surnames: ["Shellheart", "Tidecaller", "Sandstrider", "Coralback", "Driftwood", "Stormshell", "Wavecrest", "Deepcurrent", "Reefwalker", "Saltwind", "Pearlshell", "Kelptide", "Shoalwatcher", "Harborstone", "Anchorback", "Seasage"],
    titles: ["the Steadfast", "the Patient", "the Wanderer", "the Sheltered", "the Wise", "the Enduring", "the Ancient", "the Shore Walker", "the Tide-Touched", "the Calm", "the Shielded", "the Gentle"],
  },
  aarakocra: {
    firstNames: ["Aera", "Breeze", "Cirrus", "Deek", "Errk", "Falk", "Gale", "Herc", "Irk", "Kass", "Leer", "Mirr", "Naill", "Orra", "Pik", "Quill", "Riss", "Sass", "Trill", "Zeed"],
    surnames: ["Skysoar", "Windcrest", "Stormwing", "Cloudpiercer", "Galefeather", "Sunglider", "Highperch", "Swiftdive", "Starflight", "Thunderwing", "Dawnglider", "Mistfeather", "Peakdancer", "Cycloneclaw", "Airheart", "Skydancer"],
    titles: ["the Windborne", "the Skyward", "the Cloud Dancer", "the Soaring", "the Free", "the Stormrider", "the Feathered", "the High Flier", "the Wind Caller", "the Swift", "the Talon", "the Aerial"],
  },
  genasi: {
    firstNames: ["Ashara", "Blaze", "Cinder", "Deluge", "Eddy", "Flint", "Gust", "Haze", "Ignis", "Jetstream", "Kova", "Lava", "Mistral", "Nimbus", "Obsidian", "Pyra", "Quake", "Riptide", "Silt", "Tempest"],
    surnames: ["Embervein", "Stormblood", "Tidecaller", "Stonemark", "Flameheart", "Galespire", "Wavecrest", "Dustborn", "Thunderspark", "Ashborn", "Frostmelt", "Earthpulse", "Windshear", "Lavacrest", "Mistveil", "Crystalflow"],
    titles: ["the Elemental", "the Primordial", "the Stormborn", "the Flamekin", "the Earthen", "the Tideshaper", "the Windswept", "the Embered", "the Untamed", "the Tempestuous", "the Grounded", "the Surging"],
  },
};
