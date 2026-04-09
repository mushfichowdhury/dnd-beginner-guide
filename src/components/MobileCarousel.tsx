"use client";

import { ReactNode, ReactElement, Children, useState, useEffect, useRef, useCallback } from "react";
import { motion, PanInfo, useMotionValue, animate as motionAnimate } from "framer-motion";

const SWIPE_THRESHOLD = 80;
const VELOCITY_THRESHOLD = 500;
const CARD_WIDTH_PERCENT = 85;
const CARD_GAP = 12;

interface MobileCarouselProps {
  children: ReactNode;
  tall?: boolean;
}

export default function MobileCarousel({ children, tall }: MobileCarouselProps) {
  const items = Children.toArray(children);
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const prevCountRef = useRef(total);

  // Measure container width
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Reset index when children change (e.g. new wizard step)
  useEffect(() => {
    if (total !== prevCountRef.current) {
      setActiveIndex(0);
      prevCountRef.current = total;
    }
  }, [total]);

  const cardWidth = containerWidth * (CARD_WIDTH_PERCENT / 100);
  const slideWidth = cardWidth + CARD_GAP;
  const sideInset = (containerWidth - cardWidth) / 2;

  const x = useMotionValue(sideInset);
  const dragStartX = useRef(0);
  const isAnimating = useRef(false);

  // Animate to target position when activeIndex changes
  useEffect(() => {
    const targetX = -activeIndex * slideWidth + sideInset;
    isAnimating.current = true;
    const controls = motionAnimate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    controls.then(() => { isAnimating.current = false; });
    return () => controls.stop();
  }, [activeIndex, slideWidth, sideInset, x]);

  const goTo = useCallback(
    (newIndex: number) => {
      if (newIndex < 0 || newIndex >= total) return;
      setActiveIndex(newIndex);
    },
    [total],
  );

  const handleDragStart = () => {
    dragStartX.current = x.get();
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (isAnimating.current) return;
    const { offset, velocity } = info;
    const absOffset = Math.abs(offset.x);
    const absVelocity = Math.abs(velocity.x);

    let direction = 0;
    // Require both distance AND speed, OR a very deliberate large drag (35% of container)
    if (
      (absOffset > SWIPE_THRESHOLD && absVelocity > VELOCITY_THRESHOLD) ||
      absOffset > containerWidth * 0.35
    ) {
      direction = offset.x < 0 ? 1 : -1;
    }

    if (direction !== 0) {
      goTo(activeIndex + direction);
    } else {
      // Snap back to current card
      const targetX = -activeIndex * slideWidth + sideInset;
      isAnimating.current = true;
      const controls = motionAnimate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
      controls.then(() => { isAnimating.current = false; });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goTo(activeIndex - 1);
    if (e.key === "ArrowRight") goTo(activeIndex + 1);
  };

  if (total === 0) return null;

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Card carousel"
      aria-roledescription="carousel"
      className="flex h-full flex-col outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:rounded-sm"
    >
      {/* Carousel viewport */}
      <div ref={containerRef} className="flex-1 overflow-hidden" style={{ touchAction: "none" }}>
        <motion.div
          className="flex h-full items-stretch"
          style={{ gap: CARD_GAP, x }}
          drag="x"
          dragDirectionLock
          dragMomentum={false}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {items.map((child, i) => (
            <motion.div
              key={(child as ReactElement).key ?? i}
              className={`shrink-0 ${tall ? "h-full" : ""}`}
              style={{ width: cardWidth || "85%" }}
              animate={{
                scale: i === activeIndex ? 1 : 0.92,
                opacity: i === activeIndex ? 1 : 0.4,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation row */}
      <div className="mt-4 flex shrink-0 items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous card"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:opacity-30 disabled:hover:border-gray-700 disabled:hover:text-white/60"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3a1 1 0 0 1 .707 1.707L6.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5A1 1 0 0 1 10 3z" />
          </svg>
        </button>

        <span
          aria-live="polite"
          aria-atomic="true"
          className="min-w-[4rem] text-center text-sm text-gray-400"
        >
          {activeIndex + 1} of {total}
        </span>

        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === total - 1}
          aria-label="Next card"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 text-white/60 transition-colors hover:border-white/40 hover:text-white disabled:opacity-30 disabled:hover:border-gray-700 disabled:hover:text-white/60"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M6 3a1 1 0 0 0-.707 1.707L9.586 9l-4.293 4.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 6 3z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
