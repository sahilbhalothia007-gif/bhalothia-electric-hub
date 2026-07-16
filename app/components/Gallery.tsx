import Image from "next/image";

const gallery = [
  "/inside.jpeg",
  "/hero.png",
  "/scooter.png",
  "/scooter1.png",
  "/scooter2.png",
  "/scooter3.png",
  "/scooter4.png",
  "/logo.png",
];

export default function Gallery() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-green-500 font-semibold uppercase tracking-widest">
            Gallery
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Our Showroom
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore Bhalothia Electric Hub and our premium Windson electric
            scooters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 group"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={450}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}