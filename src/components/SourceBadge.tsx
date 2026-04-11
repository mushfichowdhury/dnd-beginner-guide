import { Source } from "@/types";

const colorMap: Record<Source, string> = {
  PHB: "bg-gray-700 text-gray-200",
  "Xanathar's Guide": "bg-blue-900 text-blue-200",
  "Tasha's Cauldron": "bg-purple-900 text-purple-200",
  "Volo's Guide": "bg-green-900 text-green-200",
  "Mordenkainen's": "bg-red-900 text-red-200",
  "Explorer's Guide": "bg-amber-900 text-amber-200",
  Eberron: "bg-orange-900 text-orange-200",
  Ravnica: "bg-indigo-900 text-indigo-200",
  Theros: "bg-yellow-900 text-yellow-200",
  "Sword Coast": "bg-slate-800 text-slate-200",
  "Van Richten's": "bg-rose-900 text-rose-200",
  "Fizban's": "bg-red-800 text-red-200",
  Spelljammer: "bg-cyan-900 text-cyan-200",
  Dragonlance: "bg-stone-800 text-stone-200",
  Witchlight: "bg-teal-900 text-teal-200",
  "Critical Role": "bg-emerald-900 text-emerald-200",
  MCDM: "bg-sky-900 text-sky-200",
  "Kobold Press": "bg-lime-900 text-lime-200",
  Obojima: "bg-pink-900 text-pink-200",
};

export default function SourceBadge({ source }: { source: Source }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-medium ${colorMap[source]}`}
    >
      {source}
    </span>
  );
}
