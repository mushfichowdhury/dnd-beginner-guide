"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  glowMultiplier: number;
  color: string;
};

const STAR_COLORS = [
  { color: "#fbbf24", weight: 0.50 }, // amber/gold
  { color: "#60a5fa", weight: 0.25 }, // cool blue
  { color: "#a78bfa", weight: 0.15 }, // soft purple
  { color: "#f9fafb", weight: 0.10 }, // white
];

function pickStarColor(): string {
  const r = Math.random();
  let cumulative = 0;
  for (const star of STAR_COLORS) {
    cumulative += star.weight;
    if (r <= cumulative) return star.color;
  }
  return STAR_COLORS[0].color;
}

interface FloatingParticlesBackgroundProps {
  className?: string;
  particleCount?: number;
  particleSize?: number;
  particleOpacity?: number;
  glowIntensity?: number;
  movementSpeed?: number;
  mouseInfluence?: number;
}

export default function FloatingParticlesBackground({
  className,
  particleCount = 180,
  particleSize = 2.8,
  particleOpacity = 0.82,
  glowIntensity = 22,
  movementSpeed = 0.45,
  mouseInfluence = 300,
}: FloatingParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const sizeRef = useRef({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const createParticles = (width: number, height: number) => {
      const randomCoordinate = (dimension: number) => {
        const edgeBand = dimension * 0.22;
        const favorEdge = Math.random() < 0.38;

        if (!favorEdge) {
          return Math.random() * dimension;
        }

        return Math.random() < 0.5
          ? Math.random() * edgeBand
          : dimension - Math.random() * edgeBand;
      };

      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: randomCoordinate(width),
        y: randomCoordinate(height),
        vx: (Math.random() - 0.5) * movementSpeed,
        vy: (Math.random() - 0.5) * movementSpeed,
        size: 0.6 + Math.pow(Math.random(), 0.65) * particleSize,
        opacity: particleOpacity,
        baseOpacity: particleOpacity,
        glowMultiplier: 1,
        color: pickStarColor(),
      }));
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (!canvas || !container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      sizeRef.current = { width, height };
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const context = canvas.getContext("2d");

      if (context) {
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      createParticles(width, height);
    };

    const updateParticles = () => {
      const { width, height } = sizeRef.current;
      const mouse = mouseRef.current;

      particlesRef.current.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0 && distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          particle.vx -= (dx / distance) * force * 0.055;
          particle.vy -= (dy / distance) * force * 0.055;
          particle.opacity = Math.min(1, particle.baseOpacity + force * 0.72);
          particle.glowMultiplier += (1 + force * 3.6 - particle.glowMultiplier) * 0.22;
        } else {
          particle.opacity += (particle.baseOpacity - particle.opacity) * 0.08;
          particle.glowMultiplier += (1 - particle.glowMultiplier) * 0.08;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx += (Math.random() - 0.5) * 0.001;
        particle.vy += (Math.random() - 0.5) * 0.001;
        particle.vx *= 0.996;
        particle.vy *= 0.996;

        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
      });
    };

    const drawParticles = () => {
      const canvas = canvasRef.current;

      if (!canvas) {
        return;
      }

      const context = canvas.getContext("2d");
      const { width, height } = sizeRef.current;

      if (!context) {
        return;
      }

      context.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        context.save();
        context.globalAlpha = particle.opacity;
        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = glowIntensity * particle.glowMultiplier;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
        context.restore();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;

      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    resizeCanvas();
    animate();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    const container = containerRef.current;

    if (container) {
      resizeObserver.observe(container);
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    glowIntensity,
    mouseInfluence,
    movementSpeed,
    particleCount,
    particleOpacity,
    particleSize,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={className}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  );
}
