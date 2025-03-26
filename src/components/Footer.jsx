import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import logo from "/public/Images/Logo.png";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer
        className="relative bg-gray-900 text-white"
        style={{
          backgroundImage: `url('/Images/Bg Background.jpg')`, // Set your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "2850px -2510px 81px rgba(14, 0, 57, 0.6) inset ",

        }}
      >
        {/* Overlay for dark effect */}
        <div className="absolute inset-0 bg-gradient-to-r to-orange-300 via-black from-orange-300 opacity-50"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* NGO Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4 justify-center">
                <img src={logo} alt="Logo" className="w-40 ml-2" />
              </div>
              <p className="text-gray-300">
                Making a difference in the lives of those who need it most.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="flex flex-col space-y-2">
                {[
                  { name: "Gallery", path: "/gallery" },
                  { name: "About Us", path: "/about" },
                  { name: "Our Programs", path: "/programs" },
                  { name: "Volunteer", path: "/volunteer" },
                  { name: "Donate", path: "/donate" },
                ].map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-gray-300 hover:text-orange-500 transition ${
                        isActive ? "text-orange-500 font-bold" : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>123 NGO Street, City, Country</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>contact@ngo.org</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-500">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300 flex md:justify-between flex-col md:flex-row">
            <p>© {new Date().getFullYear()} મોક્ષ ચેરિટેબલ ટ્રસ્ટ. All rights reserved.</p>
            <p> 
              Design And Developed by <strong>Srashtasoft</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 p-3 bg-orange-500 text-white rounded-full shadow-lg transition-all duration-500 transform ${
          showScroll
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-0 translate-y-10"
        }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
}
