"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Now", href: "/booking" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Bhalothia Electric Hub"
              width={55}
              height={55}
              priority
            />

            <div>
              <h2
                className={`text-xl font-bold transition ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Bhalothia
              </h2>

              <p
                className={`text-xs transition ${
                  scrolled ? "text-gray-500" : "text-white/80"
                }`}
              >
                Electric Hub
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition hover:text-green-500 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Buttons */}

          <div className="hidden items-center gap-4 lg:flex">

            <a
              href="tel:+919517860244"
              className="flex items-center gap-2 rounded-full border border-green-500 px-4 py-2 text-green-500 transition hover:bg-green-500 hover:text-white"
            >
              <Phone size={18} />
              Call
            </a>

            <a
              href="/contact"
              className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Visit Store
            </a>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 z-[60] h-screen w-[320px] bg-slate-950 text-white shadow-2xl transition-transform duration-500 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <h2 className="text-xl font-bold">
              Bhalothia Electric Hub
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Windson Authorized Dealer
            </p>
          </div>

          <button onClick={() => setMobileMenu(false)}>
            <X className="h-7 w-7" />
          </button>
        </div>

        <div className="flex flex-col p-6">

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="border-b border-white/10 py-4 text-lg font-medium transition hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="tel:+919517860244"
            className="mt-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 text-center font-semibold text-white transition hover:opacity-90"
          >
            📞 Call Now
          </a>

          <Link
            href="/booking"
            onClick={() => setMobileMenu(false)}
            className="mt-4 rounded-xl border border-cyan-500 py-4 text-center font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
          >
            Book Test Ride
          </Link>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-cyan-400" />

              <p className="text-sm leading-6 text-slate-300">
                Near Gas Godown,
                <br />
                Jhumpa Road,
                <br />
                Behal, Haryana - 127028
              </p>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-sm text-slate-400">
                Open
              </p>

              <p className="mt-1 font-semibold text-white">
                Monday – Saturday
              </p>

              <p className="text-cyan-400">
                9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Overlay */}

      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}