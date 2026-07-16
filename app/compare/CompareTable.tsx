import Image from "next/image";
import Link from "next/link";
import { products } from "../products/data";

export default function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="min-w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="p-6 text-left text-white">Feature</th>

            {products.map((product) => (
              <th key={product.slug} className="p-6 text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mx-auto h-32 w-auto object-contain"
                />

                <h3 className="mt-4 text-xl font-bold text-white">
                  {product.name}
                </h3>

                <p className="text-cyan-400 font-bold">
                  {product.price}
                </p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Range</td>

            {products.map((product) => (
              <td
                key={product.slug + "-range"}
                className="p-4 text-center text-slate-300"
              >
                {product.range}
              </td>
            ))}
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Top Speed</td>

            {products.map((product) => (
              <td
                key={product.slug + "-speed"}
                className="p-4 text-center text-slate-300"
              >
                {product.speed}
              </td>
            ))}
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Battery</td>

            {products.map((product) => (
              <td
                key={product.slug + "-battery"}
                className="p-4 text-center text-slate-300"
              >
                {product.battery}
              </td>
            ))}
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Motor</td>

            {products.map((product) => (
              <td
                key={product.slug + "-motor"}
                className="p-4 text-center text-slate-300"
              >
                {product.motor}
              </td>
            ))}
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Warranty</td>

            {products.map((product) => (
              <td
                key={product.slug + "-warranty"}
                className="p-4 text-center text-slate-300"
              >
                {product.warranty}
              </td>
            ))}
          </tr>

          <tr className="border-t border-white/10">
            <td className="p-4 font-semibold text-white">Actions</td>

            {products.map((product) => (
              <td
                key={product.slug + "-action"}
                className="space-y-3 p-4 text-center"
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="block rounded-lg bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-700"
                >
                  View Details
                </Link>

                <Link
                  href={`/booking?model=${encodeURIComponent(product.name)}`}
                  className="block rounded-lg border border-cyan-500 px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                >
                  Book Test Ride
                </Link>
              </td>
            ))}
          </tr>

        </tbody>
      </table>
    </div>
  );
}