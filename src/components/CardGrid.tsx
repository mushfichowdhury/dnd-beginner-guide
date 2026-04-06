"use client";

import { ReactNode, Children } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileCarousel from "./MobileCarousel";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

interface CardGridProps {
  children: ReactNode;
  tall?: boolean;
}

export default function CardGrid({ children, tall }: CardGridProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileCarousel tall={tall}>{children}</MobileCarousel>;
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants} className="h-full">{child}</motion.div>
      ))}
    </motion.div>
  );
}
