"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [price, setPrice] = useState(80000);
  const [downPayment, setDownPayment] = useState(20000);
  const [months, setMonths] = useState(24);

  const loanAmount = price - downPayment;
  const emi = loanAmount > 0 ? Math.round(loanAmount / months) : 0;

  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-green-400 mb-10">
          EMI Calculator
        </h2>

        <div className="bg-black border border-green-500 rounded-3xl p-8">

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <label className="block mb-2">Scooter Price (₹)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Down Payment (₹)</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Loan Duration (Months)</label>
              <select
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl p-3"
              >
                <option value={12}>12 Months</option>
                <option value={24}>24 Months</option>
                <option value={36}>36 Months</option>
              </select>
            </div>

          </div>

          <div className="mt-10 text-center">

            <h3 className="text-2xl text-gray-300">
              Estimated Monthly EMI
            </h3>

            <p className="text-5xl font-bold text-green-400 mt-4">
              ₹{emi}
            </p>

            <p className="text-gray-400 mt-4">
              *This is a simple estimate. Actual EMI depends on lender, interest
              rate, processing charges, and loan terms.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}