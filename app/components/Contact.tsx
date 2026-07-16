export default function Contact() {
  return (
    <section id="contact" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-500 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Visit our showroom or contact us for bookings, EMI, service, and
            product information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="bg-black rounded-3xl p-8 border border-gray-800">

            <div className="space-y-8">

              <div>
                <h3 className="text-white text-2xl font-bold">📍 Address</h3>
                <p className="text-gray-400 mt-2">
                  Near Gas Godown, Jhumpa Road,
                  <br />
                  Behal, Bhiwani, Haryana - 127028
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold">📞 Phone</h3>
                <p className="text-gray-400 mt-2">
                  +91 9517860244
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold">✉ Email</h3>
                <p className="text-gray-400 mt-2">
                  bhalothiaelectrichub@gmail.com
                </p>
              </div>

              <div>
                <h3 className="text-white text-2xl font-bold">🕒 Timing</h3>
                <p className="text-gray-400 mt-2">
                  Monday - Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-black rounded-3xl p-8 border border-gray-800">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-green-500"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-green-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-green-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-green-500"
              ></textarea>

              <button
                className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-xl text-lg font-bold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}