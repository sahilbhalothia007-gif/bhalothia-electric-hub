export default function GoogleMap() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-green-500 uppercase tracking-widest font-semibold">
            Visit Our Showroom
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Find Us on Google Maps
          </h2>

          <p className="text-gray-400 mt-5">
            Bhalothia Electric Hub, Near Gas Godown, Jhumpa Road, Behal,
            Haryana.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gray-800 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Near+Gas+Godown+Jhumpa+Road+Behal+Haryana&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="w-full"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}