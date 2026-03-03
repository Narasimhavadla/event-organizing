import { motion } from "framer-motion";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function ModernContact() {
  const [focused, setFocused] = useState(null);

  const inputStyle =
    "w-full bg-transparent border-b border-gray-300 focus:border-purple-500 outline-none py-3 transition-all duration-300";

  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Let’s Create Something Amazing
        </motion.h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Tell us about your event vision and our team will craft a seamless,
          unforgettable experience tailored just for you.
        </p>

        {/* Decorative Gradient Line */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {[ 
            { icon: faPhone, title: "Call Us", value: "+91 98765 43210" },
            { icon: faEnvelope, title: "Email Us", value: "hello@eventpro.com" },
            { icon: faLocationDot, title: "Visit Us", value: "Hyderabad, India" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="mt-10 text-gray-500 text-sm">
            We respond within 24 hours. Let’s start planning your next big event.
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-10">
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-purple-500 text-xl"
            />
            <h3 className="text-2xl font-bold">Send a Message</h3>
          </div>

          <form className="space-y-8">

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputStyle}
                required
              />
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === "name"
                    ? "-top-4 text-sm text-purple-500"
                    : "top-3 text-gray-400"
                }`}
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputStyle}
                required
              />
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === "email"
                    ? "-top-4 text-sm text-purple-500"
                    : "top-3 text-gray-400"
                }`}
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputStyle} resize-none`}
                required
              ></textarea>
              <label
                className={`absolute left-0 transition-all duration-300 ${
                  focused === "message"
                    ? "-top-4 text-sm text-purple-500"
                    : "top-3 text-gray-400"
                }`}
              >
                Tell us about your event
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-3"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>

          </form>
        </motion.div>
      </section>

      {/* ================= BOTTOM STRIP ================= */}
      <section className="text-center text-gray-400 text-sm py-6 border-t border-gray-100">
        © 2026 EventPro. Designed for unforgettable experiences.
      </section>
    </div>
  );
}