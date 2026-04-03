export type Edition = "5e" | "5.5e";
export type Source = "PHB" | "Tasha's Cauldron" | "Xanathar's Guide" | "Volo's Guide" | "Mordenkainen's";

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
}

export interface DndClass {
  id: string;
  name: string;
  synopsis: string;
  hint: string;
  hitDie: string;
  primaryAbility: string;
  role: string;
  source: Source;
}

export interface Subclass {
  id: string;
  classId: string;
  name: string;
  synopsis: string;
  hint: string;
  source: Source;
}

export type Step = "race" | "class" | "subclass" | "summary";

export interface CharacterSelections {
  edition: Edition;
  race: Race | null;
  dndClass: DndClass | null;
  subclass: Subclass | null;
}
