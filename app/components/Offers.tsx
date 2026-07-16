import Link from "next/link";

export default function Offers() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          🎉 Limited Time Offers
        </h2>

        <p className="mt-6 text-xl">
          Easy EMI • Exchange Available • Test Ride • Special Festival Discounts
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link href="/booking">
            <button className="bg-black hover:bg-gray-900 px-8 py-4 rounded-xl font-bold">
              Book Test Ride
            </button>
          </Link>

          <a
            href="https://wa.me/919517860244"
            target="_blank"
          >
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold">
              Chat on WhatsApp
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}