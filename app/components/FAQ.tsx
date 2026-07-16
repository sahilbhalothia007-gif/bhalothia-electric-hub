"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you provide EMI?",
    answer: "Yes, easy EMI options are available on selected Windson scooters.",
  },
  {
    question: "Is a test ride available?",
    answer: "Yes, you can book a free test ride from our Booking page.",
  },
  {
    question: "Do you provide service?",
    answer: "Yes, we provide genuine spare parts and after-sales service.",
  },
  {
    question: "Where is your showroom?",
    answer: "Jhumpa Road, Near Gas Godown, Bahal, Haryana 127028.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-400 mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-green-500 rounded-xl mb-4 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-5 flex justify-between items-center"
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}