"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const products = [
  { name: "Ampra", href: "/products" },
  { name: "Spirit Pro", href: "/products" },
  { name: "Spirit+", href: "/products" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <h2 className="text-3xl font-black text-white">
              Bhalothia
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Electric Hub
              </span>
            </h2>
            <p className="mt-6 leading-8 text-slate-400">
              Your trusted destination for premium electric scooters,
              genuine service, easy finance options and outstanding
              customer support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 transition-colors duration-300 hover:text-cyan-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Our Scooters</h3>
            <ul className="mt-6 space-y-4">
              {products.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="text-slate-400 transition-colors duration-300 hover:text-cyan-400">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <a href="tel:+919876543210" className="text-white hover:text-cyan-400">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:info@bhalothiaelectrichub.com" className="text-white hover:text-cyan-400">
                    info@bhalothiaelectrichub.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Address</p>
                  <p className="text-white">
                    Near Gas Godown, Jhumpa Road, Behal, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-slate-400">Working Hours</p>
                  <p className="text-white">Mon - Sat (9:00 AM - 7:00 PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-slate-400">
              © {new Date().getFullYear()} Bhalothia Electric Hub. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500 hover:text-white"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                </svg>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>

              <button
                onClick={scrollToTop}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}