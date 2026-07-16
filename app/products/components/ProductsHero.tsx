"use client";

import Link from "next/link";
import { ArrowRight, BatteryCharging } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">

        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
          <BatteryCharging className="h-4 w-4" />
          Premium Electric Scooters
        </span>

        <h1 className="mt-8 text-5xl font-black text-white md:text-6xl lg:text-7xl">
          Explore Our
          <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Electric Scooters
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Discover the latest collection of premium Windson electric scooters
          with powerful performance, stylish design, long battery range and
          trusted after-sales support.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/booking"
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
    </section>
  );
}