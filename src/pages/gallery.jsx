import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faXmark,
  faLocationDot,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

// ================= DUMMY DATA =================
const galleryImages = [
  { id: 1, category: "Wedding", title: "Royal Palace Nuptials", location: "Udaipur, India", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { id: 2, category: "Corporate", title: "Global Tech Summit", location: "Bangalore, India", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Party", title: "Neon Birthday Bash", location: "Mumbai, India", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" },
  { id: 4, category: "Wedding", title: "Beachside Vows", location: "Goa, India", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Corporate", title: "Leadership Retreat", location: "Hyderabad, India", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Concert", title: "Live Rock Night", location: "Delhi, India", img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "Wedding", title: "Heritage Garden Wedding", location: "Jaipur, India", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "Party", title: "Midnight Masquerade", location: "Pune, India", img: "https://images.unsplash.com/photo-1514525253361-bee8a197c0c5?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Wedding", "Corporate", "Party", "Concert"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-white pb-20 pt-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            <FontAwesomeIcon icon={faCamera} />
            <span>Our Visual Journey</span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Capturing the <span className="text-indigo-600">Magic</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Explore our curated gallery of premium weddings, corporate summits, and high-energy celebrations.
          </p>

          {/* --- FILTER BUTTONS --- */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- GALLERY GRID --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedImg(item.img)}
              >
                {/* Image Container */}
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8 text-white">
                    <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                        <p className="text-xs text-indigo-100 flex items-center gap-2">
                          <FontAwesomeIcon icon={faLocationDot} />
                          {item.location}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <FontAwesomeIcon icon={faEye} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white text-3xl p-4 hover:rotate-90 transition-transform"
            >
              <FontAwesomeIcon icon={faXmark} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              src={selectedImg}
              className="max-h-full max-w-full rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}