import CompareTable from "./CompareTable";

export const metadata = {
  title: "Compare Scooters",
  description:
    "Compare Windson electric scooters and choose the perfect model for your needs.",
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
              Scooter Comparison
            </span>

            <h1 className="mt-6 text-5xl font-black md:text-6xl">
              Compare Windson Electric Scooters
            </h1>

            <p className="mt-6 text-lg text-slate-400">
              Compare price, range, battery, speed and warranty to choose
              the perfect electric scooter.
            </p>
          </div>

          <div className="mt-16">
            <CompareTable />
          </div>
        </div>
      </section>
    </main>
  );
}