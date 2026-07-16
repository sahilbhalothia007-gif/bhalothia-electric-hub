import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { Product } from "../../data";

type Props = {
  product: Product;
};

export default function ProductCTA({ product }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 backdrop-blur-2xl">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>
              <h2 className="text-4xl font-black text-white">
                Ready to Buy {product.name}?
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Visit Bhalothia Electric Hub for a free test ride, easy EMI,
                genuine accessories and the best exchange offers.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">

              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Book Test Ride
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="tel:+919876543210"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}