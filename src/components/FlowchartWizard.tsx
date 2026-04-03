"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edition, Step, Race, DndClass, Subclass, CharacterSelections } from "@/types";
import { races } from "@/data/races";
import { classes } from "@/data/classes";
import { subclasses } from "@/data/subclasses";
import EditionToggle from "./EditionToggle";
import StepIndicator from "./StepIndicator";
import CardGrid from "./CardGrid";
import SelectionCard from "./SelectionCard";
import SelectionSidebar from "./SelectionSidebar";
import SourceBadge from "./SourceBadge";
import FlowArrow from "./FlowArrow";

const stepOrder: Step[] = ["race", "class", "subclass", "summary"];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const summaryCardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

export default function FlowchartWizard() {
  const [edition, setEdition] = useState<Edition>("5e");
  const [currentStep, setCurrentStep] = useState<Step>("race");
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [selectedClass, setSelectedClass] = useState<DndClass | null>(null);
  const [selectedSubclass, setSelectedSubclass] = useState<Subclass | null>(null);
  const [direction, setDirection] = useState(1);

  const raceLabel = edition === "5.5e" ? "Species" : "Race";

  const selections: CharacterSelections = {
    edition,
    race: selectedRace,
    dndClass: selectedClass,
    subclass: selectedSubclass,
  };

  const goToStep = useCallback(
    (step: Step) => {
      const currentIndex = stepOrder.indexOf(currentStep);
      const nextIndex = stepOrder.indexOf(step);
      setDirection(nextIndex > currentIndex ? 1 : -1);

      if (nextIndex <= 0) {
        setSelectedRace(null);
        setSelectedClass(null);
        setSelectedSubclass(null);
      } else if (nextIndex <= 1) {
        setSelectedClass(null);
        setSelectedSubclass(null);
      } else if (nextIndex <= 2) {
        setSelectedSubclass(null);
      }

      setCurrentStep(step);
    },
    [currentStep]
  );

  const handleEditionChange = (e: Edition) => {
    setEdition(e);
    setSelectedRace(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
  };

  const handleRaceSelect = (race: Race) => {
    setSelectedRace(race);
    setDirection(1);
    setCurrentStep("class");
  };

  const handleClassSelect = (cls: DndClass) => {
    setSelectedClass(cls);
    setSelectedSubclass(null);
    setDirection(1);
    setCurrentStep("subclass");
  };

  const handleSubclassSelect = (sub: Subclass) => {
    setSelectedSubclass(sub);
    setDirection(1);
    setCurrentStep("summary");
  };

  const handleStartOver = () => {
    setDirection(-1);
    setSelectedRace(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
  };

  const handleBack = () => {
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      goToStep(stepOrder[currentIndex - 1]);
    }
  };

  const handleSidebarClick = (step: "race" | "class" | "subclass") => {
    goToStep(step);
  };

  const filteredRaces = races.filter((r) => r.editions.includes(edition));
  const filteredSubclasses = selectedClass
    ? subclasses.filter((s) => s.classId === selectedClass.id)
    : [];

  return (
    <div>
      <StepIndicator
        currentStep={currentStep}
        selections={selections}
        onStepClick={goToStep}
        raceLabel={raceLabel}
      />

      <div className="flex gap-6">
        {/* Main content */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {currentStep === "race" && (
                <div>
                  <EditionToggle edition={edition} onChange={handleEditionChange} />
                  <h2 className="mb-2 text-2xl font-bold text-gray-100 font-heading">
                    Choose Your {raceLabel}
                  </h2>
                  <p className="mb-6 text-gray-400">
                    Your {raceLabel.toLowerCase()} determines your innate abilities, traits, and appearance.
                    {edition === "5.5e" && (
                      <span className="ml-1 text-amber-400/70">
                        In 5.5e, ability scores are tied to your background, not species.
                      </span>
                    )}
                  </p>
                  <CardGrid>
                    {filteredRaces.map((race) => (
                      <SelectionCard
                        key={race.id}
                        title={race.name}
                        synopsis={race.synopsis}
                        hint={race.hint}
                        source={race.source}
                        selected={selectedRace?.id === race.id}
                        onClick={() => handleRaceSelect(race)}
                        tags={race.traits}
                        extraNote={edition === "5.5e" ? race.changes5_5e : undefined}
                      />
                    ))}
                  </CardGrid>
                </div>
              )}

              {currentStep === "class" && (
                <div>
                  <BackButton onClick={handleBack} />
                  <h2 className="mb-2 text-2xl font-bold text-gray-100 font-heading">
                    Choose Your Class
                  </h2>
                  <p className="mb-6 text-gray-400">
                    Your class defines your abilities, playstyle, and role in the party.
                  </p>
                  <CardGrid>
                    {classes.map((cls) => (
                      <SelectionCard
                        key={cls.id}
                        title={cls.name}
                        synopsis={cls.synopsis}
                        hint={cls.hint}
                        source={cls.source}
                        selected={selectedClass?.id === cls.id}
                        onClick={() => handleClassSelect(cls)}
                        tags={[cls.hitDie, cls.role]}
                      />
                    ))}
                  </CardGrid>
                </div>
              )}

              {currentStep === "subclass" && (
                <div>
                  <BackButton onClick={handleBack} />
                  <h2 className="mb-2 text-2xl font-bold text-gray-100 font-heading">
                    Choose Your Subclass
                  </h2>
                  <p className="mb-6 text-gray-400">
                    Your subclass specializes your{" "}
                    <span className="font-semibold text-amber-400">
                      {selectedClass?.name ?? "class"}
                    </span>{" "}
                    with unique abilities and flavor.
                  </p>
                  <CardGrid>
                    {filteredSubclasses.map((sub) => (
                      <SelectionCard
                        key={sub.id}
                        title={sub.name}
                        synopsis={sub.synopsis}
                        hint={sub.hint}
                        source={sub.source}
                        selected={selectedSubclass?.id === sub.id}
                        onClick={() => handleSubclassSelect(sub)}
                      />
                    ))}
                  </CardGrid>
                </div>
              )}

              {currentStep === "summary" && (
                <div>
                  <BackButton onClick={handleBack} />
                  <h2 className="mb-6 text-2xl font-bold text-gray-100 font-heading">
                    Your Character
                  </h2>

                  <motion.div
                    className="space-y-2"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.2 } },
                    }}
                  >
                    {/* Edition */}
                    <motion.div
                      variants={summaryCardVariants}
                      transition={{ duration: 0.4 }}
                      className="rounded-lg border border-gray-700 bg-gray-900 p-5"
                    >
                      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Edition
                      </h3>
                      <p className="text-lg font-bold text-amber-400">
                        {edition === "5e" ? "5th Edition (2014)" : "5.5e Revised (2024)"}
                      </p>
                    </motion.div>

                    <FlowArrow />

                    {/* Race */}
                    {selectedRace && (
                      <>
                        <motion.div
                          variants={summaryCardVariants}
                          transition={{ duration: 0.4 }}
                          className="rounded-lg border border-gray-700 bg-gray-900 p-5"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                              {raceLabel}
                            </h3>
                            <SourceBadge source={selectedRace.source} />
                          </div>
                          <p className="text-xl font-bold text-amber-400">
                            {selectedRace.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            {selectedRace.synopsis}
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-2">
                            <div>
                              <span className="text-[10px] font-semibold uppercase text-gray-500">
                                Ability Bonuses
                              </span>
                              <p className="text-sm text-gray-200">
                                {selectedRace.abilityBonuses}
                              </p>
                            </div>
                            <div>
                              <span className="text-[10px] font-semibold uppercase text-gray-500">
                                Traits
                              </span>
                              <div className="mt-1 flex flex-wrap gap-1">
                                {selectedRace.traits.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          {edition === "5.5e" && selectedRace.changes5_5e && (
                            <p className="mt-3 rounded bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
                              5.5e Change: {selectedRace.changes5_5e}
                            </p>
                          )}
                        </motion.div>

                        <FlowArrow />
                      </>
                    )}

                    {/* Class */}
                    {selectedClass && (
                      <>
                        <motion.div
                          variants={summaryCardVariants}
                          transition={{ duration: 0.4 }}
                          className="rounded-lg border border-gray-700 bg-gray-900 p-5"
                        >
                          <div className="mb-2 flex items-center justify-between">
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                              Class
                            </h3>
                            <SourceBadge source={selectedClass.source} />
                          </div>
                          <p className="text-xl font-bold text-amber-400">
                            {selectedClass.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-300">
                            {selectedClass.synopsis}
                          </p>
                          <div className="mt-3 grid gap-2 sm:grid-cols-3">
                            <div>
                              <span className="text-[10px] font-semibold uppercase text-gray-500">
                                Hit Die
                              </span>
                              <p className="text-sm text-gray-200">
                                {selectedClass.hitDie}
                              </p>
                            </div>
                            <div>
                              <span className="text-[10px] font-semibold uppercase text-gray-500">
                                Primary Ability
                              </span>
                              <p className="text-sm text-gray-200">
                                {selectedClass.primaryAbility}
                              </p>
                            </div>
                            <div>
                              <span className="text-[10px] font-semibold uppercase text-gray-500">
                                Role
                              </span>
                              <p className="text-sm text-gray-200">
                                {selectedClass.role}
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        <FlowArrow />
                      </>
                    )}

                    {/* Subclass */}
                    {selectedSubclass && (
                      <motion.div
                        variants={summaryCardVariants}
                        transition={{ duration: 0.4 }}
                        className="rounded-lg border border-gray-700 bg-gray-900 p-5"
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                            Subclass
                          </h3>
                          <SourceBadge source={selectedSubclass.source} />
                        </div>
                        <p className="text-xl font-bold text-amber-400">
                          {selectedSubclass.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-300">
                          {selectedSubclass.synopsis}
                        </p>
                        <p className="mt-2 text-sm italic text-gray-400">
                          {selectedSubclass.hint}
                        </p>
                      </motion.div>
                    )}

                    {/* Start Over */}
                    <motion.div
                      variants={summaryCardVariants}
                      transition={{ duration: 0.4 }}
                      className="flex justify-center pt-6"
                    >
                      <button
                        type="button"
                        onClick={handleStartOver}
                        className="rounded-lg border-2 border-amber-500 bg-transparent px-8 py-3 font-semibold text-amber-400 transition-colors hover:bg-amber-500 hover:text-gray-950"
                      >
                        Start Over
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <SelectionSidebar
          selections={selections}
          onStepClick={handleSidebarClick}
        />
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-4 flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-amber-400"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mr-0.5">
        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </button>
  );
}
