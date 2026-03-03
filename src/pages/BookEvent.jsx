import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BookEvent() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    date: "",
    guests: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex items-center justify-center px-6 py-20">

      <div className="w-full max-w-7xl grid lg:grid-cols-3 gap-10">

        {/* ===== LEFT STEPPER ===== */}
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
          <h2 className="text-xl font-semibold mb-10">Booking Progress</h2>

          {["Event Details", "Your Information", "Review & Confirm"].map(
            (title, index) => (
              <div key={index} className="flex items-start gap-4 mb-10">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold transition
                  ${
                    step > index + 1
                      ? "bg-green-500"
                      : step === index + 1
                      ? "bg-gradient-to-r from-purple-600 to-pink-500"
                      : "bg-white/10"
                  }`}
                >
                  {step > index + 1 ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : (
                    index + 1
                  )}
                </div>

                <h4
                  className={`${
                    step === index + 1 ? "text-white" : "text-gray-400"
                  } font-medium`}
                >
                  {title}
                </h4>
              </div>
            )
          )}
        </div>

        {/* ===== FORM SECTION ===== */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            >

              {/* STEP 1 */}
              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-8">

                  {[
                    { name: "eventType", label: "Event Type", type: "text" },
                    { name: "date", label: "Event Date", type: "date" },
                    { name: "guests", label: "Number of Guests", type: "number" },
                    { name: "location", label: "Event Location", type: "text" },
                  ].map((field, i) => (
                    <div key={i} className="flex flex-col">
                      <label className="mb-2 text-sm text-gray-400 tracking-wide">
                        {field.label}
                      </label>

                      <input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-600 py-3 
                                   focus:outline-none focus:border-purple-400 
                                   focus:ring-0 transition duration-300"
                      />
                    </div>
                  ))}

                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-8">

                  {[
                    { name: "name", label: "Full Name" },
                    { name: "email", label: "Email Address" },
                    { name: "phone", label: "Phone Number" },
                    { name: "budget", label: "Budget Range" },
                  ].map((field, i) => (
                    <div key={i} className="flex flex-col">
                      <label className="mb-2 text-sm text-gray-400 tracking-wide">
                        {field.label}
                      </label>

                      <input
                        type="text"
                        name={field.name}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-600 py-3 
                                   focus:outline-none focus:border-purple-400 
                                   transition duration-300"
                      />
                    </div>
                  ))}

                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-semibold mb-8">
                    Review Your Booking
                  </h3>

                  <div className="bg-black/40 p-8 rounded-2xl space-y-4 border border-white/10">
                    {Object.entries(formData).map(
                      ([key, value]) =>
                        value && (
                          <div
                            key={key}
                            className="flex justify-between text-gray-300"
                          >
                            <span className="capitalize">{key}</span>
                            <span className="text-white">{value}</span>
                          </div>
                        )
                    )}
                  </div>

                  <button className="mt-10 w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-full font-semibold hover:scale-105 transition">
                    Confirm Booking
                  </button>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex justify-between mt-14">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
              </button>
            )}

            {step < 3 && (
              <button
                onClick={nextStep}
                className="ml-auto bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition"
              >
                Next
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}