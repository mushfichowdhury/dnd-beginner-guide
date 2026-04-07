"use client";
import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { createPortal } from "react-dom";
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

function Firework({ pos, id }: { pos: { x: number; y: number }; id: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => {
        const angle = (i / 20) * 2 * Math.PI;
        const distance = 90 + Math.random() * 60;
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          color: PARTICLE_COLORS[i % PARTICLE_COLORS.length],
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]
  );

  return createPortal(
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {particles.map((p, i) => (
        <motion.div
          key={`${id}-${i}`}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: p.color }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.02 }}
        />
      ))}
    </div>,
    document.body
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
  const [fireworkPos, setFireworkPos] = useState<{ x: number; y: number } | null>(null);
  const selectedElementRef = useRef<HTMLElement | null>(null);

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
    setFireworkPos(null);
    rollNames();
  };

  const handleSelectName = (name: string, el: HTMLElement) => {
    selectedElementRef.current = el;
    setSelectedName(name);
    setTimeout(() => {
      if (selectedElementRef.current) {
        const rect = selectedElementRef.current.getBoundingClientRect();
        setFireworkPos({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
        setFireworkId((id) => (id ?? 0) + 1);
      }
    }, 350);
  };

  const displayedNames = selectedName ? [selectedName] : names;

  return (
    <>
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
                    initial={{ opacity: 1, x: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      backgroundColor: isSelected
                        ? "rgb(22,163,74)"
                        : "rgba(31,41,55,0.6)",
                    }}
                    exit={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0,
                      delay: 0,
                      backgroundColor: { duration: 0.4 },
                    }}
                    onClick={(e) => !selectedName && handleSelectName(name, e.currentTarget)}
                    className={`relative rounded-md py-2 flex items-center justify-center ${
                      !selectedName ? "cursor-pointer hover:bg-gray-700/80 px-5" : ""
                    } ${isSelected ? "col-span-1 mx-auto w-fit px-8" : "px-5"}`}
                  >
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
    {selectedName && fireworkId !== null && fireworkPos && (
      <Firework pos={fireworkPos} id={fireworkId} />
    )}
    </>
  );
}
