"use client";

import {
  BatteryCharging,
  ShieldCheck,
  Wrench,
  Zap,
  Leaf,
  BadgeIndianRupee,
} from "lucide-react";

const features = [
  {
    icon: BatteryCharging,
    title: "Long Range Battery",
    description:
      "Enjoy up to 120 KM range on a single charge with reliable battery technology.",
  },
  {
    icon: Zap,
    title: "Fast Charging",
    description:
      "Charge your electric scooter quickly and get back on the road in less time.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    description:
      "Comprehensive warranty and genuine spare parts for complete peace of mind.",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description:
      "Professional technicians with fast and trusted after-sales support.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description:
      "Best prices with easy finance options and attractive offers.",
  },
  {
    icon: Leaf,
    title: "Eco Friendly",
    description:
      "Ride green with zero emissions and help create a cleaner future.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Premium Electric Scooter Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Bhalothia Electric Hub provides premium scooters, trusted service,
            affordable pricing and complete customer satisfaction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">
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