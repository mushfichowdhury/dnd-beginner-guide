import FloatingParticlesBackground from "@/components/FloatingParticlesBackground";
import WizardShell from "@/components/WizardShell";

export default function Home() {
  return (
    <main className="relative min-h-screen isolate">
      {/* Celestial gradient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.15),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.12),_transparent_45%),radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_35%)]" />
      <FloatingParticlesBackground className="pointer-events-none fixed inset-0 opacity-100" />

      {/* Desktop layout with title */}
      <div className="relative z-10 hidden md:block mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="font-heading text-4xl font-bold text-white text-glow sm:text-5xl lg:text-6xl">
            D&amp;D Character Creator
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            A beginner-friendly guide to building your first character.
            <br className="hidden sm:block" />
            Pick your race, class, and subclass — scroll down to see the full picture.
          </p>
        </div>
        <WizardShell />
      </div>

      {/* Mobile layout — full-screen wizard handles its own title */}
      <div className="relative z-10 md:hidden">
        <WizardShell />
      </div>
    </main>
  );
}
