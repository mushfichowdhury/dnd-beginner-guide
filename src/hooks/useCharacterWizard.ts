"use client";

import { useState } from "react";
import { Edition, Step, Race, DndClass, Subclass, RaceVariant, RaceSubVariant } from "@/types";
import { races } from "@/data/races";
import { classes } from "@/data/classes";
import { subclasses } from "@/data/subclasses";
import { classRankings, subclassRankings, Tier } from "@/data/rankings";

export type SortMode = "default" | "reddit";

const tierOrder: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3 };

export const stepOrder: Step[] = ["race", "class", "subclass", "summary"];

export function useCharacterWizard() {
  const [edition, setEdition] = useState<Edition>("5e");
  const [currentStep, setCurrentStep] = useState<Step>("race");
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [selectedClass, setSelectedClass] = useState<DndClass | null>(null);
  const [selectedSubclass, setSelectedSubclass] = useState<Subclass | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<RaceVariant | null>(null);
  const [selectedSubVariant, setSelectedSubVariant] = useState<RaceSubVariant | null>(null);
  const [classSortMode, setClassSortMode] = useState<SortMode>("default");
  const [subclassSortMode, setSubclassSortMode] = useState<SortMode>("default");

  // Modal states
  const [detailRace, setDetailRace] = useState<Race | null>(null);
  const [detailSubclass, setDetailSubclass] = useState<Subclass | null>(null);
  const [showVariantPicker, setShowVariantPicker] = useState(false);
  const [pendingVariant, setPendingVariant] = useState<RaceVariant | null>(null);
  const [pendingSubVariant, setPendingSubVariant] = useState<RaceSubVariant | null>(null);
  const [subVariantStep, setSubVariantStep] = useState(false);

  const raceLabel = edition === "5.5e" ? "Species" : "Race";
  const currentIndex = stepOrder.indexOf(currentStep);

  const handleEditionChange = (e: Edition) => {
    setEdition(e);
    setSelectedRace(null);
    setSelectedVariant(null);
    setSelectedSubVariant(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
  };

  const handleRaceSelect = (race: Race, variant?: RaceVariant | null, subVariant?: RaceSubVariant | null) => {
    setSelectedRace(race);
    setSelectedVariant(variant ?? null);
    setSelectedSubVariant(subVariant ?? null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("class");
  };

  const handleClassSelect = (cls: DndClass) => {
    setSelectedClass(cls);
    setSelectedSubclass(null);
    setCurrentStep("subclass");
  };

  const handleSubclassSelect = (sub: Subclass) => {
    setSelectedSubclass(sub);
    setCurrentStep("summary");
  };

  const handleStartOver = () => {
    setSelectedRace(null);
    setSelectedVariant(null);
    setSelectedSubVariant(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
  };

  const handleEditStep = (step: Step) => {
    if (step === "race") {
      setSelectedRace(null);
      setSelectedVariant(null);
      setSelectedSubVariant(null);
      setSelectedClass(null);
      setSelectedSubclass(null);
    } else if (step === "class") {
      setSelectedClass(null);
      setSelectedSubclass(null);
    } else if (step === "subclass") {
      setSelectedSubclass(null);
    }
    setCurrentStep(step);
  };

  const raceHasVariants = (race: Race) => {
    if (!race.variants || race.variants.length === 0) return false;
    if (race.variantEditions && !race.variantEditions.includes(edition)) return false;
    return true;
  };

  const filteredRaces = races.filter((r) => r.editions.includes(edition));
  const filteredSubclasses = selectedClass
    ? subclasses.filter((s) => s.classId === selectedClass.id)
    : [];

  const sortedClasses = classSortMode === "reddit"
    ? [...classes].sort((a, b) => tierOrder[classRankings[a.id] ?? "C"] - tierOrder[classRankings[b.id] ?? "C"])
    : classes;

  const sortedSubclasses = subclassSortMode === "reddit"
    ? [...filteredSubclasses].sort((a, b) => tierOrder[subclassRankings[a.id] ?? "C"] - tierOrder[subclassRankings[b.id] ?? "C"])
    : filteredSubclasses;

  return {
    // State
    edition,
    currentStep,
    selectedRace,
    selectedClass,
    selectedSubclass,
    selectedVariant,
    selectedSubVariant,
    classSortMode,
    subclassSortMode,
    detailRace,
    detailSubclass,
    showVariantPicker,
    pendingVariant,
    pendingSubVariant,
    subVariantStep,

    // Setters
    setClassSortMode,
    setSubclassSortMode,
    setDetailRace,
    setDetailSubclass,
    setShowVariantPicker,
    setPendingVariant,
    setPendingSubVariant,
    setSubVariantStep,

    // Computed
    raceLabel,
    currentIndex,
    filteredRaces,
    filteredSubclasses,
    sortedClasses,
    sortedSubclasses,

    // Handlers
    handleEditionChange,
    handleRaceSelect,
    handleClassSelect,
    handleSubclassSelect,
    handleStartOver,
    handleEditStep,
    raceHasVariants,
  };
}

export type CharacterWizardReturn = ReturnType<typeof useCharacterWizard>;
