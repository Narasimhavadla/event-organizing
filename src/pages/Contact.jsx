import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="bg-[#FAF7F2] text-[#1F1F1F] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light tracking-wide mb-6"
        >
          Let’s Plan Something <span className="text-[#C6A75E] font-semibold">Extraordinary</span>
        </motion.h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From luxury weddings to premium corporate events — we craft timeless experiences with elegance.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 pb-24">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="w-20 h-[2px] bg-[#C6A75E]"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faPhone} className="text-[#C6A75E] text-lg mt-1" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#C6A75E] text-lg mt-1" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">hello@luxevents.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#C6A75E] text-lg mt-1" />
              <div>
                <h4 className="font-medium">Office</h4>
                <p className="text-gray-600">
                  Jubilee Hills, Hyderabad, India
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="pt-10 border-t border-[#E8DFD1] text-sm text-gray-500">
            Available for bookings worldwide.
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-[#E8DFD1] rounded-lg focus:outline-none focus:border-[#C6A75E] transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-[#E8DFD1] rounded-lg focus:outline-none focus:border-[#C6A75E] transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Event Type</label>
            <select className="w-full mt-2 p-3 border border-[#E8DFD1] rounded-lg focus:outline-none focus:border-[#C6A75E] transition">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Celebration</option>
              <option>Brand Launch</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us about your vision..."
              className="w-full mt-2 p-3 border border-[#E8DFD1] rounded-lg focus:outline-none focus:border-[#C6A75E] transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C6A75E] text-white py-3 rounded-full font-medium hover:opacity-90 transition flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Inquiry
          </button>
        </motion.form>

      </section>

      {/* ================= FOOTER NOTE ================= */}
      <section className="py-12 text-center border-t border-[#E8DFD1] text-sm text-gray-500">
        © 2026 Luxe Events. Designed with elegance.
      </section>

    </div>
  );
}