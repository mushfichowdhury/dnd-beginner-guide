"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edition } from "@/types";
import { classRankings, subclassRankings } from "@/data/rankings";
import { CharacterWizardReturn } from "@/hooks/useCharacterWizard";
import CardGrid from "./CardGrid";
import SelectionCard from "./SelectionCard";
import SourceBadge from "./SourceBadge";
import Tooltip from "./Tooltip";
import Modal from "./Modal";
import TierBadge from "./TierBadge";
import { traitDescriptions } from "@/data/traitDescriptions";
import { SummaryCard, SummaryLabel, RedditRankToggle } from "./WizardHelpers";

type MobileStep = "edition" | "race" | "class" | "subclass" | "summary";
const mobileStepOrder: MobileStep[] = ["edition", "race", "class", "subclass", "summary"];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function MobileWizard({ wizard }: { wizard: CharacterWizardReturn }) {
  const {
    edition, selectedRace, selectedClass, selectedSubclass,
    selectedVariant, selectedSubVariant, classSortMode, subclassSortMode,
    detailRace, detailSubclass, showVariantPicker, pendingVariant,
    pendingSubVariant, subVariantStep, raceLabel,
    filteredRaces, sortedClasses, sortedSubclasses,
    setClassSortMode, setSubclassSortMode, setDetailRace, setDetailSubclass,
    setShowVariantPicker, setPendingVariant, setPendingSubVariant, setSubVariantStep,
    handleEditionChange, raceHasVariants,
  } = wizard;

  const [mobileStep, setMobileStep] = useState<MobileStep>("edition");
  const [direction, setDirection] = useState(1);

  const goToStep = (step: MobileStep) => {
    const currentIdx = mobileStepOrder.indexOf(mobileStep);
    const nextIdx = mobileStepOrder.indexOf(step);
    setDirection(nextIdx > currentIdx ? 1 : -1);
    setMobileStep(step);
  };

  const handleEditionSelect = (e: Edition) => {
    handleEditionChange(e);
    goToStep("race");
  };

  const handleRaceSelect = (...args: Parameters<typeof wizard.handleRaceSelect>) => {
    wizard.handleRaceSelect(...args);
    goToStep("class");
  };

  const handleClassSelect = (...args: Parameters<typeof wizard.handleClassSelect>) => {
    wizard.handleClassSelect(...args);
    goToStep("subclass");
  };

  const handleSubclassSelect = (...args: Parameters<typeof wizard.handleSubclassSelect>) => {
    wizard.handleSubclassSelect(...args);
    goToStep("summary");
  };

  const handleStartOver = () => {
    wizard.handleStartOver();
    goToStep("edition");
  };

  const handleBack = () => {
    const idx = mobileStepOrder.indexOf(mobileStep);
    if (idx > 0) {
      goToStep(mobileStepOrder[idx - 1]);
    }
  };

  const stepLabel = (step: MobileStep) => {
    switch (step) {
      case "edition": return "Edition";
      case "race": return raceLabel;
      case "class": return "Class";
      case "subclass": return "Subclass";
      case "summary": return "Summary";
    }
  };

  const currentStepIdx = mobileStepOrder.indexOf(mobileStep);

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#0a0e1a]">
      {/* Top bar */}
      {mobileStep !== "edition" && (
        <div className="flex shrink-0 items-center gap-3 px-4 pt-4 pb-2">
          <button
            type="button"
            onClick={handleBack}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-white/60"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10 3a1 1 0 0 1 .707 1.707L6.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 0 1 10 3z" />
            </svg>
          </button>
          <h2 className="flex-1 font-heading text-lg font-bold text-white">
            {stepLabel(mobileStep)}
          </h2>
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {mobileStepOrder.slice(1, -1).map((step, i) => (
              <div
                key={step}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i + 1 < currentStepIdx
                    ? "bg-indigo-400"
                    : i + 1 === currentStepIdx
                      ? "bg-white"
                      : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Main content area */}
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {mobileStep === "edition" && (
            <motion.div
              key="edition"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6"
            >
              <h1 className="mb-2 font-heading text-3xl font-bold text-white text-glow">
                D&D Character Creator
              </h1>
              <p className="mb-8 text-center text-sm text-gray-400">
                A beginner-friendly guide to building your first character.
              </p>

              <div className="w-full max-w-sm space-y-4">
                <button
                  type="button"
                  onClick={() => handleEditionSelect("5e")}
                  className="card-celestial w-full rounded-xl border border-indigo-500/20 bg-gray-900/80 p-6 text-left transition-all active:scale-[0.98]"
                >
                  <h3 className="font-heading text-xl font-bold text-white text-glow-sm">
                    5e (2014)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    The original 5th Edition rules. The most widely played version with the largest library of content.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleEditionSelect("5.5e")}
                  className="card-celestial w-full rounded-xl border border-indigo-500/20 bg-gray-900/80 p-6 text-left transition-all active:scale-[0.98]"
                >
                  <h3 className="font-heading text-xl font-bold text-white text-glow-sm">
                    5.5e (2024)
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    The 2024 revised edition with updated species, classes, and streamlined mechanics.
                  </p>
                </button>
              </div>

              <p className="mt-6 text-center text-xs text-gray-500">
                Not sure which edition? Ask your DM — they&apos;ll know which rulebooks your table uses.
              </p>
            </motion.div>
          )}

          {mobileStep === "race" && (
            <motion.div
              key="race"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col overflow-hidden px-2 pt-2"
            >
              <p className="mb-3 px-2 text-center text-sm text-gray-400">
                Your {raceLabel.toLowerCase()} determines your innate abilities, traits, and appearance.
                {edition === "5.5e" && (
                  <span className="ml-1 text-white/70">
                    In 5.5e, ability scores are tied to your background, not species.
                  </span>
                )}
              </p>
              <div className="flex-1 overflow-hidden">
                <CardGrid tall>
                  {filteredRaces.map((race) => (
                    <SelectionCard
                      key={race.id}
                      title={race.name}
                      synopsis={race.synopsis}
                      hint={race.hint}
                      source={race.source}
                      selected={selectedRace?.id === race.id}
                      onClick={() => setDetailRace(race)}
                      tags={race.traits}
                      extraNote={edition === "5.5e" ? race.changes5_5e : undefined}
                    />
                  ))}
                </CardGrid>
              </div>
            </motion.div>
          )}

          {mobileStep === "class" && (
            <motion.div
              key="class"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col overflow-hidden px-2 pt-2"
            >
              <div className="mb-3 flex flex-col gap-2 px-2">
                <p className="text-center text-sm text-gray-400">
                  Your class defines your abilities, playstyle, and role in the party.
                </p>
                <div className="flex justify-center">
                  <RedditRankToggle value={classSortMode} onChange={setClassSortMode} />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <CardGrid tall>
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
              </div>
            </motion.div>
          )}

          {mobileStep === "subclass" && (
            <motion.div
              key="subclass"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex flex-col overflow-hidden px-2 pt-2"
            >
              <div className="mb-3 flex flex-col gap-2 px-2">
                <p className="text-center text-sm text-gray-400">
                  Your subclass specializes your{" "}
                  <span className="font-semibold text-white">
                    {selectedClass?.name ?? "class"}
                  </span>{" "}
                  with unique abilities and flavor.
                </p>
                <div className="flex justify-center">
                  <RedditRankToggle value={subclassSortMode} onChange={setSubclassSortMode} />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <CardGrid tall>
                  {sortedSubclasses.map((sub) => (
                    <SelectionCard
                      key={sub.id}
                      title={sub.name}
                      synopsis={sub.synopsis}
                      hint={sub.hint}
                      source={sub.source}
                      selected={selectedSubclass?.id === sub.id}
                      onClick={() => setDetailSubclass(sub)}
                      tier={subclassSortMode === "reddit" ? subclassRankings[sub.id] : undefined}
                      features={sub.features}
                      onShowDetails={() => setDetailSubclass(sub)}
                      stackBadges
                    />
                  ))}
                </CardGrid>
              </div>
            </motion.div>
          )}

          {mobileStep === "summary" && selectedRace && selectedClass && selectedSubclass && (
            <motion.div
              key="summary"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 overflow-y-auto px-4 pt-2 pb-8"
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
                className="space-y-4"
              >
                <SummaryCard>
                  <SummaryLabel>Edition</SummaryLabel>
                  <p className="text-lg font-bold text-white font-heading text-glow-sm">
                    {edition === "5e" ? "5th Edition (2014)" : "5.5e Revised (2024)"}
                  </p>
                </SummaryCard>

                <SummaryCard>
                  <div className="mb-2 flex items-center justify-between">
                    <SummaryLabel>{raceLabel}</SummaryLabel>
                    <SourceBadge source={selectedRace.source} />
                  </div>
                  <p className="text-xl font-bold text-white font-heading text-glow-sm">
                    {selectedRace.name}
                    {selectedVariant && (
                      <span className="mt-0.5 block text-base font-medium text-indigo-300">
                        ({selectedVariant.name}{selectedSubVariant ? ` — ${selectedSubVariant.name}` : ""})
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{selectedRace.synopsis}</p>
                  {selectedVariant && (
                    <div className="mt-2 rounded bg-indigo-500/10 border border-indigo-500/20 px-3 py-2">
                      <p className="text-xs font-semibold text-indigo-200">{selectedVariant.name}</p>
                      <p className="mt-0.5 text-xs text-indigo-200/80">{selectedVariant.description}</p>
                      {selectedVariant.spells && selectedVariant.spells.length > 0 && (
                        <div className="mt-2 space-y-1 border-t border-indigo-500/20 pt-2">
                          <p className="text-[10px] font-semibold uppercase text-indigo-300/70">Spell Progression</p>
                          {selectedVariant.spells.map((s) => (
                            <div key={`${s.level}-${s.name}`} className="flex items-center gap-2">
                              <span className="shrink-0 rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                Lv {s.level}
                              </span>
                              <span className="text-[11px] text-indigo-200">{s.name}</span>
                              {s.note && <span className="text-[10px] text-indigo-300/60">({s.note})</span>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {selectedSubVariant && (
                    <div className="mt-2 rounded bg-purple-500/10 border border-purple-500/20 px-3 py-2">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-semibold text-purple-200">{selectedSubVariant.name}</p>
                        {selectedSubVariant.damageType && (
                          <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-purple-300">
                            {selectedSubVariant.damageType}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-purple-200/80">{selectedSubVariant.description}</p>
                    </div>
                  )}
                  <div className="mt-3 grid grid-cols-2 gap-2">
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

                <SummaryCard>
                  <div className="mb-2 flex items-center justify-between">
                    <SummaryLabel>Class</SummaryLabel>
                    <SourceBadge source={selectedClass.source} />
                  </div>
                  <p className="text-xl font-bold text-white font-heading text-glow-sm">
                    {selectedClass.name}
                  </p>
                  <p className="mt-1 text-sm text-gray-300">{selectedClass.synopsis}</p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-gray-500">Health</span>
                      <p className="text-sm text-gray-200">{selectedClass.healthTier}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-gray-500">Primary</span>
                      <p className="text-sm text-gray-200">{selectedClass.primaryAbility}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase text-gray-500">Role</span>
                      <p className="text-sm text-gray-200">{selectedClass.role}</p>
                    </div>
                  </div>
                </SummaryCard>

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
                  {selectedSubclass.features && selectedSubclass.features.length > 0 && (
                    <div className="mt-3 border-t border-gray-700 pt-3">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        Abilities by Level
                      </p>
                      <div className="space-y-2">
                        {selectedSubclass.features.map((f) => (
                          <div key={f.level}>
                            <div className="flex items-center gap-2">
                              <span className="shrink-0 rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                Lv {f.level}
                              </span>
                              <span className="text-xs font-semibold text-gray-200">{f.name}</span>
                            </div>
                            <p className="mt-0.5 pl-1 text-xs leading-relaxed text-gray-400">{f.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </SummaryCard>

                <div className="flex justify-center pt-4 pb-4">
                  <button
                    type="button"
                    onClick={handleStartOver}
                    className="rounded-xl border-2 border-white/50 bg-transparent px-8 py-3 font-heading font-semibold text-white transition-all active:scale-95"
                  >
                    Start Over
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── RACE DETAIL MODAL ─── */}
      <Modal
        isOpen={!!detailRace && !showVariantPicker}
        onClose={() => { setDetailRace(null); setPendingVariant(null); }}
      >
        {detailRace && (
          <div>
            <div className="mb-5 flex h-32 items-center justify-center rounded-xl border border-indigo-500/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
              <span className="font-heading text-3xl font-bold text-white/20">{detailRace.name}</span>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-white text-glow-sm">{detailRace.name}</h2>
              <SourceBadge source={detailRace.source} />
            </div>

            <p className="mb-3 text-sm leading-relaxed text-gray-300">{detailRace.synopsis}</p>
            <p className="mb-4 flex items-start gap-1.5 text-sm italic text-gray-400">
              <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-white/50" fill="currentColor">
                <path d="M8 1a5 5 0 0 0-2 9.584V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.416A5 5 0 0 0 8 1zm0 2a3 3 0 0 1 1.5 5.598V11h-3V8.598A3 3 0 0 1 8 3zM6 14h4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1z" />
              </svg>
              {detailRace.hint}
            </p>

            <div className="mb-4 grid grid-cols-2 gap-3">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Ability Bonuses</span>
                <p className="mt-0.5 text-sm text-gray-200">{detailRace.abilityBonuses}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Traits</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {detailRace.traits.map((t) => (
                    <Tooltip key={t} text={traitDescriptions[t]}>
                      <span className="rounded-full bg-gray-800 border border-gray-700/50 px-2 py-0.5 text-xs text-gray-300">
                        {t}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>

            {edition === "5.5e" && detailRace.changes5_5e && (
              <p className="mb-4 rounded bg-white/10 px-3 py-2 text-xs text-gray-200">
                5.5e Change: {detailRace.changes5_5e}
              </p>
            )}

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => { setDetailRace(null); setPendingVariant(null); }}
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/40 hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  if (raceHasVariants(detailRace)) {
                    setShowVariantPicker(true);
                    setPendingVariant(null);
                    setPendingSubVariant(null);
                    setSubVariantStep(false);
                  } else {
                    handleRaceSelect(detailRace);
                    setDetailRace(null);
                  }
                }}
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                {raceHasVariants(detailRace)
                  ? "Choose Variant"
                  : `Select this ${raceLabel}`}
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* ─── VARIANT PICKER MODAL ─── */}
      <Modal
        isOpen={!!detailRace && showVariantPicker}
        onClose={() => { setShowVariantPicker(false); setPendingVariant(null); setPendingSubVariant(null); setSubVariantStep(false); }}
      >
        {detailRace && detailRace.variants && (
          <div>
            <button
              type="button"
              onClick={() => {
                if (subVariantStep) {
                  setSubVariantStep(false);
                  setPendingSubVariant(null);
                } else {
                  setShowVariantPicker(false);
                  setPendingVariant(null);
                }
              }}
              className="mb-4 flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 3a1 1 0 0 1 .707 1.707L6.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 0 1 10 3z" />
              </svg>
              {subVariantStep ? `Back to ${detailRace.name} variants` : `Back to ${detailRace.name}`}
            </button>

            {!subVariantStep ? (
              <>
                <h2 className="mb-2 font-heading text-xl font-bold text-white text-glow-sm">
                  Choose your {detailRace.name} variant
                </h2>
                <p className="mb-5 text-sm text-gray-400">
                  Pick the ancestry or lineage that defines your character.
                </p>

                <div className="grid gap-3 grid-cols-1">
                  {detailRace.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setPendingVariant(v)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        pendingVariant?.id === v.id
                          ? "ring-2 ring-indigo-400 border-indigo-400/50 bg-indigo-500/10"
                          : "border-gray-700/50 bg-gray-800/50 hover:border-white/30"
                      }`}
                    >
                      <h3 className="mb-1 font-heading text-sm font-bold text-white">{v.name}</h3>
                      {v.mechanicalSummary && (
                        <p className="mb-1 text-[11px] font-medium text-indigo-300">{v.mechanicalSummary}</p>
                      )}
                      <p className="text-xs leading-relaxed text-gray-400">{v.description}</p>
                      {v.spells && v.spells.length > 0 && (
                        <div className="mt-2 space-y-1 border-t border-gray-700/50 pt-2">
                          {v.spells.map((s) => (
                            <div key={`${s.level}-${s.name}`} className="flex items-center gap-2">
                              <span className="shrink-0 rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-bold text-white">
                                Lv {s.level}
                              </span>
                              <span className="text-[11px] text-gray-300">{s.name}</span>
                              {s.note && <span className="text-[10px] text-gray-500">({s.note})</span>}
                            </div>
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => { setShowVariantPicker(false); setPendingVariant(null); }}
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={!pendingVariant}
                    onClick={() => {
                      if (pendingVariant && detailRace) {
                        if (pendingVariant.subVariants && pendingVariant.subVariants.length > 0) {
                          setSubVariantStep(true);
                          setPendingSubVariant(null);
                        } else {
                          handleRaceSelect(detailRace, pendingVariant);
                          setDetailRace(null);
                          setShowVariantPicker(false);
                          setPendingVariant(null);
                        }
                      }
                    }}
                    className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {pendingVariant?.subVariants && pendingVariant.subVariants.length > 0
                      ? "Next \u2192"
                      : "Confirm"}
                  </button>
                </div>
              </>
            ) : pendingVariant?.subVariants ? (
              <>
                <h2 className="mb-2 font-heading text-xl font-bold text-white text-glow-sm">
                  Choose your {pendingVariant.name} dragon
                </h2>
                <p className="mb-5 text-sm text-gray-400">
                  Select a specific dragon type to determine your damage type and breath weapon.
                </p>

                <div className="grid gap-3 grid-cols-1">
                  {pendingVariant.subVariants.map((sv) => (
                    <button
                      key={sv.id}
                      type="button"
                      onClick={() => setPendingSubVariant(sv)}
                      className={`rounded-xl border p-4 text-left transition-all ${
                        pendingSubVariant?.id === sv.id
                          ? "ring-2 ring-indigo-400 border-indigo-400/50 bg-indigo-500/10"
                          : "border-gray-700/50 bg-gray-800/50 hover:border-white/30"
                      }`}
                    >
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-heading text-sm font-bold text-white">{sv.name}</h3>
                        {sv.damageType && (
                          <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-300">
                            {sv.damageType}
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-gray-400">{sv.description}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-5 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => { setSubVariantStep(false); setPendingSubVariant(null); }}
                    className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/40 hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    disabled={!pendingSubVariant}
                    onClick={() => {
                      if (pendingVariant && pendingSubVariant && detailRace) {
                        handleRaceSelect(detailRace, pendingVariant, pendingSubVariant);
                        setDetailRace(null);
                        setShowVariantPicker(false);
                        setPendingVariant(null);
                        setPendingSubVariant(null);
                        setSubVariantStep(false);
                      }
                    }}
                    className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Confirm
                  </button>
                </div>
              </>
            ) : null}
          </div>
        )}
      </Modal>

      {/* ─── SUBCLASS ABILITIES MODAL ─── */}
      <Modal
        isOpen={!!detailSubclass}
        onClose={() => setDetailSubclass(null)}
      >
        {detailSubclass && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-white text-glow-sm">{detailSubclass.name}</h2>
              <div className="flex items-center gap-1.5">
                {subclassSortMode === "reddit" && subclassRankings[detailSubclass.id] && (
                  <TierBadge tier={subclassRankings[detailSubclass.id]} />
                )}
                <SourceBadge source={detailSubclass.source} />
              </div>
            </div>

            <p className="mb-2 text-sm leading-relaxed text-gray-300">{detailSubclass.synopsis}</p>
            <p className="mb-4 text-sm italic text-gray-400">{detailSubclass.hint}</p>

            {detailSubclass.features && detailSubclass.features.length > 0 && (
              <div className="border-t border-gray-700 pt-4">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Abilities by Level
                </h3>
                <div className="space-y-3">
                  {detailSubclass.features.map((f) => (
                    <div key={f.level}>
                      <div className="flex items-center gap-2">
                        <span className="shrink-0 rounded bg-white/15 px-2 py-0.5 text-xs font-bold text-white">
                          Lv {f.level}
                        </span>
                        <span className="text-sm font-semibold text-gray-200">{f.name}</span>
                      </div>
                      <p className="mt-1 pl-1 text-sm leading-relaxed text-gray-400">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDetailSubclass(null)}
                className="rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/40 hover:text-white"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleSubclassSelect(detailSubclass);
                  setDetailSubclass(null);
                }}
                className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                Select this Subclass
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
