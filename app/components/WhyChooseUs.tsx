"use client";

import {
  ShieldCheck,
  Wrench,
  Truck,
  BadgeIndianRupee,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authorized Dealer",
    description:
      "100% genuine Windson electric scooters with official warranty support.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Wrench,
    title: "Expert Service",
    description:
      "Highly trained technicians and genuine spare parts for every scooter.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick delivery and complete registration assistance for your vehicle.",
    color: "from-sky-500 to-blue-700",
  },
  {
    icon: BadgeIndianRupee,
    title: "Easy EMI",
    description:
      "Affordable finance options with simple documentation and quick approval.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Users,
    title: "1000+ Customers",
    description:
      "Trusted by hundreds of happy customers across the region.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Award,
    title: "Premium Support",
    description:
      "Dedicated customer care before and after every purchase.",
    color: "from-orange-500 to-red-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Why Choose Bhalothia Electric Hub
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Trusted Electric Scooter Dealership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We provide premium electric scooters, expert service,
            transparent pricing and complete customer satisfaction.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:bg-white/10"
              >
                {/* Glow */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 transition duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${reason.color} shadow-xl`}
                >
                  <Icon className="h-10 w-10 text-white" />
                </div>

                {/* Content */}

                <h3 className="mt-8 text-3xl font-bold text-white">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {reason.description}
                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />

              </div>
            );
          })}
        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl lg:grid-cols-4">
          <div className="text-center">
            <div className="text-5xl font-black text-cyan-400">1000+</div>
            <p className="mt-3 text-slate-300">Happy Customers</p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-black text-cyan-400">5+</div>
            <p className="mt-3 text-slate-300">Years Experience</p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-black text-cyan-400">24/7</div>
            <p className="mt-3 text-slate-300">Customer Support</p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-black text-cyan-400">100%</div>
            <p className="mt-3 text-slate-300">Genuine Products</p>
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 backdrop-blur-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>
              <h3 className="text-3xl font-bold text-white">
                Experience the Future of Electric Mobility
              </h3>

              <p className="mt-4 max-w-2xl text-slate-300">
                Visit Bhalothia Electric Hub today and discover premium
                Windson electric scooters with expert guidance,
                affordable finance options and trusted after-sales service.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Book Test Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}