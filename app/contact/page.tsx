import Contact from "../components/Contact";

export const metadata = {
  title: "Contact Us",
  description: "Contact Bhalothia Electric Hub",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Contact />
    </main>
  );
}