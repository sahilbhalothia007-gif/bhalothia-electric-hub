"use client";

import { Gift, ShieldCheck, CreditCard, Bike } from "lucide-react";

const offers = [
  {
    icon: Gift,
    title: "Free Helmet",
  },
  {
    icon: CreditCard,
    title: "Easy EMI Available",
  },
  {
    icon: Bike,
    title: "Free Test Ride",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Included",
  },
];

export default function OfferBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 py-5">

      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6">

        {offers.map((offer, index) => {
          const Icon = offer.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 backdrop-blur-md transition duration-300 hover:scale-105 hover:bg-white/20"
            >
              <Icon className="h-6 w-6 text-yellow-300" />

              <span className="font-semibold text-white">
                {offer.title}
              </span>
            </div>
          );
        })}

      </div>
    </section>
  );
}