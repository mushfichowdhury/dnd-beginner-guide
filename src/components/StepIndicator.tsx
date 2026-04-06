"use client";

import { Step, CharacterSelections } from "@/types";

interface StepIndicatorProps {
  currentStep: Step;
  selections: CharacterSelections;
  onStepClick: (step: Step) => void;
  raceLabel?: string;
}

const stepOrder: Step[] = ["race", "class", "subclass", "summary"];

function getStepName(step: Step, selections: CharacterSelections): string | null {
  switch (step) {
    case "race":
      return selections.race?.name ?? null;
    case "class":
      return selections.dndClass?.name ?? null;
    case "subclass":
      return selections.subclass?.name ?? null;
    default:
      return null;
  }
}

export default function StepIndicator({
  currentStep,
  selections,
  onStepClick,
  raceLabel = "Race",
}: StepIndicatorProps) {
  const currentIndex = stepOrder.indexOf(currentStep);

  const steps: { key: Step; label: string }[] = [
    { key: "race", label: raceLabel },
    { key: "class", label: "Class" },
    { key: "subclass", label: "Subclass" },
    { key: "summary", label: "Summary" },
  ];

  return (
    <nav className="mb-8 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {steps.map((step, i) => {
        const isCurrent = step.key === currentStep;
        const isCompleted = i < currentIndex;
        const selectedName = getStepName(step.key, selections);
        const canClick = i < currentIndex;

        return (
          <div key={step.key} className="flex items-center gap-1 sm:gap-2">
            {i > 0 && (
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-600 shrink-0">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <button
              type="button"
              disabled={!canClick}
              onClick={() => canClick && onStepClick(step.key)}
              className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isCurrent
                  ? "bg-white text-gray-950"
                  : isCompleted
                    ? "bg-gray-800 text-white hover:bg-gray-700 cursor-pointer"
                    : "bg-gray-900 text-gray-500 cursor-default"
              }`}
            >
              <span>{step.label}</span>
              {isCompleted && selectedName && (
                <span className="ml-1 max-w-[7rem] truncate text-xs opacity-80">({selectedName})</span>
              )}
            </button>
          </div>
        );
      })}
    </nav>
  );
}
