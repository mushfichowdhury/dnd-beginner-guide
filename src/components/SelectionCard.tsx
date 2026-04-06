"use client";

import { motion } from "framer-motion";
import { Source, SubclassFeature, HealthTier, ClassProficiencies } from "@/types";
import { Tier } from "@/data/rankings";
import SourceBadge from "./SourceBadge";
import TierBadge from "./TierBadge";
import Tooltip from "./Tooltip";
import { traitDescriptions } from "@/data/traitDescriptions";
import { skillDescriptions } from "@/data/skillDescriptions";

const healthTierStyles: Record<HealthTier, string> = {
  "High": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "Above Average": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Average": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Low": "bg-red-500/20 text-red-300 border-red-500/30",
};

interface SelectionCardProps {
  title: string;
  synopsis: string;
  hint: string;
  source: Source;
  selected: boolean;
  onClick: () => void;
  tags?: string[];
  extraNote?: string;
  tier?: Tier;
  features?: SubclassFeature[];
  healthTier?: HealthTier;
  hitDie?: string;
  proficiencies?: ClassProficiencies;
  onShowDetails?: () => void;
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
  tier,
  features,
  healthTier,
  hitDie,
  proficiencies,
  onShowDetails,
}: SelectionCardProps) {

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`card-celestial flex h-full w-full flex-col cursor-pointer rounded-xl border p-4 text-left transition-all duration-300 ${
        selected
          ? "ring-2 ring-white/70 bg-gray-800/90 border-white/50"
          : "border-indigo-500/20 bg-gray-900/80 hover:border-white/30 hover:bg-gray-900/95"
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="min-w-0 truncate text-lg font-semibold text-white font-heading text-glow-sm">{title}</h3>
        <div className="flex shrink-0 items-center gap-1.5">
          {tier && <TierBadge tier={tier} />}
          <SourceBadge source={source} />
        </div>
      </div>
      <p className="mb-2 text-sm leading-relaxed text-gray-300">{synopsis}</p>
      <p className="mb-3 flex items-start gap-1.5 text-sm italic text-gray-400">
        <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0 text-white/50" fill="currentColor">
          <path d="M8 1a5 5 0 0 0-2 9.584V12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.416A5 5 0 0 0 8 1zm0 2a3 3 0 0 1 1.5 5.598V11h-3V8.598A3 3 0 0 1 8 3zM6 14h4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1z" />
        </svg>
        {hint}
      </p>

      {/* Health tier + role tags */}
      <div className="flex flex-wrap gap-1.5">
        {healthTier && (
          <Tooltip text={hitDie ? `Hit Die: ${hitDie}` : undefined}>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${healthTierStyles[healthTier]}`}
            >
              {healthTier === "Above Average" ? "Above Avg" : healthTier} Health
            </span>
          </Tooltip>
        )}
        {tags && tags.map((tag) => (
          <Tooltip key={tag} text={traitDescriptions[tag]}>
            <span
              className="inline-flex items-center justify-center rounded-full bg-gray-800/80 border border-gray-700/50 px-2 py-0.5 text-xs text-gray-400"
            >
              {tag}
            </span>
          </Tooltip>
        ))}
      </div>

      {/* Proficiency chips */}
      {proficiencies && (
        <div className="mt-3 space-y-2 border-t border-gray-700/50 pt-3">
          {proficiencies.armor.length > 0 && (
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Armor</span>
              <div className="mt-0.5 flex flex-wrap gap-1">
                {proficiencies.armor.map((a) => (
                  <span key={a} className="rounded-md bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 text-[10px] text-indigo-300">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
          {proficiencies.weapons.length > 0 && (
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Weapons</span>
              <div className="mt-0.5 flex flex-wrap gap-1">
                {proficiencies.weapons.map((w) => (
                  <span key={w} className="rounded-md bg-purple-500/10 border border-purple-500/20 px-1.5 py-0.5 text-[10px] text-purple-300">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">Saving Throws</span>
            <div className="mt-0.5 flex flex-wrap gap-1">
              {proficiencies.savingThrows.map((s) => (
                <span key={s} className="rounded-md bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 text-[10px] text-cyan-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Skills (choose {proficiencies.skills.choose})
            </span>
            <div className="mt-0.5 flex flex-wrap gap-1">
              {proficiencies.skills.from.map((s) => (
                <Tooltip key={s} text={skillDescriptions[s]}>
                  <span className="rounded-md bg-gray-700/50 border border-gray-600/30 px-1.5 py-0.5 text-[10px] text-gray-400">
                    {s}
                  </span>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-auto">
      {extraNote && (
        <p className="mt-2 rounded bg-white/10 px-2 py-1.5 text-xs text-gray-200">
          5.5e: {extraNote}
        </p>
      )}
      {features && features.length > 0 && onShowDetails && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onShowDetails();
          }}
          className="mt-3 flex w-full items-center justify-center gap-1 text-xs text-white/60 transition-colors hover:text-white"
        >
          <span>Show abilities by level</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M6 3a1 1 0 0 0-.707 1.707L9.586 9l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 6 3z" />
          </svg>
        </button>
      )}
      </div>
    </motion.div>
  );
}
