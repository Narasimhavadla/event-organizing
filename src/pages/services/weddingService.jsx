import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Venue Decoration",
    description:
      "Luxury floral themes, royal stage setups and bespoke décor crafted to reflect your love story.",
    icon: "🌸",
  },
  {
    title: "Catering Experience",
    description:
      "Curated gourmet menus, live counters and signature dishes that delight every guest.",
    icon: "🍽️",
  },
  {
    title: "Cinematic Photography",
    description:
      "Timeless candid photography and breathtaking cinematic wedding films.",
    icon: "📸",
  },
  {
    title: "Entertainment & Entry",
    description:
      "Live performances, DJ nights and unforgettable grand couple entries.",
    icon: "🎶",
  },
];

export default function WeddingService() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full overflow-hidden bg-white text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529636798458-92182e662485')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/70 via-white/70 to-yellow-100/70 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl px-10 py-14 max-w-4xl text-center border border-white/40"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Crafting Weddings That Feel
            <span className="block text-rose-500 mt-2">
              Like a Fairytale
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            We transform your dream into a beautifully orchestrated
            celebration filled with elegance, emotion and unforgettable memories.
          </p>

          <button className="mt-8 px-10 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-xl hover:scale-105 transition">
            Start Planning
          </button>
        </motion.div>
      </div>

      {/* ================= WEDDING MOMENTS ================= */}
      <div className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-rose-50">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">Magical Wedding Moments</h3>
          <p className="text-gray-600 mt-4">
            A glimpse of love stories we've beautifully crafted.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "photo-1511285560929-80b456fea0bc",
            "photo-1507504031003-b417219a0fde",
            "photo-1519741497674-611481863552",
          ].map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >
              <img
                src={`https://images.unsplash.com/${img}`}
                alt="wedding"
                className="w-full h-80 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= SERVICES SECTION ================= */}
      <div className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">
            Wedding Experiences We Offer
          </h3>
          <p className="text-gray-600 mt-4">
            Every detail thoughtfully curated to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setActive(index)}
              onHoverEnd={() => setActive(null)}
              whileHover={{ y: -12 }}
              className="group bg-rose-50 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500"
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

      {/* ================= PROCESS SECTION ================= */}
      <div className="py-24 px-6 md:px-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">How We Plan Your Dream</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {["Consultation", "Design & Planning", "Execution", "Grand Celebration"].map(
            (step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-rose-500 text-4xl font-bold mb-4">
                  0{index + 1}
                </div>
                <h4 className="font-semibold text-lg">{step}</h4>
              </motion.div>
            )
          )}
        </div>
      </div>

      

      {/* ================= BOOK CONSULT CTA ================= */}
      <div className="py-24 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center px-6">
        <h3 className="text-4xl font-bold mb-6">
          Let’s Start Planning Your Perfect Day
        </h3>
        <p className="mb-8 text-lg">
          Book a free consultation with our wedding experts today.
        </p>
        <button className="px-10 py-3 bg-white text-rose-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Book Consultation
        </button>
      </div>
      {/* ================= STATS SECTION ================= */}
<div className="py-20 bg-white text-center px-6">
  <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {[
      { number: "500+", label: "Weddings Planned" },
      { number: "10+", label: "Years Experience" },
      { number: "1000+", label: "Happy Clients" },
      { number: "50+", label: "Destination Events" },
    ].map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="p-6"
      >
        <h4 className="text-4xl font-bold text-rose-500">
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