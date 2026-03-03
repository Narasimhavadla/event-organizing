import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Elegant() {
  return (
    <div className="bg-[#F9F6F1] text-[#1F1F1F] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-28 md:py-36 px-6 text-center max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light tracking-wide leading-tight"
        >
          Begin Your <span className="text-[#C6A75E] font-medium">Luxury Experience</span>
        </motion.h1>

        <div className="w-24 h-[2px] bg-[#C6A75E] mx-auto my-8"></div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Every unforgettable event begins with a conversation.
          Share your vision — we’ll transform it into elegance.
        </p>
      </section>

      {/* ================= CONTACT WRAPPER ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-20 items-start">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-3xl font-light mb-4">Contact Details</h2>
            <div className="w-16 h-[2px] bg-[#C6A75E]"></div>
          </div>

          <div className="space-y-8 text-gray-700">

            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E6DCCD] rounded-full group-hover:bg-[#C6A75E] group-hover:text-white transition">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h4 className="font-medium tracking-wide">Phone</h4>
                <p className="text-gray-600 mt-1">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E6DCCD] rounded-full group-hover:bg-[#C6A75E] group-hover:text-white transition">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h4 className="font-medium tracking-wide">Email</h4>
                <p className="text-gray-600 mt-1">hello@luxevents.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start group">
              <div className="w-12 h-12 flex items-center justify-center border border-[#E6DCCD] rounded-full group-hover:bg-[#C6A75E] group-hover:text-white transition">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h4 className="font-medium tracking-wide">Office</h4>
                <p className="text-gray-600 mt-1">
                  Jubilee Hills, Hyderabad, India
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E6DCCD] text-sm text-gray-500 italic">
            We curate events across India & internationally.
          </div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] space-y-8 border border-[#EFE7DA]"
        >
          <h3 className="text-2xl font-light mb-6 text-center">
            Send an Inquiry
          </h3>

          {/* Floating Inputs */}
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full border-b border-[#D8CFC2] py-3 focus:outline-none focus:border-[#C6A75E] transition"
            />
            <label className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C6A75E] transition-all">
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder=" "
              className="peer w-full border-b border-[#D8CFC2] py-3 focus:outline-none focus:border-[#C6A75E] transition"
            />
            <label className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C6A75E] transition-all">
              Email Address
            </label>
          </div>

          <div>
            <label className="text-sm text-gray-500">Event Type</label>
            <select className="w-full mt-3 border-b border-[#D8CFC2] py-3 focus:outline-none focus:border-[#C6A75E] transition bg-transparent">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Celebration</option>
              <option>Brand Launch</option>
            </select>
          </div>

          <div className="relative">
            <textarea
              rows="4"
              placeholder=" "
              className="peer w-full border-b border-[#D8CFC2] py-3 focus:outline-none focus:border-[#C6A75E] transition resize-none"
            ></textarea>
            <label className="absolute left-0 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#C6A75E] transition-all">
              Your Vision / Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#C6A75E] text-white py-3 rounded-full tracking-wide hover:opacity-90 transition flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Submit Inquiry
          </button>
        </motion.form>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="py-12 text-center border-t border-[#E6DCCD] text-sm text-gray-500">
        © 2026 Luxe Events — Crafted with timeless elegance.
      </section>
    </div>
  );
}