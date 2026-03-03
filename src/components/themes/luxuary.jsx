import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

export default function Luxury() {
  return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light tracking-wide"
        >
          Let’s Craft Your Signature Event
        </motion.h1>

        <div className="mt-6 flex justify-center">
          <div className="w-24 h-[2px] bg-[#C6A75E]"></div>
        </div>

        <p className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg">
          Experience bespoke event planning tailored with elegance,
          precision, and uncompromising excellence.
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl font-light tracking-widest text-[#C6A75E] uppercase">
              Private Consultation
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Connect with our luxury event specialists for exclusive
              weddings, corporate galas, destination celebrations, and
              high-profile experiences.
            </p>
          </div>

          {[
            { icon: faPhone, text: "+91 98765 43210" },
            { icon: faEnvelope, text: "luxury@eventelite.com" },
            { icon: faLocationDot, text: "Hyderabad, India" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6 group">
              <div className="w-12 h-12 border border-[#C6A75E] flex items-center justify-center group-hover:bg-[#C6A75E] transition duration-500">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-[#C6A75E] group-hover:text-black transition duration-500"
                />
              </div>
              <p className="text-gray-300 tracking-wide">{item.text}</p>
            </div>
          ))}

          <div className="pt-10 border-t border-gray-800 text-gray-500 text-sm">
            Discretion. Detail. Distinction.
          </div>
        </motion.div>

        {/* RIGHT FORM PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border border-gray-800 p-10 md:p-14"
        >
          <div className="flex items-center gap-3 mb-12">
            <FontAwesomeIcon icon={faGem} className="text-[#C6A75E]" />
            <h3 className="text-2xl font-light tracking-widest uppercase">
              Request Invitation
            </h3>
          </div>

          <form className="space-y-10">

            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-[#C6A75E] outline-none transition"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-[#C6A75E] outline-none transition"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-[#C6A75E] outline-none transition"
              />
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Describe Your Vision"
                className="w-full bg-transparent border-b border-gray-700 py-3 resize-none focus:border-[#C6A75E] outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 border border-[#C6A75E] text-[#C6A75E] tracking-widest uppercase hover:bg-[#C6A75E] hover:text-black transition duration-500 flex items-center justify-center gap-3"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Submit Request
            </button>

          </form>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="text-center py-8 border-t border-gray-800 text-gray-600 text-sm">
        © 2026 EventElite. Crafted for the extraordinary.
      </section>
    </div>
  );
}