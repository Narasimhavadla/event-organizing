import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faChevronDown,
  faCalendarCheck,
  faPhone,
  faHeart,
  faBuilding,
  faMusic,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import KapiLogo from "../assets/logopng.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setDesktopDropdown(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDesktopDropdown(false);
    }, 150);
  };

  // ✅ Updated services with routes
  const services = [
    { icon: faHeart, title: "Wedding Planning", path: "/wedding" },
    { icon: faBuilding, title: "Corporate Events", path: "/corporate-events" },
    { icon: faMusic, title: "Live Concerts", path: "/live-concert" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/80 backdrop-blur-md py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <div className="text-2xl font-bold text-indigo-600">
            <img src={KapiLogo} alt="Logo" className="h-12 w-20" />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 font-medium text-gray-700">

            <NavLink to="/" className="hover:text-indigo-600 transition">
              Home
            </NavLink>

            <NavLink to="/about-us" className="hover:text-indigo-600 transition">
              About
            </NavLink>

            {/* ===== DESKTOP DROPDOWN ===== */}
            <div
              className="relative"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <button className="flex items-center gap-2 hover:text-indigo-600 transition">
                Services
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform duration-300 ${
                    desktopDropdown ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {desktopDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 mt-6 w-72 bg-white rounded-2xl shadow-2xl border overflow-hidden"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t"></div>

                    <div className="py-3">
                      {services.map((service, index) => (
                        <NavLink
                          key={index}
                          to={service.path}
                          className="group flex items-center gap-4 px-6 py-4 hover:bg-indigo-50 transition relative"
                        >
                          <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></span>

                          <FontAwesomeIcon
                            icon={service.icon}
                            className="text-indigo-500 group-hover:text-indigo-700 transition"
                          />

                          <span className="group-hover:text-indigo-700 transition">
                            {service.title}
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </NavLink>

            <div className="flex items-center gap-2 text-gray-600">
              <FontAwesomeIcon icon={faPhone} />
              +91 98765 43210
            </div>

          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">

            {/* LOGIN BUTTON */}
            <NavLink
              to="/login"
              className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-5 py-2.5 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
              Login
            </NavLink>

            {/* BOOK EVENT BUTTON */}
            <NavLink
              to="/book-event"
              className="flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-rose-300/50 hover:scale-105 transition duration-300"
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              Book Event
            </NavLink>
          </div>

          {/* MOBILE BUTTON */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen(true)}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE PANEL ================= */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Panel */}
        <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 flex flex-col">

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-indigo-600">
              EventElite
            </h2>
            <button onClick={() => setMobileOpen(false)}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>

          <div className="flex flex-col gap-6 font-medium text-gray-700">

            <NavLink to="/" onClick={() => setMobileOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about-us" onClick={() => setMobileOpen(false)}>
              About
            </NavLink>

            {/* MOBILE DROPDOWN */}
            <div>
              <button
                onClick={() => setMobileDropdown(!mobileDropdown)}
                className="flex justify-between items-center w-full"
              >
                Services
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    mobileDropdown ? "rotate-180 text-indigo-600" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-4 ml-4 flex flex-col gap-4 text-gray-600"
                  >
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={service.path}
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" onClick={() => setMobileOpen(false)}>
              Contact
            </NavLink>

            <div className="flex items-center gap-2 text-gray-600">
              <FontAwesomeIcon icon={faPhone} />
              +91 98765 43210
            </div>
          </div>

          <div className="flex-grow"></div>


          <NavLink
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="mb-2 border border-indigo-600 text-indigo-600 py-3 rounded-full text-center hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </NavLink>

          <NavLink
            to="/book-event"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-indigo-600 text-white py-3 rounded-full shadow hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faCalendarCheck} />
            Book Event
          </NavLink>
        </div>
      </div>
    </>
  );
}