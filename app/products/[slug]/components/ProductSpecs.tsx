import {
  BatteryCharging,
  Bike,
  Clock3,
  Gauge,
  Palette,
  ShieldCheck,
  Zap,
} from "lucide-react";
import type { Product } from "../../data";

type Props = {
  product: Product;
};

const specs = (product: Product) => [
  {
    label: "Battery",
    value: product.battery,
    icon: BatteryCharging,
  },
  {
    label: "Motor",
    value: product.motor,
    icon: Zap,
  },
  {
    label: "Top Speed",
    value: product.speed,
    icon: Gauge,
  },
  {
    label: "Range",
    value: product.range,
    icon: Bike,
  },
  {
    label: "Charging Time",
    value: product.charging,
    icon: Clock3,
  },
  {
    label: "Warranty",
    value: product.warranty,
    icon: ShieldCheck,
  },
];

export default function ProductSpecs({ product }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Technical Specifications
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            {product.name} Specifications
          </h2>

          <p className="mt-5 text-lg text-slate-400">
            Complete technical specifications, performance details,
            battery information and warranty coverage.
          </p>

        </div>

        {/* Specs Grid */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {specs(product).map((spec) => {
            const Icon = spec.icon;

            return (
              <div
                key={spec.label}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/10"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <p className="text-sm uppercase tracking-wider text-slate-400">
                  {spec.label}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {spec.value}
                </h3>
              </div>
            );
          })}
        </div>
                {/* Available Colors */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <Palette className="h-7 w-7 text-cyan-400" />

            <h3 className="text-3xl font-bold text-white">
              Available Colors
            </h3>
          </div>

          <div className="flex flex-wrap gap-5">
            {product.colors.map((color) => (
              <div
                key={color}
                className="flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 transition hover:border-cyan-400 hover:bg-cyan-500/20"
              >
                <span className="h-4 w-4 rounded-full bg-cyan-400" />

                <span className="font-semibold text-white">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Card */}

        <div className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-10 backdrop-blur-2xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-10 w-10 text-cyan-400" />

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Manufacturer Warranty
                  </h3>

                  <p className="mt-2 text-slate-300">
                    Genuine warranty support with trusted after-sales service
                    from Bhalothia Electric Hub.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 px-8 py-6 text-center backdrop-blur-xl">
              <p className="text-sm uppercase tracking-widest text-cyan-300">
                Coverage
              </p>

              <h3 className="mt-2 text-4xl font-black text-white">
                {product.warranty}
              </h3>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}

        <div className="mt-20">
          <h3 className="mb-8 text-3xl font-bold text-white">
            Why Choose {product.name}?
          </h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Long Battery Life",
              "Fast Charging",
              "Premium Build Quality",
              "Low Maintenance",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30"
              >
                <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-cyan-400" />

                <h4 className="font-semibold text-white">
                  {feature}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}