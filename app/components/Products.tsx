"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Gauge,
  IndianRupee,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ampra",
    image: "/products/ampra.png",
    price: "₹89,999",
    range: "120 KM",
    speed: "65 km/h",
    battery: "60V 30Ah Lithium",
    badge: "Best Seller",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Spirit Pro",
    image: "/products/spirit-pro.png",
    price: "₹99,999",
    range: "140 KM",
    speed: "70 km/h",
    battery: "72V 32Ah Lithium",
    badge: "New Launch",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    id: 3,
    name: "Spirit+",
    image: "/products/spirit-plus.png",
    price: "₹1,09,999",
    range: "160 KM",
    speed: "75 km/h",
    battery: "72V 40Ah Lithium",
    badge: "Top Model",
    color: "from-sky-500 to-blue-700",
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    switch (sort) {
      case "price-low":
        return [...filtered].sort(
          (a, b) =>
            Number(a.price.replace(/[^\d]/g, "")) -
            Number(b.price.replace(/[^\d]/g, ""))
        );

      case "price-high":
        return [...filtered].sort(
          (a, b) =>
            Number(b.price.replace(/[^\d]/g, "")) -
            Number(a.price.replace(/[^\d]/g, ""))
        );

      case "range":
        return [...filtered].sort(
          (a, b) =>
            Number(b.range.replace(/[^\d]/g, "")) -
            Number(a.range.replace(/[^\d]/g, ""))
        );

      default:
        return filtered;
    }
  }, [search, sort]);

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Premium Collection
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Explore Our Electric Scooters
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Discover premium electric scooters with modern styling,
            powerful performance, long battery range and dependable
            after-sales support.
          </p>

          {/* Search & Sort */}
          <div className="mt-10 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search scooter..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition focus:border-cyan-500"
              />
            </div>

            <div className="relative">
              <SlidersHorizontal className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-white/10 bg-slate-900 py-4 pl-12 pr-10 text-white outline-none transition focus:border-cyan-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low → High</option>
                <option value="price-high">Price: High → Low</option>
                <option value="range">Highest Range</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:bg-white/10"
            >
              {/* Badge */}
              <div
                className={`absolute left-5 top-5 z-20 rounded-full bg-gradient-to-r ${product.color} px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg`}
              >
                {product.badge}
              </div>

              {/* Image */}
              <div className="relative overflow-hidden p-8">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}
                />

                <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />

                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={700}
                  className="relative mx-auto h-72 w-auto object-contain transition duration-500 group-hover:scale-110 group-hover:rotate-1"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-6 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-white">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-green-400">
                    <IndianRupee className="h-4 w-4" />
                    <span className="text-sm font-semibold">
                      Best Price
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                  {product.price}
                </div>

                {/* Specifications */}
                <div className="grid gap-4">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <BatteryCharging className="h-6 w-6 text-cyan-400" />
                      <span className="text-slate-300">Range</span>
                    </div>

                    <span className="font-bold text-white">
                      {product.range}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <Gauge className="h-6 w-6 text-cyan-400" />
                      <span className="text-slate-300">Top Speed</span>
                    </div>

                    <span className="font-bold text-white">
                      {product.speed}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <Zap className="h-6 w-6 text-cyan-400" />
                      <span className="text-slate-300">Battery</span>
                    </div>

                    <span className="font-bold text-white">
                      {product.battery}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-cyan-400" />
                      <span className="text-slate-300">Warranty</span>
                    </div>

                    <span className="font-bold text-white">
                      Up to 3 Years
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-4 pt-2">
                  <Link
                    href="/booking"
                    className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${product.color} px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105`}
                  >
                    Book Test Ride
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>

                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}

        {filteredProducts.length === 0 && (
          <div className="mt-16 rounded-[32px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-white">
              No Scooters Found
            </h3>

            <p className="mt-4 text-slate-400">
              Try searching with a different scooter name.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSort("default");
              }}
              className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 backdrop-blur-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold text-white">
                Ready to Ride Electric?
              </h3>

              <p className="mt-3 max-w-2xl text-slate-300">
                Visit Bhalothia Electric Hub today and explore our premium
                collection of electric scooters. Book a free test ride and
                experience the future of smart mobility.
              </p>

            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
              >
                Book Test Ride

                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                View All Scooters
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}