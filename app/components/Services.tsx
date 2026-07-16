export default function Services() {
  const services = [
    {
      title: "Electric Scooter Sales",
      icon: "🛵",
      desc: "Latest Windson electric scooters with the best price and warranty.",
    },
    {
      title: "Test Ride",
      icon: "🚀",
      desc: "Experience the scooter before buying with a free test ride.",
    },
    {
      title: "EMI Facility",
      icon: "💳",
      desc: "Easy EMI options with quick approval and low down payment.",
    },
    {
      title: "Spare Parts",
      icon: "⚙️",
      desc: "100% genuine Windson spare parts and accessories.",
    },
    {
      title: "Repair & Service",
      icon: "🔧",
      desc: "Professional technicians with fast and reliable service.",
    },
    {
      title: "Doorstep Support",
      icon: "🏠",
      desc: "Quick assistance and customer support whenever required.",
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-500 uppercase font-semibold tracking-widest">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            From scooter purchase to after-sales service, we provide complete
            electric mobility solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 rounded-3xl border border-gray-800 hover:border-green-500 p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}