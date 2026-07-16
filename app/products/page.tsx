import ProductsHero from "./components/ProductsHero";
import ProductGrid from "./components/ProductGrid";
import ProductCTA from "./components/ProductCTA";

export const metadata = {
  title: "Electric Scooters | Bhalothia Electric Hub",
  description:
    "Explore Ampra, Spirit Pro and Spirit+ electric scooters at Bhalothia Electric Hub.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <ProductsHero />
      <ProductGrid />
      <ProductCTA />
    </main>
  );
}