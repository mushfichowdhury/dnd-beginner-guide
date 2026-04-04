"use client";

import { motion } from "framer-motion";

interface FlowArrowProps {
  direction?: "down" | "right";
  className?: string;
}

export default function FlowArrow({
  direction = "down",
  className = "",
}: FlowArrowProps) {
  const isDown = direction === "down";

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={isDown ? 24 : 48}
        height={isDown ? 48 : 24}
        viewBox={isDown ? "0 0 24 48" : "0 0 48 24"}
        fill="none"
        className="text-white/50"
      >
        <motion.path
          d={
            isDown
              ? "M12 4 L12 38 M6 32 L12 42 L18 32"
              : "M4 12 L38 12 M32 6 L42 12 L32 18"
          }
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
