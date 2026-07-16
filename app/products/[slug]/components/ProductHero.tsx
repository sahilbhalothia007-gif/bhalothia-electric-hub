"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { Product } from "../../data";

type Props = {
  product: Product;
};

export default function ProductHero({ product }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Windson Premium Electric Scooter
          </span>

          <h1 className="mt-6 text-5xl font-black text-white md:text-6xl">
            {product.name}
          </h1>

          <div className="mt-5 text-5xl font-black text-cyan-400">
            {product.price}
          </div>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Experience the next generation of electric mobility with premium
            design, powerful performance, long-range battery, smooth riding
            comfort and advanced smart features.
          </p>

          {/* Premium Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-green-300">Availability</p>

              <h3 className="mt-2 text-xl font-bold text-white">
                In Stock
              </h3>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-cyan-300">EMI Starts</p>

              <h3 className="mt-2 text-xl font-bold text-white">
                ₹2,999 / Month
              </h3>
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-orange-300">Offer</p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Free Helmet
              </h3>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <BatteryCharging className="mb-3 h-7 w-7 text-cyan-400" />

              <p className="text-sm text-slate-400">Range</p>

              <h3 className="text-xl font-bold text-white">
                {product.range}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Gauge className="mb-3 h-7 w-7 text-cyan-400" />

              <p className="text-sm text-slate-400">Top Speed</p>

              <h3 className="text-xl font-bold text-white">
                {product.speed}
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <Zap className="mb-3 h-7 w-7 text-cyan-400" />

              <p className="text-sm text-slate-400">Battery</p>

              <h3 className="text-lg font-bold text-white">
                {product.battery}
              </h3>
            </div>
          </div>

          {/* Warranty */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
            <ShieldCheck className="h-8 w-8 text-cyan-400" />

            <div>
              <p className="text-sm text-cyan-300">
                Manufacturer Warranty
              </p>

              <h3 className="text-xl font-bold text-white">
                Up to 3 Years
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={`/booking?model=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Book Test Ride

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="https://wa.me/919517860244"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-[150px]" />

          <Image
            src={product.image}
            alt={product.name}
            width={900}
            height={900}
            priority
            className="relative mx-auto w-full max-w-xl object-contain transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}