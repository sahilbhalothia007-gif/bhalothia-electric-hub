"use client";

import Image from "next/image";

const brands = [
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
];

export default function BrandSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Our Brands
          </span>

          <h2 className="mt-5 text-5xl font-bold text-gray-900">
            Trusted Electric Vehicle Brands
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            We offer premium electric scooters from India's trusted EV brands,
            ensuring quality, performance and reliable after-sales support.
          </p>

        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">

          {brands.map((brand, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="relative h-24">

                <Image
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  fill
                  className="object-contain grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-110"
                />

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}