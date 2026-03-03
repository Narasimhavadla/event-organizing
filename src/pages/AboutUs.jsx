import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUsers,
  faStar,
  faBolt,
  faGlobe,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import backgroundForAbout from "../assets/aboutusBg.jpg"

export default function AboutUs() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <img
          src={backgroundForAbout}
          alt="event"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm "></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We Design Experiences <br /> That Inspire
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            From intimate gatherings to grand celebrations — we create magic.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Explore Our Work
          </button>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900 to-black">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: faCalendarDays, number: "650+", label: "Events" },
            { icon: faUsers, number: "400+", label: "Clients" },
            { icon: faStar, number: "4.9★", label: "Rating" },
            { icon: faMedal, number: "12+", label: "Awards" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20"
            >
              <FontAwesomeIcon icon={item.icon} className="text-3xl mb-4 text-purple-400" />
              <h2 className="text-3xl font-bold">{item.number}</h2>
              <p className="text-gray-300 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We are a team of creative strategists, planners, and designers
              who believe every event should tell a powerful story.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With innovation and precision, we transform spaces into
              breathtaking experiences.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
            alt="team"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* ================= FEATURES GRID ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { icon: faBolt, title: "Energy", desc: "High-energy execution and flawless coordination." },
            { icon: faGlobe, title: "Global Vision", desc: "International-level event standards." },
            { icon: faUsers, title: "Strong Network", desc: "Trusted vendors and partners." },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-10 rounded-3xl backdrop-blur-lg border border-white/10 hover:border-purple-500 transition"
            >
              <FontAwesomeIcon icon={item.icon} className="text-4xl mb-6 text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Creative Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Director", "Event Planner", "Designer"].map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
                alt="team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-purple-400">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-800 to-pink-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make Your Event Extraordinary?
        </h2>
        <button className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get Started Now
        </button>
      </section>

    </div>
  );
}