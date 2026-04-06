"use client";

import { motion } from "framer-motion";
import { Source } from "@/types";
import SourceBadge from "./SourceBadge";
import type { SortMode } from "@/hooks/useCharacterWizard";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-center text-2xl font-bold text-gray-100 font-heading text-glow-sm">
      {children}
    </h2>
  );
}

export function RedditRankToggle({
  value,
  onChange,
}: {
  value: SortMode;
  onChange: (mode: SortMode) => void;
}) {
  const isReddit = value === "reddit";
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="text-xs text-gray-400">Rank by Reddit?</span>
      <button
        type="button"
        role="switch"
        aria-checked={isReddit}
        onClick={() => onChange(isReddit ? "default" : "reddit")}
        className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
          isReddit ? "bg-indigo-600" : "bg-gray-700"
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
            isReddit ? "translate-x-[18px]" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function CompletedStepCard({
  label,
  name,
  source,
  detail,
  onEdit,
}: {
  label: string;
  name: string;
  source: Source;
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
            <p className="truncate font-heading font-bold text-white text-glow-sm">{name}</p>
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

export function SummaryCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
      className="card-celestial rounded-xl border border-indigo-500/20 bg-gray-900/80 p-5"
    >
      {children}
    </motion.div>
  );
}

export function SummaryLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
      {children}
    </h3>
  );
}
