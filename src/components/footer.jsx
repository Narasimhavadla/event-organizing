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
  // Define unique paths for Quick Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/wedding" },
    { name: "Gallery", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  // Define unique paths for Service Links
  const serviceLinks = [
    { name: "Wedding Planning", path: "/wedding" },
    { name: "Corporate Events", path: "/corporate-events" },
    // { name: "Birthday Parties", path: "/" },
    { name: "Live Concerts", path: "/live-concert" },
    { name: "Private Celebrations", path: "/" },
  ];

  const activeLinkStyle = "text-white font-bold tracking-wide transition-all";
  const normalLinkStyle = "hover:text-white transition duration-300 flex items-center gap-2";

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Kapi Events</h3>
            <p className="text-sm leading-relaxed">
              We specialize in crafting memorable experiences — from luxury
              weddings to high-end corporate events. Precision and excellence define us.
            </p>
          </div>

          {/* Quick Links with dynamic NavLinks */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services with dynamic NavLinks */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <NavLink
                    to={service.path}
                    className={({ isActive }) => 
                      isActive ? activeLinkStyle : normalLinkStyle
                    }
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-400" />
                Hyderabad, India
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-indigo-400" />
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-indigo-400" />
                info@kapienvents.com
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-5">
            {[faFacebookF, faInstagram, faTwitter, faLinkedinIn].map((icon, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#111827" }}
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full transition"
              >
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Kapi Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}