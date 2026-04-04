"use client";

interface TooltipProps {
  children: React.ReactNode;
  text?: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  if (!text) return <>{children}</>;

  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-xs leading-relaxed text-gray-200 opacity-0 shadow-xl transition-opacity duration-150 group-hover:opacity-100">
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-600" />
      </span>
    </span>
  );
}
