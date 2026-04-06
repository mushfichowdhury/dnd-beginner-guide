import FloatingParticlesBackground from "@/components/FloatingParticlesBackground";
import WizardShell from "@/components/WizardShell";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate">
      {/* Celestial gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.12),_transparent_45%),radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_35%)]" />
      <FloatingParticlesBackground className="pointer-events-none fixed inset-0 opacity-100" />

      <WizardShell />
    </main>
  );
}
