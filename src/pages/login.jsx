import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendarCheck,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-rose-100 px-4">
      <div className="grid lg:grid-cols-2 w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-rose-500 text-white p-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="text-6xl" />
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-lg opacity-90 leading-relaxed">
              Plan, manage and organize your events seamlessly with our smart
              event management platform.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-8 sm:p-12">
          <div className="w-full max-w-md space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-2"
            >
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>
              <p className="text-gray-500 text-sm">
                Access your dashboard to manage events
              </p>
            </motion.div>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-2xl shadow-xl space-y-2"
            >
              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-500 hover:text-indigo-600 transition"
                  >
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
              </div>

              {/* REMEMBER + FORGOT */}
              <div className="flex items-center justify-between text-sm">
                {/* <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label> */}
                <a
                  href="#"
                  className="text-indigo-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-rose-300/40 transition-all duration-300"
              >
                {loading ? "Logging in..." : "Login to Dashboard"}
              </button>
            </form>

            {/* SIGNUP */}
            <div className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <a
                href="#"
                className="text-indigo-600 font-medium hover:underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
