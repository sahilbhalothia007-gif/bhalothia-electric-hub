import Image from "next/image";
import Link from "next/link";

const scooters = [
  {
    name: "Windson Classic",
    slug: "windson-classic",
    image: "/scooter1.png",
    price: "₹69,999",
    range: "80 KM",
  },
  {
    name: "Windson Premium",
    slug: "windson-premium",
    image: "/scooter2.png",
    price: "₹84,999",
    range: "100 KM",
  },
  {
    name: "Windson Smart",
    slug: "windson-smart",
    image: "/scooter3.png",
    price: "₹79,999",
    range: "90 KM",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Windson Electric Scooters
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Featured Models
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Ride smarter with our latest range of Windson electric scooters.
            High performance, long range and affordable EMI options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {scooters.map((item) => (
            <div
              key={item.slug}
              className="group overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 hover:border-green-500 shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-3"
            >

              <div className="overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={350}
                  className="w-full h-72 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {item.name}
                </h3>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-3xl font-extrabold text-green-400">
                    {item.price}
                  </span>

                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                    {item.range}
                  </span>
                </div>

                <div className="mt-6 flex gap-3">

                  <Link
                    href={`/products/${item.slug}`}
                    className="flex-1"
                  >
                    <button className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 font-bold text-white transition">
                      View Details
                    </button>
                  </Link>

                  <a
                    href="https://wa.me/919517860244"
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full py-3 rounded-xl border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold transition">
                      Enquire
                    </button>
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}