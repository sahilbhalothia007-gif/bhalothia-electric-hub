"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Star,
  Zap,
  Award,
  CheckCircle2,
  BatteryCharging,
} from "lucide-react";

const trustStats = [
  { value: "1000+", label: "Happy Customers", icon: Star },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Customer Support", icon: ShieldCheck },
];

const badges = [
  { title: "Government Approved", icon: CheckCircle2, top: "12%", left: "6%", delay: "0s" },
  { title: "Long Range", icon: BatteryCharging, top: "24%", right: "7%", delay: "1s" },
  { title: "Eco Friendly", icon: Zap, bottom: "18%", left: "10%", delay: "2s" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950" aria-label="Premium Electric Scooters">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-56 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-indigo-500/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950" />
      </div>

      {/* Floating Badges */}
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div
            key={badge.title}
            style={{ top: badge.top, left: badge.left, right: badge.right, bottom: badge.bottom, animationDelay: badge.delay }}
            className="absolute hidden lg:flex animate-bounce items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl"
          >
            <Icon className="h-4 w-4 text-cyan-400" />
            <span>{badge.title}</span>
          </div>
        );
      })}

      {/* Container */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-200">
                India's Trusted Electric Scooter Dealer
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Ride the
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Future of Mobility
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Discover premium electric scooters with stylish design,
              powerful performance, excellent mileage, and dependable
              after-sales support. Experience smart, eco-friendly travel
              with Bhalothia Electric Hub.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50"
              >
                Book Test Ride
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Explore Scooters
              </Link>
            </div>

            {/* Contact */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 backdrop-blur-xl">
                <Phone className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Need Assistance?</p>
                <a href="tel:+919999999999" className="text-lg font-semibold text-white hover:text-cyan-400">
                  +91 99999 99999
                </a>
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {trustStats.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/40 hover:bg-white/15"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{item.value}</h3>
                    <p className="mt-2 text-sm text-slate-300">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]" />
            <div className="absolute h-[420px] w-[420px] rounded-full border border-cyan-400/20" />
            <div className="absolute h-[580px] w-[580px] rounded-full border border-white/5" />

            <div className="relative w-full max-w-2xl rounded-[36px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl">
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <Image
                  src="/hero-scooter.png"
                  alt="Premium Electric Scooter"
                  width={900}
                  height={900}
                  priority
                  className="mx-auto w-full max-w-xl object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute left-0 top-12 hidden animate-pulse rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl lg:block">
              <p className="text-xs uppercase tracking-widest text-cyan-300">Battery</p>
              <h4 className="mt-2 text-2xl font-bold text-white">120 KM</h4>
              <p className="mt-1 text-sm text-slate-300">Single Charge Range</p>
            </div>

            <div className="absolute -right-4 bottom-16 hidden animate-pulse rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl lg:block">
              <p className="text-xs uppercase tracking-widest text-cyan-300">Top Speed</p>
              <h4 className="mt-2 text-2xl font-bold text-white">65 km/h</h4>
              <p className="mt-1 text-sm text-slate-300">Smooth Performance</p>
            </div>

            <div className="absolute bottom-0 left-20 hidden animate-bounce rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl xl:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <ShieldCheck className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Warranty</h4>
                  <p className="text-sm text-slate-300">Up to 3 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}