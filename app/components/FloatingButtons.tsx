"use client";

import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/919517860244"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all"
      >
        💬
      </a>

      {/* Scroll Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-black border border-gray-700 text-white flex items-center justify-center hover:bg-green-500 transition-all"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}