import { motion } from "framer-motion";
import { useState } from "react";

const artists = [
  {
    name: "DJ Nova",
    role: "Electronic Beats",
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
  },
  {
    name: "The Rockers",
    role: "Live Band",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    name: "Aria Blaze",
    role: "Pop Sensation",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
  },
];

export default function LiveConcert() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-white text-gray-800 overflow-hidden">

      {/* ================= HERO ================= */}
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506157786151-b8491531f063')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200/70 via-pink-100/70 to-orange-200/70 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl px-12 py-16 max-w-4xl text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Feel The Beat.
            <span className="block text-purple-600 mt-2">
              Live The Moment.
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Electrifying live concerts with world-class production,
            sound engineering and unforgettable performances.
          </p>

          <button className="mt-8 px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-xl hover:scale-105 transition">
            Book Concert Event
          </button>
        </motion.div>
      </div>

      {/* ================= FEATURED ARTISTS ================= */}
      <div className="py-24 px-6 md:px-20 bg-gradient-to-b from-white to-purple-50">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">Featured Artists</h3>
          <p className="text-gray-600 mt-4">
            Bringing the biggest talents to your stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="h-80 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold">
                  {artist.name}
                </h4>
                <p className="text-purple-600 mt-2">
                  {artist.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CONCERT EXPERIENCE ================= */}
      <div className="py-24 px-6 md:px-20 bg-white">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">
            What Makes Our Concerts Epic
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Advanced Sound Systems",
            "Dynamic Stage Lighting",
            "Crowd Management",
            "Live Streaming Setup",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-purple-50 p-8 rounded-3xl shadow-md"
            >
              <div className="text-3xl mb-4">🎶</div>
              <h4 className="font-semibold">{item}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="py-24 bg-gradient-to-b from-purple-50 to-white px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold">Concert Moments</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            "photo-1492684223066-81342ee5ff30",
            "photo-1507874457470-272b3c8d8ee2",
            "photo-1518972559570-8f56b3a3a0d5",
          ].map((img, index) => (
            <motion.img
              key={index}
              whileHover={{ scale: 1.05 }}
              src={`https://images.unsplash.com/${img}`}
              alt="concert"
              className="rounded-3xl shadow-xl h-80 w-full object-cover"
            />
          ))}
        </div>
      </div>



      {/* ================= CTA ================= */}
      <div className="py-24 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center px-6">
        <h3 className="text-4xl font-bold mb-6">
          Ready To Rock Your Next Event?
        </h3>
        <p className="mb-8 text-lg">
          Let’s create an electrifying concert experience together.
        </p>
        <button className="px-10 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Contact Us
        </button>
      </div>

            {/* ================= STATS ================= */}
      <div className="py-20 bg-white text-center px-6">
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { number: "200+", label: "Concerts Hosted" },
            { number: "50K+", label: "Audience Reach" },
            { number: "100+", label: "Artists Managed" },
            { number: "15+", label: "Cities Covered" },
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <h4 className="text-4xl font-bold text-purple-600">
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