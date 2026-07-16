import Hero from "./components/Hero";
import OfferBanner from "./components/OfferBanner";
import BrandSection from "./components/BrandSection";
import Features from "./components/Features";
import Products from "./components/Products";
import EMICalculator from "./components/EMICalculator";
import WhyChooseUs from "./components/WhyChooseUs";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import GoogleMap from "./components/GoogleMap";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <Hero />
      <OfferBanner />
      <BrandSection />
      <Features />
      <Products />
      <EMICalculator />
      <WhyChooseUs />
      <Stats />
      <Services />
      <Testimonials />
      <Gallery />
      <FAQ />
      <ContactCTA />
      <GoogleMap />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}