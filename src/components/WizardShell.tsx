"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { useCharacterWizard } from "@/hooks/useCharacterWizard";
import FlowchartWizard from "./FlowchartWizard";
import MobileWizard from "./MobileWizard";

export default function WizardShell() {
  const isMobile = useIsMobile();
  const wizard = useCharacterWizard();

  if (isMobile) {
    return (
      <div className="relative z-10">
        <MobileWizard wizard={wizard} />
      </div>
    );
  }

  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="font-heading text-4xl font-bold text-white text-glow sm:text-5xl lg:text-6xl">
          D&amp;D Character Creator
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          A beginner-friendly guide to building your first character.
          <br className="hidden sm:block" />
          Pick your race, class, and subclass — scroll down to see the full picture.
        </p>
      </div>
      <FlowchartWizard wizard={wizard} />
    </div>
  );
}
