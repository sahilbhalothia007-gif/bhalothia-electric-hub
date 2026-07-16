"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Gauge, IndianRupee } from "lucide-react";

type ProductCardProps = {
  name: string;
  image: string;
  price: string;
  range: string;
  speed: string;
  slug: string;
};

export default function ProductCard({
  name,
  image,
  price,
  range,
  speed,
  slug,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40">

      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-8">

        <Image
          src={image}
          alt={name}
          width={700}
          height={700}
          className="mx-auto h-64 w-auto object-contain transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="space-y-6 p-8">

        <h3 className="text-3xl font-bold text-white">
          {name}
        </h3>

        <div className="flex items-center text-cyan-400">

          <IndianRupee className="mr-1 h-6 w-6" />

          <span className="text-3xl font-black">
            {price}
          </span>

        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

            <div className="flex items-center gap-2">

              <BatteryCharging className="h-5 w-5 text-cyan-400" />

              <span className="text-slate-300">
                Range
              </span>

            </div>

            <span className="font-semibold text-white">
              {range}
            </span>

          </div>

          <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">

            <div className="flex items-center gap-2">

              <Gauge className="h-5 w-5 text-cyan-400" />

              <span className="text-slate-300">
                Top Speed
              </span>

            </div>

            <span className="font-semibold text-white">
              {speed}
            </span>

          </div>

        </div>

        <div className="flex gap-4">

          <Link
            href={`/products/${slug}`}
            className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:scale-105"
          >
            View Details
          </Link>

          <Link
            href="/booking"
            className="flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

      </div>

    </div>
  );
}