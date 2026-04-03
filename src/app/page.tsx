import FlowchartWizard from "@/components/FlowchartWizard";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
