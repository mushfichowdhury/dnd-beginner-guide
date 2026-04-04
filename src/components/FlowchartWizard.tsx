"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edition, Step, Race, DndClass, Subclass, CharacterSelections } from "@/types";
import { races } from "@/data/races";
import { classes } from "@/data/classes";
import { subclasses } from "@/data/subclasses";
import { classRankings, subclassRankings, Tier } from "@/data/rankings";
import EditionToggle from "./EditionToggle";
import CardGrid from "./CardGrid";
import SelectionCard from "./SelectionCard";
import SourceBadge from "./SourceBadge";
import StarConnector from "./StarConnector";
import Tooltip from "./Tooltip";
import { traitDescriptions } from "@/data/traitDescriptions";

type SortMode = "default" | "reddit";

const tierOrder: Record<Tier, number> = { S: 0, A: 1, B: 2, C: 3 };

const stepOrder: Step[] = ["race", "class", "subclass", "summary"];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const healthTierLabels: Record<string, string> = {
  High: "High Health",
  "Above Average": "Above Avg Health",
  Average: "Average Health",
  Low: "Low Health",
};

export default function FlowchartWizard() {
  const [edition, setEdition] = useState<Edition>("5e");
  const [currentStep, setCurrentStep] = useState<Step>("race");
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [selectedClass, setSelectedClass] = useState<DndClass | null>(null);
  const [selectedSubclass, setSelectedSubclass] = useState<Subclass | null>(null);
  const [classSortMode, setClassSortMode] = useState<SortMode>("default");
  const [subclassSortMode, setSubclassSortMode] = useState<SortMode>("default");

  const classRef = useRef<HTMLDivElement>(null);
  const subclassRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const raceLabel = edition === "5.5e" ? "Species" : "Race";

  const currentIndex = stepOrder.indexOf(currentStep);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  };

  const handleEditionChange = (e: Edition) => {
    setEdition(e);
    setSelectedRace(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
  };

  const handleRaceSelect = (race: Race) => {
    setSelectedRace(race);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("class");
    scrollToRef(classRef);
  };

  const handleClassSelect = (cls: DndClass) => {
    setSelectedClass(cls);
    setSelectedSubclass(null);
    setCurrentStep("subclass");
    scrollToRef(subclassRef);
  };

  const handleSubclassSelect = (sub: Subclass) => {
    setSelectedSubclass(sub);
    setCurrentStep("summary");
    scrollToRef(summaryRef);
  };

  const handleStartOver = () => {
    setSelectedRace(null);
    setSelectedClass(null);
    setSelectedSubclass(null);
    setCurrentStep("race");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEditStep = (step: Step) => {
    if (step === "race") {
      setSelectedRace(null);
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

  return (
    <div className="flex flex-col items-center">
      {/* ─── EDITION TOGGLE ─── */}
      <EditionToggle edition={edition} onChange={handleEditionChange} />

      <StarConnector />

      {/* ─── RACE / SPECIES STEP ─── */}
      <section className="w-full">
        {currentStep === "race" ? (
          <motion.div {...fadeInUp} transition={{ duration: 0.4 }}>
            <SectionHeading>Choose Your {raceLabel}</SectionHeading>
            <p className="mb-6 text-center text-gray-400">
              Your {raceLabel.toLowerCase()} determines your innate abilities, traits, and appearance.
              {edition === "5.5e" && (
                <span className="ml-1 text-white/70">
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
          </motion.div>
        ) : selectedRace ? (
          <CompletedStepCard
            label={raceLabel}
            name={selectedRace.name}
            source={selectedRace.source}
            onEdit={() => handleEditStep("race")}
          />
        ) : null}
      </section>

      {/* ─── CLASS STEP ─── */}
      {currentIndex >= 1 && (
        <>
          <StarConnector />
          <section ref={classRef} className="w-full scroll-mt-8">
            {currentStep === "class" ? (
              <motion.div {...fadeInUp} transition={{ duration: 0.4 }}>
                <SectionHeading>Choose Your Class</SectionHeading>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-center sm:text-left text-gray-400">
                    Your class defines your abilities, playstyle, and role in the party.
                  </p>
                  <SortDropdown value={classSortMode} onChange={setClassSortMode} />
                </div>
                <CardGrid>
                  {sortedClasses.map((cls) => (
                    <SelectionCard
                      key={cls.id}
                      title={cls.name}
                      synopsis={cls.synopsis}
                      hint={cls.hint}
                      source={cls.source}
                      selected={selectedClass?.id === cls.id}
                      onClick={() => handleClassSelect(cls)}
                      tags={[cls.role]}
                      healthTier={cls.healthTier}
                      hitDie={cls.hitDie}
                      proficiencies={cls.proficiencies}
                      tier={classSortMode === "reddit" ? classRankings[cls.id] : undefined}
                    />
                  ))}
                </CardGrid>
              </motion.div>
            ) : selectedClass ? (
              <CompletedStepCard
                label="Class"
                name={selectedClass.name}
                source={selectedClass.source}
                detail={`${healthTierLabels[selectedClass.healthTier]} · ${selectedClass.role}`}
                onEdit={() => handleEditStep("class")}
              />
            ) : null}
          </section>
        </>
      )}

      {/* ─── SUBCLASS STEP ─── */}
      {currentIndex >= 2 && (
        <>
          <StarConnector />
          <section ref={subclassRef} className="w-full scroll-mt-8">
            {currentStep === "subclass" ? (
              <motion.div {...fadeInUp} transition={{ duration: 0.4 }}>
                <SectionHeading>Choose Your Subclass</SectionHeading>
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-center sm:text-left text-gray-400">
                    Your subclass specializes your{" "}
                    <span className="font-semibold text-white">
                      {selectedClass?.name ?? "class"}
                    </span>{" "}
                    with unique abilities and flavor.
                  </p>
                  <SortDropdown value={subclassSortMode} onChange={setSubclassSortMode} />
                </div>
                <CardGrid>
                  {sortedSubclasses.map((sub) => (
                    <SelectionCard
                      key={sub.id}
                      title={sub.name}
                      synopsis={sub.synopsis}
                      hint={sub.hint}
                      source={sub.source}
                      selected={selectedSubclass?.id === sub.id}
                      onClick={() => handleSubclassSelect(sub)}
                      tier={subclassSortMode === "reddit" ? subclassRankings[sub.id] : undefined}
                      features={sub.features}
                    />
                  ))}
                </CardGrid>
              </motion.div>
            ) : selectedSubclass ? (
              <CompletedStepCard
                label="Subclass"
                name={selectedSubclass.name}
                source={selectedSubclass.source}
                onEdit={() => handleEditStep("subclass")}
              />
            ) : null}
          </section>
        </>
      )}

      {/* ─── SUMMARY ─── */}
      {currentStep === "summary" && selectedRace && selectedClass && selectedSubclass && (
        <>
          <StarConnector label="Your Character" />
          <section ref={summaryRef} className="w-full scroll-mt-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              className="space-y-4"
            >
              {/* Edition */}
              <SummaryCard>
                <SummaryLabel>Edition</SummaryLabel>
                <p className="text-lg font-bold text-white font-heading text-glow-sm">
                  {edition === "5e" ? "5th Edition (2014)" : "5.5e Revised (2024)"}
                </p>
              </SummaryCard>

              {/* Race */}
              <SummaryCard>
                <div className="mb-2 flex items-center justify-between">
                  <SummaryLabel>{raceLabel}</SummaryLabel>
                  <SourceBadge source={selectedRace.source} />
                </div>
                <p className="text-xl font-bold text-white font-heading text-glow-sm">
                  {selectedRace.name}
                </p>
                <p className="mt-1 text-sm text-gray-300">{selectedRace.synopsis}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-gray-500">Ability Bonuses</span>
                    <p className="text-sm text-gray-200">{selectedRace.abilityBonuses}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-gray-500">Traits</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {selectedRace.traits.map((t) => (
                        <Tooltip key={t} text={traitDescriptions[t]}>
                          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
                            {t}
                          </span>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>
                {edition === "5.5e" && selectedRace.changes5_5e && (
                  <p className="mt-3 rounded bg-white/10 px-3 py-2 text-xs text-gray-200">
                    5.5e Change: {selectedRace.changes5_5e}
                  </p>
                )}
              </SummaryCard>

              {/* Class */}
              <SummaryCard>
                <div className="mb-2 flex items-center justify-between">
                  <SummaryLabel>Class</SummaryLabel>
                  <SourceBadge source={selectedClass.source} />
                </div>
                <p className="text-xl font-bold text-white font-heading text-glow-sm">
                  {selectedClass.name}
                </p>
                <p className="mt-1 text-sm text-gray-300">{selectedClass.synopsis}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-gray-500">Health</span>
                    <p className="text-sm text-gray-200">{selectedClass.healthTier}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-gray-500">Primary Ability</span>
                    <p className="text-sm text-gray-200">{selectedClass.primaryAbility}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-gray-500">Role</span>
                    <p className="text-sm text-gray-200">{selectedClass.role}</p>
                  </div>
                </div>
              </SummaryCard>

              {/* Subclass */}
              <SummaryCard>
                <div className="mb-2 flex items-center justify-between">
                  <SummaryLabel>Subclass</SummaryLabel>
                  <SourceBadge source={selectedSubclass.source} />
                </div>
                <p className="text-xl font-bold text-white font-heading text-glow-sm">
                  {selectedSubclass.name}
                </p>
                <p className="mt-1 text-sm text-gray-300">{selectedSubclass.synopsis}</p>
                <p className="mt-2 text-sm italic text-gray-400">{selectedSubclass.hint}</p>
              </SummaryCard>

              {/* Start Over */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4 }}
                className="flex justify-center pt-6 pb-12"
              >
                <button
                  type="button"
                  onClick={handleStartOver}
                  className="rounded-xl border-2 border-white/50 bg-transparent px-8 py-3 font-heading font-semibold text-white transition-all hover:bg-white hover:text-gray-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Start Over
                </button>
              </motion.div>
            </motion.div>
          </section>
        </>
      )}
    </div>
  );
}

/* ─── Helper Components ─── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2 text-center text-2xl font-bold text-gray-100 font-heading text-glow-sm">
      {children}
    </h2>
  );
}

function SortDropdown({
  value,
  onChange,
}: {
  value: SortMode;
  onChange: (mode: SortMode) => void;
}) {
  return (
    <div className="flex shrink-0 items-center justify-center gap-2">
      <label className="text-xs text-gray-500">Sort:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortMode)}
        className="rounded-lg border border-indigo-500/30 bg-gray-800/80 px-2 py-1 text-sm text-gray-300 outline-none focus:border-white/60"
      >
        <option value="default">Default</option>
        <option value="reddit">Reddit Ranking</option>
      </select>
    </div>
  );
}

function CompletedStepCard({
  label,
  name,
  source,
  detail,
  onEdit,
}: {
  label: string;
  name: string;
  source: import("@/types").Source;
  detail?: string;
  onEdit: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="card-celestial mx-auto max-w-lg w-full rounded-xl border border-indigo-500/20 bg-gray-900/80 p-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {label}
            </span>
            <p className="font-heading font-bold text-white text-glow-sm">{name}</p>
            {detail && <p className="text-xs text-gray-400 mt-0.5">{detail}</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SourceBadge source={source} />
          <button
            type="button"
            onClick={onEdit}
            className="rounded-lg border border-gray-700 px-3 py-1 text-xs text-gray-400 transition-colors hover:border-white/40 hover:text-white"
          >
            Change
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function SummaryCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.4 }}
      className="card-celestial rounded-xl border border-indigo-500/20 bg-gray-900/80 p-5"
    >
      {children}
    </motion.div>
  );
}

function SummaryLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
      {children}
    </h3>
  );
}
