import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendarCheck,
  faEnvelope,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  
  // 1. Added State for form inputs and error messages
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // Clear error when user starts typing again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // 2. Dummy Validation Logic
    setTimeout(() => {
      if (formData.username === "admin" && formData.password === "12345") {
        // alert("Login Successful! Redirecting...");
        navigate("/admin-dashboard")

        // You would typically use useNavigate() here from react-router-dom
      } else {
        setError("Invalid username or password. ");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-rose-100 px-4 py-2">
      <div className="grid lg:grid-cols-2 w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* LEFT SIDE (Static Info) */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-rose-500 text-white p-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <FontAwesomeIcon icon={faCalendarCheck} className="text-6xl" />
            <h1 className="text-4xl font-bold">Welcome Back!</h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-md">
              Plan, manage and organize your events seamlessly with our smart
              event management platform.
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-2"
            >
              <h2 className="text-3xl font-bold text-gray-800">Login</h2>
              <p className="text-gray-500 text-sm">Access your dashboard to manage events</p>
            </motion.div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
              
              {/* ERROR MESSAGE BOX */}
              {error && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center"
                >
                  {error}
                </motion.div>
              )}

              {/* USERNAME */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Username</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    name="username" // Important for handleChange
                    value={formData.username}
                    onChange={handleChange}
                    required
                    placeholder="Enter Username"
                    className="w-full pl-11 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600">Password</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-400">
                    <FontAwesomeIcon icon={faLock} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password" // Important for handleChange
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-500 hover:text-indigo-600 transition"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end text-sm">
                <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-95 disabled:opacity-70 transition-all duration-300"
              >
                {loading ? "Verifying..." : "Login"}
              </button>
            </form>

            <div className="text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-indigo-600 font-medium hover:underline">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}