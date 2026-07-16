"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingPage() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    model: "",
    city: "",
    message: "",
  });

  function submitForm(e: React.FormEvent) {
    e.preventDefault();

    const text =
      `*Test Ride Booking*%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Model: ${form.model}%0A` +
      `City: ${form.city}%0A` +
      `Message: ${form.message}`;

    window.open(
      `https://wa.me/919517860244?text=${text}`,
      "_blank"
    );
  }

  return (
    <>
      <Navbar />

      <main className="bg-black text-white min-h-screen pt-28">

        <section className="max-w-3xl mx-auto px-6 py-20">

          <h1 className="text-5xl text-center font-bold text-green-400">
            Book Test Ride
          </h1>

          <form
            onSubmit={submitForm}
            className="mt-12 bg-gray-900 p-8 rounded-3xl border border-green-500 space-y-6"
          >

            <input
              className="w-full bg-black border border-gray-700 rounded-xl p-4"
              placeholder="Your Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="w-full bg-black border border-gray-700 rounded-xl p-4"
              placeholder="Phone Number"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              className="w-full bg-black border border-gray-700 rounded-xl p-4"
              placeholder="Scooter Model"
              onChange={(e) =>
                setForm({ ...form, model: e.target.value })
              }
            />

            <input
              className="w-full bg-black border border-gray-700 rounded-xl p-4"
              placeholder="City"
              onChange={(e) =>
                setForm({ ...form, city: e.target.value })
              }
            />

            <textarea
              className="w-full bg-black border border-gray-700 rounded-xl p-4"
              rows={5}
              placeholder="Message"
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl font-bold text-xl"
            >
              Book on WhatsApp
            </button>

          </form>

        </section>

      </main>

      <Footer />
    </>
  );
}