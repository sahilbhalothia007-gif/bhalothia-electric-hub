import { notFound } from "next/navigation";
import { getProduct, products } from "../data";
import ProductHero from "./components/ProductHero";
import ProductSpecs from "./components/ProductSpecs";
import ProductFeatures from "./components/ProductFeatures";
import ProductGallery from "./components/ProductGallery";
import ProductCTA from "./components/ProductCTA";
import RelatedProducts from "./components/RelatedProducts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | Bhalothia Electric Hub`,
    description: `${product.name} electric scooter with ${product.range} range and ${product.speed} top speed.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <ProductHero product={product} />
      <ProductSpecs product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <RelatedProducts currentSlug={product.slug} />
      <ProductCTA product={product} />
    </main>
  );
}