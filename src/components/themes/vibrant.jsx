import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [eventType, setEventType] = useState("Birthday Party");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const eventColors = {
    "Birthday Party": "from-pink-500 to-orange-400",
    "Wedding Celebration": "from-purple-500 to-pink-500",
    "Corporate Event": "from-indigo-500 to-blue-500",
    "Music Festival": "from-yellow-400 to-red-500",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br ${eventColors[eventType]} transition-all duration-700`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 md:p-14 relative overflow-hidden"
      >
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 space-y-6"
            >
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Plan Your Dream Event 🎉
              </h2>

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />

              {/* Event Type */}
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option>Birthday Party</option>
                <option>Wedding Celebration</option>
                <option>Corporate Event</option>
                <option>Music Festival</option>
              </select>

              {/* Message */}
              <div>
                <textarea
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your event vision..."
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition resize-none"
                ></textarea>
                <div className="text-right text-sm text-gray-400 mt-1">
                  {message.length} / 250 characters
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition flex items-center justify-center gap-3 shadow-lg"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Let’s Celebrate
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <FontAwesomeIcon
                icon={faCheck}
                className="text-green-500 text-6xl mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                🎉 Inquiry Sent Successfully!
              </h3>
              <p className="text-gray-500 mt-4">
                Our team will contact you soon to start planning your amazing event.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}