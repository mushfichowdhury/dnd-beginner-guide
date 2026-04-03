"use client";

import { motion } from "framer-motion";
import { Source } from "@/types";
import SourceBadge from "./SourceBadge";

interface SelectionCardProps {
  title: string;
  synopsis: string;
  hint: string;
  source: Source;
  selected: boolean;
  onClick: () => void;
  tags?: string[];
  extraNote?: string;
}

export default function SelectionCard({
  title,
  synopsis,
  hint,
  source,
  selected,
  onClick,
  tags,
  extraNote,
}: SelectionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full cursor-pointer rounded-lg border p-4 text-left transition-colors ${
        selected
          ? "ring-2 ring-amber-500 bg-gray-800 border-amber-500"
          : "border-gray-700 bg-gray-900 hover:border-amber-500/50"
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-amber-400">{title}</h3>
        <SourceBadge source={source} />
      </div>
      <p className="mb-2 text-sm leading-relaxed text-gray-300">{synopsis}</p>
      <p className="mb-3 flex items-start gap-1.5 text-sm italic text-gray-400">
        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-amber-500/60" fill="currentColor">
          <path d="M8 1a5 5 0 0 0-2 9.584V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.416A5 5 0 0 0 8 1zm0 2a3 3 0 0 1 1.5 5.598V11h-3V8.598A3 3 0 0 1 8 3zM6 14h4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1z" />
        </svg>
        {hint}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {extraNote && (
        <p className="mt-2 rounded bg-amber-500/10 px-2 py-1.5 text-xs text-amber-300">
          5.5e: {extraNote}
        </p>
      )}
    </motion.button>
  );
}
