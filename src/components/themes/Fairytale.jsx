import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function FairytaleContact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#fdf6ff] via-[#f7f0ff] to-[#eef4ff] text-gray-700">

      {/* ✨ Floating Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Begin Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Magical Journey
          </span>
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Every celebration deserves a touch of wonder. Share your dream with us,
          and let’s turn it into an unforgettable fairytale.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-32 h-[3px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🏰 Left Story Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/60 backdrop-blur-xl p-10 rounded-[40px] shadow-xl border border-white"
        >
          <div className="flex items-center gap-3 mb-8">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <h2 className="text-2xl font-bold">Royal Contact</h2>
          </div>

          <div className="space-y-6">
            {[ 
              { icon: faPhone, text: "+91 98765 43210" },
              { icon: faEnvelope, text: "magic@fairyevents.com" },
              { icon: faLocationDot, text: "Hyderabad, India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Our enchanted planners will respond within 24 hours.
          </p>
        </motion.div>

        {/* 🦋 Right Dream Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-12 rounded-[50px] shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">
            Tell Us Your Dream
          </h3>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-full bg-[#f8f4ff] focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-full bg-[#f8f4ff] focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            />

            <textarea
              rows="4"
              placeholder="Describe your fairytale event..."
              className="w-full p-4 rounded-3xl bg-[#f8f4ff] resize-none focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
            ></textarea>

            <button
              type="submit"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="w-full py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <motion.span
                animate={{ x: hovered ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </motion.span>
              Send Enchanted Request
            </button>

          </form>
        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}
      <section className="relative z-10 text-center py-8 text-sm text-gray-500">
        © 2026 Fairytale Events — Where Dreams Come True ✨
      </section>
    </div>
  );
}