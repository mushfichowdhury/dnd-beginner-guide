import { Source } from "@/types";

const colorMap: Record<Source, string> = {
  PHB: "bg-gray-700 text-gray-200",
  "Xanathar's Guide": "bg-blue-900 text-blue-200",
  "Tasha's Cauldron": "bg-purple-900 text-purple-200",
  "Volo's Guide": "bg-green-900 text-green-200",
  "Mordenkainen's": "bg-red-900 text-red-200",
};

export default function SourceBadge({ source }: { source: Source }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${colorMap[source]}`}
    >
      {source}
    </span>
  );
}
