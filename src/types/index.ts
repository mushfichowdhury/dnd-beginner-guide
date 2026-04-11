export type Edition = "5e" | "5.5e";
export type Source =
  | "PHB"
  | "Tasha's Cauldron"
  | "Xanathar's Guide"
  | "Volo's Guide"
  | "Mordenkainen's"
  | "Explorer's Guide"
  | "Eberron"
  | "Ravnica"
  | "Theros"
  | "Sword Coast"
  | "Van Richten's"
  | "Fizban's"
  | "Spelljammer"
  | "Dragonlance"
  | "Witchlight"
  | "Critical Role"
  | "MCDM"
  | "Kobold Press"
  | "Obojima";

export interface VariantSpell {
  level: number;
  name: string;
  note?: string;
}

export interface RaceSubVariant {
  id: string;
  name: string;
  description: string;
  damageType?: string;
}

export interface RaceVariant {
  id: string;
  name: string;
  description: string;
  spells?: VariantSpell[];
  mechanicalSummary?: string;
  subVariants?: RaceSubVariant[];
}

export interface Race {
  id: string;
  name: string;
  synopsis: string;
  hint: string;
  abilityBonuses: string;
  traits: string[];
  editions: Edition[];
  changes5_5e?: string;
  source: Source;
  variants?: RaceVariant[];
  variantEditions?: Edition[];
}

export type HealthTier = "High" | "Above Average" | "Average" | "Low";

export interface ClassProficiencies {
  armor: string[];
  weapons: string[];
  savingThrows: string[];
  skills: { choose: number; from: string[] };
}

export interface DndClass {
  id: string;
  name: string;
  synopsis: string;
  hint: string;
  hitDie: string;
  healthTier: HealthTier;
  primaryAbility: string;
  role: string;
  proficiencies: ClassProficiencies;
  source: Source;
}

export interface SubclassFeature {
  level: number;
  name: string;
  description: string;
}

export interface Subclass {
  id: string;
  classId: string;
  name: string;
  synopsis: string;
  hint: string;
  source: Source;
  features?: SubclassFeature[];
}

export type Step = "race" | "class" | "subclass" | "summary";

export interface CharacterSelections {
  edition: Edition;
  race: Race | null;
  dndClass: DndClass | null;
  subclass: Subclass | null;
}
