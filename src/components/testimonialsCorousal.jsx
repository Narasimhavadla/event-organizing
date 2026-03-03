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
    message:
      "The team executed our annual corporate summit flawlessly. Professional planning and smooth coordination.",
  },
  {
    name: "Ananya Sharma",
    role: "Wedding Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    message:
      "They transformed our wedding into a magical experience. Every detail was beautifully executed.",
  },
  {
    name: "Vikram Reddy",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    message:
      "Our product launch was a grand success thanks to their creative ideas.",
  },
  {
    name: "Sneha Kapoor",
    role: "Event Host",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message:
      "Extremely professional and reliable team. Highly recommended for premium events.",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className=" py-20 overflow-hidden">
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-4">
          Trusted by brands and families for unforgettable events.
        </p>
      </div>

      <div className="relative">

        {/* Carousel Wrapper */}
        <div className="overflow-hidden px-6 md:px-20">

          <motion.div
            className="flex gap-8"
            animate={{
              x: `-${index * (100 / 2)}%`,
            }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[85%] md:min-w-[48%] bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
              >
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-indigo-500 text-2xl mb-4"
                />

                <p className="text-gray-600 leading-relaxed">
                  {item.message}
                </p>

                <div className="flex mt-4 gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400 text-sm"
                    />
                  ))}
                </div>

                <div className="flex items-center mt-6 gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-indigo-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 md:right-10 transform -translate-y-1/2 bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
}