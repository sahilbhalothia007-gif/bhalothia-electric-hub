import Image from "next/image";
import type { Product } from "../../data";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-4xl font-black text-white">
            Product Gallery
          </h2>

          <p className="mt-4 text-slate-400">
            Explore the {product.name} from every angle.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <Image
                src={product.image}
                alt={`${product.name} ${item}`}
                width={700}
                height={700}
                className="h-80 w-full object-contain p-8 transition duration-500 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}