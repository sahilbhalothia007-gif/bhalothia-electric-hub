"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormData = {
  name: string;
  mobile: string;
  email: string;
  scooter: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  mobile: "",
  email: "",
  scooter: "",
  message: "",
};

export default function BookingPage() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, mobile, email, scooter, message } = formData;

    if (!name || !mobile || !email || !scooter) {
      alert("Please fill all required fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    const whatsappMessage = `🚀 *New Test Ride Booking*%0A%0A👤 *Name:* ${name}%0A📞 *Mobile:* ${mobile}%0A📧 *Email:* ${email}%0A🛵 *Scooter:* ${scooter}%0A💬 *Message:* ${
      message || "-"
    }`;

    const whatsappUrl = `https://wa.me/919517860244?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setLoading(false);
      setFormData(initialForm);
    }, 800);
  };

  return (
    <section className="min-h-screen bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="font-semibold uppercase tracking-widest text-green-500">
            Book Test Ride
          </span>

          <h1 className="mt-4 text-5xl font-extrabold">
            Schedule Your Test Ride
          </h1>

          <p className="mt-4 text-gray-400">
            Fill in your details and our team will contact you shortly.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-800 bg-gray-900 p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 outline-none transition focus:border-green-500"
              required
            />

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 outline-none transition focus:border-green-500"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 outline-none transition focus:border-green-500"
              required
            />

            <select
              name="scooter"
              value={formData.scooter}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 outline-none transition focus:border-green-500"
              required
            >
              <option value="">Select Scooter</option>
              <option value="Windson Classic">Windson Classic</option>
              <option value="Windson Premium">Windson Premium</option>
              <option value="Windson Smart">Windson Smart</option>
            </select>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full rounded-xl border border-gray-700 bg-black px-5 py-4 outline-none transition focus:border-green-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-500 py-4 text-lg font-bold transition hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Redirecting to WhatsApp..." : "Book Test Ride"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}