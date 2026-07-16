"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductSearch() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">
          Search Electric Scooters
        </h2>

        <input
          type="text"
          placeholder="Search scooter..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900 border border-green-500 rounded-xl p-4 text-white mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/products/${item.slug}`}
            >
              <div className="bg-gray-900 rounded-3xl border border-green-500 p-6 hover:scale-105 transition">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="mx-auto"
                />

                <h3 className="text-2xl font-bold mt-6">
                  {item.name}
                </h3>

                <p className="text-green-400 mt-2">
                  {item.price}
                </p>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}