import FloatingParticlesBackground from "@/components/FloatingParticlesBackground";
import FlowchartWizard from "@/components/FlowchartWizard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden isolate">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(120,113,108,0.24),_transparent_38%)]" />
      <FloatingParticlesBackground className="pointer-events-none fixed inset-0 opacity-100" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-amber-400 sm:text-5xl">
            D&amp;D Character Creator
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            A beginner-friendly guide to building your first character.
            <br className="hidden sm:block" />
            Pick your race, class, and subclass to see the full picture.
          </p>
        </div>
        <FlowchartWizard />
      </div>
    </main>
  );
}
