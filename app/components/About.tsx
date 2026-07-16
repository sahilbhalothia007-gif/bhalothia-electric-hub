import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold text-green-400 text-center">
          About Bhalothia Electric Hub
        </h1>

        <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto">
          Bhalothia Electric Hub is an Authorized Windson Electric Scooter
          Dealer located in Bahal, Haryana. We provide quality electric
          scooters, genuine spare parts, EMI facilities and reliable
          after-sales service.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">

          <Image
            src="/shop.png"
            alt="Bhalothia Electric Hub"
            width={700}
            height={500}
            className="rounded-2xl"
          />

          <div>

            <h2 className="text-3xl font-bold text-green-400 mb-6">
              Why Choose Us?
            </h2>

            <ul className="space-y-4 text-gray-300 text-lg">
              <li>✅ Authorized Windson Dealer</li>
              <li>✅ Genuine Spare Parts</li>
              <li>✅ Easy EMI Facility</li>
              <li>✅ Fast Delivery</li>
              <li>✅ Excellent Customer Support</li>
              <li>✅ Trusted Service Center</li>
            </ul>

          </div>

        </div>

      </section>

      <section className="bg-gray-950 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-center font-bold text-green-400">
            Our Mission
          </h2>

          <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
            Our mission is to promote eco-friendly transportation by providing
            reliable, affordable and high-quality electric scooters with the
            best customer experience.
          </p>

        </div>

      </section>

    </main>
  );
}