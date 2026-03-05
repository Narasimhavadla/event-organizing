import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    message: "The team executed our annual corporate summit flawlessly. Professional planning and smooth coordination.",
  },
  {
    name: "Ananya Sharma",
    role: "Wedding Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    message: "They transformed our wedding into a magical experience. Every detail was beautifully executed.",
  },
  {
    name: "Vikram Reddy",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    message: "Our product launch was a grand success thanks to their creative ideas.",
  },
  {
    name: "Sneha Kapoor",
    role: "Event Host",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message: "Extremely professional and reliable team. Highly recommended for premium events.",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resizing to update carousel logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    // If mobile, scroll one by one. If desktop, avoid empty space at end.
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index, isMobile]);

  return (
    <section className="py-20 overflow-hidden bg-gray-50/50">
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-4 text-lg">
          Trusted by brands and families for unforgettable events.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Carousel Wrapper */}
        <div className="overflow-hidden px-6 md:px-12">
          <motion.div
            className="flex gap-6"
            animate={{
              // Mobile: Translate 100% per card | Desktop: Translate 50% per card
              // We add the gap adjustment (24px gap is roughly 1.5rem)
              x: isMobile ? `-${index * 100}%` : `-${index * 50}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-[calc(50%-12px)] bg-white p-8 md:p-10 rounded-[2rem] shadow-lg  border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-indigo-600 text-3xl mb-6 opacity-20"
                  />
                  <p className="text-gray-600 text-lg leading-relaxed italic">
                    "{item.message}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-2xl object-cover ring-4 ring-indigo-50"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-4 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-amber-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons - Hidden on very small screens for better UI */}
        <div className="hidden md:flex">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-2xl w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-2xl w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all active:scale-90"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => {
             // Only show dots that make sense for the current view
             if (!isMobile && i === testimonials.length - 1) return null;
             return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === i ? "w-8 bg-indigo-600" : "w-2 bg-gray-300"
                  }`}
                />
             )
          })}
        </div>
      </div>
    </section>
  );
}