"use client";

import { Edition } from "@/types";

interface EditionToggleProps {
  edition: Edition;
  onChange: (e: Edition) => void;
}

const options: { value: Edition; label: string }[] = [
  { value: "5e", label: "5e (2014)" },
  { value: "5.5e", label: "5.5e (2024)" },
];

export default function EditionToggle({
  edition,
  onChange,
}: EditionToggleProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex rounded-xl border border-indigo-500/20 bg-gray-900/80 p-1 card-celestial">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium font-heading transition-all ${
              edition === opt.value
                ? "bg-amber-500 text-gray-950 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
