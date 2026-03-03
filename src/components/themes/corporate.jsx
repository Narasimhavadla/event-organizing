import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export default function Corporate() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#1E2A38] text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Corporate Event Consultation
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          Partner with a professional event management team delivering 
          seamless conferences, product launches, and executive gatherings.
        </p>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">

        {/* LEFT INFO PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-1 space-y-10"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-[#1E2A38]">
              Contact Information
            </h2>
            <div className="w-16 h-[3px] bg-[#1E2A38]"></div>
          </div>

          <div className="space-y-8">

            <div className="flex gap-4 items-start">
              <FontAwesomeIcon icon={faPhone} className="text-[#1E2A38] mt-1" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-600 mt-1">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#1E2A38] mt-1" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600 mt-1">corporate@eventpro.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#1E2A38] mt-1" />
              <div>
                <h4 className="font-medium">Head Office</h4>
                <p className="text-gray-600 mt-1">
                  Jubilee Hills, Hyderabad, India
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            Available for national & international corporate projects.
          </div>
        </motion.div>

        {/* RIGHT FORM PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-white p-10 md:p-14 shadow-lg border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-8">
            <FontAwesomeIcon icon={faBuilding} className="text-[#1E2A38]" />
            <h3 className="text-2xl font-semibold text-[#1E2A38]">
              Request a Proposal
            </h3>
          </div>

          <form className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Company Name"
              className="p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition"
            />

            <input
              type="text"
              placeholder="Contact Person"
              className="p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition"
            />

            <input
              type="email"
              placeholder="Business Email"
              className="p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition"
            />

            <select className="md:col-span-2 p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition">
              <option>Conference</option>
              <option>Product Launch</option>
              <option>Annual Meeting</option>
              <option>Seminar / Workshop</option>
              <option>Corporate Gala</option>
            </select>

            <textarea
              rows="4"
              placeholder="Project Details"
              className="md:col-span-2 p-3 border border-gray-300 focus:outline-none focus:border-[#1E2A38] transition resize-none"
            ></textarea>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#1E2A38] text-white py-3 font-medium hover:bg-[#2C3E50] transition flex items-center justify-center gap-3"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Submit Proposal Request
              </button>
            </div>

          </form>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © 2026 EventPro Corporate Solutions. All rights reserved.
      </section>
    </div>
  );
}