const reviews = [
  {
    name: "Rahul Sharma",
    city: "Bhiwani",
    review:
      "Excellent service and genuine Windson scooters. Staff is very supportive.",
  },
  {
    name: "Amit Kumar",
    city: "Behal",
    review:
      "Purchased my scooter with EMI. Smooth process and great after-sales service.",
  },
  {
    name: "Pooja Verma",
    city: "Loharu",
    review:
      "Best electric scooter showroom in the area. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-500 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-green-500 transition-all duration-300"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300 leading-7">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h4 className="text-white font-bold text-xl">
                  {review.name}
                </h4>

                <p className="text-green-400">
                  {review.city}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}