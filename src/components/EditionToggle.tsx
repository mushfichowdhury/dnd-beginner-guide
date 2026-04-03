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
    <div className="mb-6 flex justify-center">
      <div className="inline-flex rounded-lg border border-gray-700 bg-gray-900 p-1">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              edition === opt.value
                ? "bg-amber-500 text-gray-950"
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
