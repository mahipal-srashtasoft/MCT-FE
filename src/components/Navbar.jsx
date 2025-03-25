import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "/public/Images/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-20 ml-2" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
              { name: "Programs", path: "/programs" },
              { name: "Volunteer", path: "/volunteer" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-orange-500 transition ${
                    isActive ? "text-orange-500 font-bold" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Donate Button (Desktop) */}
          <div className="hidden md:block">
            <NavLink
              to="/donate"
              className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Donate Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <X className="w-8 h-8 text-gray-700 transition-transform transform rotate-180" />
            ) : (
              <Menu className="w-8 h-8 text-gray-700 transition-transform transform rotate-0" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-500 ease-in-out transform ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        {isOpen && (
          <ul className="flex flex-col items-center py-4 space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
              { name: "Programs", path: "/programs" },
              { name: "Volunteer", path: "/volunteer" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-orange-500 transition ${
                      isActive ? "text-orange-500 font-bold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            {/* Donate Button (Mobile) */}
            <li>
              <NavLink
                to="/donate"
                onClick={toggleMenu}
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
              >
                Donate Now
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
