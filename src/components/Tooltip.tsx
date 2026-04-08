"use client";

import { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: React.ReactNode;
  text?: string;
}

export default function Tooltip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  if (!text) return <>{children}</>;

  const show = () => {
    if (ref.current) {
      const r = ref.current.getBoundingClientRect();
      setPos({ top: r.top + window.scrollY, left: r.left + r.width / 2 });
    }
    setVisible(true);
  };

  return (
    <>
      <span ref={ref} className="inline-flex" onMouseEnter={show} onMouseLeave={() => setVisible(false)}>
        {children}
      </span>
      {visible && createPortal(
        <span
          style={{ position: "fixed", top: pos.top, left: pos.left, transform: "translate(-50%, calc(-100% - 10px))", zIndex: 9999 }}
          className="pointer-events-none w-max max-w-[14rem] rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 text-xs leading-relaxed text-gray-200 shadow-xl"
        >
          {text}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-600" />
        </span>,
        document.body
      )}
    </>
  );
}
