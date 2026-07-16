import { ShieldCheck, Zap, BatteryCharging, Wrench, Gauge, Bike } from "lucide-react";

const features = [
  {
    title: "High Performance BLDC Motor",
    description: "Smooth acceleration with powerful and efficient BLDC technology.",
    icon: Zap,
  },
  {
    title: "Long Battery Life",
    description: "Premium lithium battery with extended riding range.",
    icon: BatteryCharging,
  },
  {
    title: "Advanced Safety",
    description: "Reliable braking system and superior road stability.",
    icon: ShieldCheck,
  },
  {
    title: "Low Maintenance",
    description: "Designed for hassle-free ownership with minimal servicing.",
    icon: Wrench,
  },
  {
    title: "Digital Display",
    description: "Smart dashboard showing speed, battery and riding data.",
    icon: Gauge,
  },
  {
    title: "Comfortable Ride",
    description: "Ergonomic seating and premium suspension for daily commuting.",
    icon: Bike,
  },
];

export default function ProductFeatures() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <h2 className="text-4xl font-black text-white">
            Premium Features
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need for a smooth, comfortable and reliable ride.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}