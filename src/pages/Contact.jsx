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
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-600/40 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Let’s Create <span className="text-purple-400">Something Magical</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have an idea? A celebration? A vision?  
            We turn moments into unforgettable experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 pb-24">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold">Get In Touch</h2>

          {/* Contact Cards */}
          {[
            { icon: faPhone, title: "Call Us", value: "+91 98765 43210" },
            { icon: faEnvelope, title: "Email Us", value: "hello@luxevents.com" },
            { icon: faLocationDot, title: "Visit Us", value: "Jubilee Hills, Hyderabad" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-2xl text-purple-400"
              />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Jubilee+Hills+Hyderabad&output=embed"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 p-10 rounded-3xl backdrop-blur-2xl border border-white/10 shadow-2xl space-y-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>

          {/* Floating Input */}
          {["Full Name", "Email Address"].map((label, i) => (
            <div key={i} className="relative">
              <input
                type={label.includes("Email") ? "email" : "text"}
                placeholder=" "
                className="peer w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-purple-400"
              />
              <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-purple-400 peer-focus:text-xs">
                {label}
              </label>
            </div>
          ))}

          {/* Select */}
          <div className="relative">
            <select className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-purple-400">
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday</option>
              <option>Brand Launch</option>
            </select>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-purple-400"
            ></textarea>
            <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-purple-400 peer-focus:text-xs">
              Your Vision...
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-full font-semibold flex items-center justify-center gap-3"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            Send Message
          </motion.button>
        </motion.form>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center bg-gradient-to-r from-purple-900 to-black">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something Extraordinary Together
        </h2>
        <button className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition">
          Book a Consultation
        </button>
      </section>

    </div>
  );
}