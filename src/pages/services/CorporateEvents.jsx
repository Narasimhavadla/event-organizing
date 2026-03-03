import { motion } from "framer-motion";
import { useState } from "react";

const corporateServices = [
  {
    title: "Annual Conferences",
    description:
      "Seamlessly organized large-scale conferences with advanced tech integration and premium setups.",
    icon: "🎤",
  },
  {
    title: "Product Launches",
    description:
      "Impactful product unveiling experiences with branding, stage design and media coordination.",
    icon: "🚀",
  },
  {
    title: "Corporate Meetings",
    description:
      "Professional board meetings, seminars and strategy sessions with flawless execution.",
    icon: "🏢",
  },
  {
    title: "Award Ceremonies",
    description:
      "Elegant award nights with lighting, stage production and entertainment.",
    icon: "🏆",
  },
];

export default function CorporateEvents() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/70 via-white/70 to-sky-100/70 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl px-12 py-16 max-w-4xl text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Elevating Corporate Events
            <span className="block text-blue-600 mt-2">
              With Precision & Excellence
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We craft impactful corporate experiences that inspire teams,
            impress stakeholders and strengthen your brand.
          </p>

          <button className="mt-8 px-10 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-full shadow-lg hover:scale-105 transition">
            Plan Corporate Event
          </button>
        </motion.div>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-blue-50">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">Corporate Event Solutions</h3>
          <p className="text-gray-600 mt-4">
            Professional planning tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {corporateServices.map((service, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setActive(index)}
              onHoverEnd={() => setActive(null)}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-4">
                {service.title}
              </h4>
              {active === index && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="py-24 px-6 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Why Leading Brands Choose Us
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>✔ Strategic Planning & Execution</li>
              <li>✔ Advanced Audio-Visual Technology</li>
              <li>✔ Professional Event Management Team</li>
              <li>✔ Timely Delivery & Budget Control</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt="corporate event"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="py-24 bg-blue-50 px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">Our Corporate Event Process</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {["Consultation", "Strategy Planning", "Execution", "Post Event Analysis"].map(
            (step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-blue-600 text-4xl font-bold mb-4">
                  0{index + 1}
                </div>
                <h4 className="font-semibold text-lg">{step}</h4>
              </motion.div>
            )
          )}
        </div>
      </div>

 

      {/* ================= CTA ================= */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-center px-6">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Host Your Next Corporate Event?
        </h3>
        <p className="mb-8 text-lg">
          Let’s create a powerful and professional experience together.
        </p>
        <button className="px-10 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Book Consultation
        </button>
      </div>

           {/* ================= STATS ================= */}
      <div className="py-20 bg-white text-center px-6">
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { number: "300+", label: "Corporate Events" },
            { number: "120+", label: "Brands Served" },
            { number: "15+", label: "Years Experience" },
            { number: "98%", label: "Client Satisfaction" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <h4 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h4>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}