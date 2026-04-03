"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CharacterSelections } from "@/types";
import SourceBadge from "./SourceBadge";

interface SelectionSidebarProps {
  selections: CharacterSelections;
  onStepClick: (step: "race" | "class" | "subclass") => void;
}

const pickVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export default function SelectionSidebar({
  selections,
  onStepClick,
}: SelectionSidebarProps) {
  const raceLabel = selections.edition === "5.5e" ? "Species" : "Race";
  const picks = [
    {
      step: "race" as const,
      label: raceLabel,
      value: selections.race,
      display: selections.race?.name,
      source: selections.race?.source,
    },
    {
      step: "class" as const,
      label: "Class",
      value: selections.dndClass,
      display: selections.dndClass?.name,
      source: selections.dndClass?.source,
    },
    {
      step: "subclass" as const,
      label: "Subclass",
      value: selections.subclass,
      display: selections.subclass?.name,
      source: selections.subclass?.source,
    },
  ];

  const hasAnySelection = picks.some((p) => p.value !== null);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-72 shrink-0">
        <div className="sticky top-8 rounded-lg border border-gray-700 bg-gray-900/80 backdrop-blur-sm p-4">
          <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">
            Your Character
          </h3>
          <p className="mb-4 text-xs text-amber-400/70">
            {selections.edition === "5e" ? "5th Edition (2014)" : "5.5e (2024)"}
          </p>

          <div className="space-y-3">
            {picks.map((pick, i) => (
              <div key={pick.step}>
                {i > 0 && (
                  <div className="flex justify-center py-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-600">
                      <path d="M8 2 L8 12 M4 9 L8 13 L12 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
                <AnimatePresence mode="wait">
                  {pick.value ? (
                    <motion.button
                      key={pick.display}
                      variants={pickVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      type="button"
                      onClick={() => onStepClick(pick.step)}
                      className="w-full rounded-md border border-amber-500/30 bg-amber-500/10 p-3 text-left transition-colors hover:border-amber-500/60 cursor-pointer"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        {pick.label}
                      </span>
                      <div className="flex items-center justify-between mt-0.5">
                        <span className="text-sm font-bold text-amber-400">
                          {pick.display}
                        </span>
                        {pick.source && <SourceBadge source={pick.source} />}
                      </div>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="empty"
                      variants={pickVariants}
                      initial="initial"
                      animate="animate"
                      className="rounded-md border border-dashed border-gray-700 p-3"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        {pick.label}
                      </span>
                      <p className="mt-0.5 text-sm text-gray-600">Not selected</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      {hasAnySelection && (
        <div className="lg:hidden mb-4 rounded-lg border border-gray-700 bg-gray-900/80 p-3">
          <div className="flex items-center gap-2 overflow-x-auto">
            <span className="shrink-0 text-xs text-gray-500 font-semibold uppercase">
              Picks:
            </span>
            {picks.map(
              (pick) =>
                pick.value && (
                  <button
                    key={pick.step}
                    type="button"
                    onClick={() => onStepClick(pick.step)}
                    className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 hover:border-amber-500/60 transition-colors"
                  >
                    {pick.label}: {pick.display}
                  </button>
                )
            )}
          </div>
        </div>
      )}
    </>
  );
}
