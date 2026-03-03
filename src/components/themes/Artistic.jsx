import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
  faLocationDot,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function ArtisticContact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative bg-[#fdfaf6] text-gray-800 overflow-hidden">

      {/* Decorative Abstract Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-40"></div>

      {/* ================= HERO ================= */}
      <section className="relative z-10 py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Let’s Design
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Your Next Experience
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Every event is a canvas. Tell us your vision and we’ll paint it into
          reality with imagination and precision.
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-12 items-start">

        {/* INFO COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-1 space-y-10"
        >
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPalette} className="text-purple-500 text-xl" />
            <h2 className="text-2xl font-bold">Creative Studio</h2>
          </div>

          <div className="space-y-6">
            {[ 
              { icon: faPhone, text: "+91 98765 43210" },
              { icon: faEnvelope, text: "creative@eventart.com" },
              { icon: faLocationDot, text: "Hyderabad, India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FORM COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 bg-white/70 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white"
        >
          <h3 className="text-3xl font-bold mb-10">
            Share Your Vision
          </h3>

          <form className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              className="p-4 rounded-xl bg-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="md:col-span-2 p-4 rounded-xl bg-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />

            <textarea
              rows="4"
              placeholder="Describe your event idea..."
              className="md:col-span-2 p-4 rounded-xl bg-[#f4f4f4] resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            ></textarea>

            <div className="md:col-span-2">
              <button
                type="submit"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-full py-4 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                <motion.span
                  animate={{ x: hovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </motion.span>
                Send Creative Brief
              </button>
            </div>

          </form>
        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}
      <section className="relative z-10 text-center py-8 text-gray-500 text-sm">
        © 2026 EventArt Studio — Where Ideas Become Experiences.
      </section>
    </div>
  );
}