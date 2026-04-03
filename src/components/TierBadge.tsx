import { Tier } from "@/data/rankings";

const tierColors: Record<Tier, string> = {
  S: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  A: "bg-green-500/20 text-green-300 border-green-500/40",
  B: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  C: "bg-gray-500/20 text-gray-400 border-gray-500/40",
};

export default function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-block rounded-full border px-2 py-0.5 text-xs font-bold ${tierColors[tier]}`}
    >
      {tier}-Tier
    </span>
  );
}
