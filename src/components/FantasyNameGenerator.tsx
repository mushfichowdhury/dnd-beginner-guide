"use client";
import { useState, useCallback, useEffect, useMemo } from "react";
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

const PARTICLE_COLORS = ["#facc15", "#f97316", "#ec4899", "#a78bfa", "#34d399", "#60a5fa"];

function Firework({ id }: { id: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * 2 * Math.PI;
        const distance = 60 + Math.random() * 40;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible z-10">
      {particles.map((p, i) => (
        <motion.div
          key={`${id}-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function FantasyNameGenerator({
  raceId,
}: FantasyNameGeneratorProps) {
  const [mode, setMode] = useState<NameMode>("full");
  const [names, setNames] = useState<string[]>([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [rerollKey, setRerollKey] = useState(0);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [fireworkId, setFireworkId] = useState<number | null>(null);

  const rollNames = useCallback(() => {
    const generated = generateNames(
      raceId,
      mode,
      6,
      mode === "letter" ? selectedLetter : undefined
    );
    setNames(generated);
  }, [raceId, mode, selectedLetter]);

  useEffect(() => {
    rollNames();
  }, [rollNames]);

  const handleReroll = () => {
    setRerollKey((k) => k + 1);
    setSelectedName(null);
    setFireworkId(null);
    rollNames();
  };

  const handleSelectName = (name: string) => {
    setSelectedName(name);
    setFireworkId((id) => (id ?? 0) + 1);
  };

  const displayedNames = selectedName ? [selectedName] : names;

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
      <div className="mt-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={rerollKey}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`grid gap-2 w-full ${selectedName ? "grid-cols-1" : "grid-cols-2"}`}
          >
            <AnimatePresence>
              {displayedNames.map((name, i) => {
                const isSelected = name === selectedName;
                return (
                  <motion.div
                    key={name}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      backgroundColor: isSelected
                        ? "rgb(22,163,74)"
                        : "rgba(31,41,55,0.6)",
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.2,
                      delay: isSelected ? 0 : i * 0.07,
                      backgroundColor: { duration: 0.4 },
                      layout: { duration: 0.3 },
                    }}
                    onClick={() => !selectedName && handleSelectName(name)}
                    className={`relative rounded-md px-5 py-2 flex items-center justify-center overflow-visible ${
                      !selectedName ? "cursor-pointer hover:bg-gray-700/80" : ""
                    } ${isSelected ? "col-span-1 mx-auto w-full" : ""}`}
                  >
                    {isSelected && fireworkId !== null && (
                      <Firework id={fireworkId} />
                    )}
                    <span className="font-heading font-semibold text-white text-glow-sm relative z-20">
                      {name}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
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
