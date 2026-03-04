import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Kapi Events
            </h3>
            <p className="text-sm leading-relaxed">
              We specialize in crafting memorable experiences — from luxury
              weddings to high-end corporate events. Precision, creativity,
              and excellence define us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to="/about-us"
                      className="hover:text-white transition duration-300"
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Wedding Planning",
                "Corporate Events",
                "Birthday Parties",
                "Live Concerts",
                "Private Celebrations",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} />
                Hyderabad, India
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} />
                info@kapienvents.com
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social Icons */}
          <div className="flex gap-5">
            {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map(
              (icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-gray-900 transition"
                >
                  <FontAwesomeIcon icon={icon} />
                </motion.a>
              )
            )}
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} Eventify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}