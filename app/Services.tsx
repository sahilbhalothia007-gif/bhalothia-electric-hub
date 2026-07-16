import {
  Wrench,
  BatteryCharging,
  Bike,
  ShieldCheck,
  BadgeIndianRupee,
  Headphones,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Bike,
      title: "Electric Scooters",
      desc: "Latest Windson electric scooters available.",
    },
    {
      icon: BatteryCharging,
      title: "Battery Service",
      desc: "Original battery replacement and repair.",
    },
    {
      icon: Wrench,
      title: "Repair Service",
      desc: "Professional scooter repair and maintenance.",
    },
    {
      icon: BadgeIndianRupee,
      title: "Easy EMI",
      desc: "Easy finance and EMI available.",
    },
    {
      icon: ShieldCheck,
      title: "Warranty",
      desc: "Manufacturer warranty support.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Always ready to help our customers.",
    },
  ];

  return (
    <section className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-400">
            Our Services
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Complete Electric Vehicle Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-black border border-green-500 rounded-2xl p-8 hover:scale-105 transition duration-300"
              >
                <Icon className="text-green-400 w-14 h-14 mb-6" />

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}