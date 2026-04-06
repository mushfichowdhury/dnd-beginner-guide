"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SummaryCard, SummaryLabel } from "./WizardHelpers";
import { generateNames, NameMode } from "@/utils/nameGenerator";

interface FantasyNameGeneratorProps {
  raceId: string;
}

const modes: { value: NameMode; label: string }[] = [
  { value: "full", label: "Full Names" },
  { value: "title", label: "Title Names" },
  { value: "letter", label: "By Letter" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function FantasyNameGenerator({
  raceId,
}: FantasyNameGeneratorProps) {
  const [mode, setMode] = useState<NameMode>("full");
  const [names, setNames] = useState<string[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [rerollKey, setRerollKey] = useState(0);

  const rollNames = useCallback(() => {
    const generated = generateNames(
      raceId,
      mode,
      3,
      mode === "letter" ? selectedLetter : undefined
    );
    setNames(generated);
  }, [raceId, mode, selectedLetter]);

  useEffect(() => {
    rollNames();
  }, [rollNames]);

  const handleReroll = () => {
    setRerollKey((k) => k + 1);
    rollNames();
  };

  return (
    <SummaryCard>
      <SummaryLabel>Character Name Ideas</SummaryLabel>

      {/* Mode toggle */}
      <div className="flex rounded-lg bg-gray-800 p-0.5">
        {modes.map((m) => (
          <button
            key={m.value}
            onClick={() => setMode(m.value)}
            className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              mode === m.value
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Letter picker (only in "letter" mode) */}
      <AnimatePresence>
        {mode === "letter" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="overflow-x-auto flex flex-nowrap gap-1 pb-1 pt-2">
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-7 h-7 flex-shrink-0 rounded-full text-xs font-medium flex items-center justify-center transition-colors ${
                    selectedLetter === letter
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name display */}
      <div className="mt-3 space-y-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={rerollKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-2"
          >
            {names.map((name, i) => (
              <motion.div
                key={`${rerollKey}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.07 }}
                className="rounded-lg bg-gray-800/60 px-4 py-2.5"
              >
                <span className="font-heading font-semibold text-white text-glow-sm">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Reroll button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleReroll}
          className="flex items-center justify-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 transition-colors hover:bg-indigo-500/20"
        >
          ⟳ Reroll Names
        </button>
      </div>
    </SummaryCard>
  );
}
