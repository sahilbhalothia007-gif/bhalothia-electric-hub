export default function Stats() {
  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "5+", label: "Brands Available" },
    { value: "100%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {stats.map((item) => (
          <div
            key={item.label}
            className="bg-gray-900 border border-green-500 rounded-2xl p-6 text-center"
          >
            <h2 className="text-4xl font-bold text-green-400">
              {item.value}
            </h2>
            <p className="text-gray-300 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}