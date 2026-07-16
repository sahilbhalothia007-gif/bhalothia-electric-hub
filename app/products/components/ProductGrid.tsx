"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    name: "Ampra",
    slug: "ampra",
    image: "/products/ampra.png",
    price: "89,999",
    range: "120 KM",
    speed: "65 km/h",
  },
  {
    name: "Spirit Pro",
    slug: "spirit-pro",
    image: "/products/spirit-pro.png",
    price: "99,999",
    range: "140 KM",
    speed: "70 km/h",
  },
  {
    name: "Spirit+",
    slug: "spirit-plus",
    image: "/products/spirit-plus.png",
    price: "1,09,999",
    range: "160 KM",
    speed: "75 km/h",
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            name={product.name}
            image={product.image}
            price={product.price}
            range={product.range}
            speed={product.speed}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}