import Link from "next/link";
import Image from "next/image";
import { products } from "../../data";

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({ currentSlug }: Props) {
  const relatedProducts = products.filter(
    (product) => product.slug !== currentSlug
  );

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="text-center">

          <h2 className="text-4xl font-black text-white">
            Related Scooters
          </h2>

          <p className="mt-4 text-slate-400">
            Explore more premium electric scooters.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {relatedProducts.map((product) => (

            <div
              key={product.slug}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-500/40"
            >

              <div className="p-8">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="mx-auto h-56 w-auto object-contain"
                />

                <h3 className="mt-6 text-3xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="mt-3 text-2xl font-black text-cyan-400">
                  {product.price}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}