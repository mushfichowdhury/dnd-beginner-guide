"use client";

import { motion } from "framer-motion";

interface StarConnectorProps {
  label?: string;
}

export default function StarConnector({ label }: StarConnectorProps) {
  return (
    <div className="flex flex-col items-center py-4">
      {/* Upper line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-8 w-px origin-top"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(167, 139, 250, 0.4), rgba(255, 255, 255, 0.5))",
        }}
      />

      {/* Glowing star */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative"
      >
        {/* Outer glow */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(167,139,250,0.12) 50%, transparent 70%)",
          }}
        />
        {/* Inner glow pulse */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1.5 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Star core */}
        <div
          className="relative h-3 w-3 rounded-full"
          style={{
            background: "radial-gradient(circle, #ffffff 0%, #d1d5db 50%, #9ca3af 100%)",
            boxShadow: "0 0 12px rgba(255,255,255,0.7), 0 0 24px rgba(255,255,255,0.3), 0 0 48px rgba(167,139,250,0.15)",
          }}
        />
      </motion.div>

      {/* Optional label */}
      {label && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-xs font-medium tracking-wider text-gray-500 uppercase font-heading"
        >
          {label}
        </motion.span>
      )}

      {/* Lower line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="h-8 w-px origin-top"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(167, 139, 250, 0.4), transparent)",
        }}
      />
    </div>
  );
}
