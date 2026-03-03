import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUsers,
  faLocationDot,
  faCheck,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BookEvent() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-14">

        {/* ===== Progress Bar ===== */}
        <div className="flex items-center justify-between mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1 relative">
              <div
                className={`h-1 ${
                  step >= item ? "bg-black" : "bg-gray-200"
                } transition`}
              ></div>
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
                ${
                  step >= item
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* ===== Step Content ===== */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-gray-500">Event Type</label>
                  <select className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Brand Launch</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} />
                    Guests
                  </label>
                  <input
                    type="number"
                    placeholder="Approx guests"
                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="City / Venue"
                    className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Budget Range"
                  className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <textarea
                rows="4"
                placeholder="Tell us more about your vision..."
                className="w-full mt-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-10">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-5xl text-green-500 mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">
                Review & Submit
              </h2>
              <p className="text-gray-500 mb-6">
                Please confirm your booking details before submitting.
              </p>
              <button className="bg-black text-white px-10 py-3 rounded-full hover:scale-105 transition">
                Confirm Booking
              </button>
            </div>
          )}
        </motion.div>

        {/* ===== Navigation Buttons ===== */}
        <div className="flex justify-between mt-12">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-gray-600 hover:text-black transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              Back
            </button>
          )}

          {step < 3 && (
            <button
              onClick={nextStep}
              className="ml-auto bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition"
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}