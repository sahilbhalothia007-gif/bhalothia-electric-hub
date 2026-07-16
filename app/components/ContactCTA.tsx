"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Contact Bhalothia Electric Hub
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Ready To Ride Electric?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Visit our showroom today and explore the latest Windson
            electric scooters. Book your free test ride and get the
            best offers with easy finance options.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left Side */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
            <div className="space-y-6">

              {/* Phone */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20">
                  <Phone className="h-7 w-7 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Call Us</h3>
                  <p className="mt-2 text-slate-300">+91 98765 43210</p>
                  <p className="text-sm text-slate-400">
                    Mon – Sat | 9:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Address */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20">
                  <MapPin className="h-7 w-7 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Showroom Address
                  </h3>
                  <p className="mt-2 text-slate-300">
                    Near Gas Godown, Jhumpa Road, Behal, Haryana
                  </p>
                </div>
              </div>

              {/* Timing */}

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/20">
                  <Clock className="h-7 w-7 text-cyan-400" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Opening Hours
                  </h3>
                  <p className="mt-2 text-slate-300">Monday – Saturday</p>
                  <p className="text-slate-400">9:00 AM – 7:00 PM</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h3 className="text-3xl font-bold text-white">
              Book Your Free Test Ride
            </h3>

            <p className="mt-4 text-slate-300">
              Contact us today to schedule your free test ride and get
              exclusive offers on premium electric scooters.
            </p>

            <div className="mt-10 space-y-5">
              <Link
                href="tel:+919876543210"
                className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call Now
              </Link>

              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="flex items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-green-500/20"
              >
                <MessageCircle className="mr-3 h-6 w-6 text-green-400" />
                Chat on WhatsApp
              </Link>

              <Link
                href="/contact"
                className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                Book Test Ride
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">
              <h4 className="text-xl font-bold text-white">Why Visit Us?</h4>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>✅ Official Windson Electric Scooter Dealer</li>
                <li>✅ Genuine Spare Parts</li>
                <li>✅ Easy EMI Available</li>
                <li>✅ Instant Test Ride</li>
                <li>✅ Best Exchange Offers</li>
              </ul>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}