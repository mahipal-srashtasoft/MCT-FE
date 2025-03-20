import React from "react";
import { NavLink } from "react-router-dom";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import logo from "/public/Images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* NGO Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="" className="w-40 ml-2" />
            </div>
            <p className="text-gray-400">
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
                    `text-gray-400 hover:text-orange-500 transition ${
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
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
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
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 flex md:justify-between flex-col md:flex-row">
          <p>© {new Date().getFullYear()} NGO Name. All rights reserved.</p>
          <p>Design And Developed by <strong>Srashtasoft</strong></p>
        </div>
      </div>
    </footer>
  );
}
