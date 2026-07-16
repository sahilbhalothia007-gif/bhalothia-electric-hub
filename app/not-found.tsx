"use client";

import Link from "next/link";
import { Home, Bike, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-2xl text-center">
        <div className="mb-6 text-8xl font-black text-cyan-400">404</div>

        <h1 className="text-4xl font-bold">
          Oops! Page Not Found
        </h1>

        <p className="mt-6 text-lg text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
          >
            <Bike className="mr-2 h-5 w-5" />
            View Scooters
          </Link>
        </div>

        <Link
  href="/"
  className="mt-6 inline-flex items-center text-cyan-400 transition hover:text-cyan-300"
>
  <ArrowLeft className="mr-2 h-4 w-4" />
  Go Back
</Link>
      </div>
    </main>
  );
}