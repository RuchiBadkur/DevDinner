import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  {
    icon: "🍔",
    link: "/dish-of-the-day",
    label: "Dish of the Day",
    desc: "Build a weather app using React & API calls — explained like making a new dish",
  },
  {
    icon: "📖",
    link: "/dev-cookbook",
    label: "Your DevCookbook",
    desc: "Save your projects + notes + explanations in one place.",
  },
  {
    icon: "🧠",
    link: "/why-this-matters",
    label: "Why This Matters",
    desc: "Stop copy-pasting. Start understanding.",
  },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold text-gray-800 hover:text-orange-500 transition-colors duration-300 tracking-tight"
        >
          🍽️ DevDinner
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 text-base">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="group relative flex flex-col items-center cursor-pointer"
            >
              <Link
                to={item.link}
                className="hover:text-orange-500 transition-colors duration-300 font-medium"
              >
                <span className="text-xl">{item.icon}</span>
              </Link>

              {/* Tooltip */}
              <div className="absolute top-10 w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-white shadow-lg border border-gray-200 px-4 py-3 rounded-md text-sm text-gray-800 z-40">
                <div className="font-semibold text-gray-900 mb-1">
                  {item.label}
                </div>
                <p className="text-xs leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>

              {/* Underline animation */}
              <span className="block w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-6 mt-1"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-800 bg-white shadow-sm">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.link}
                className="flex items-start gap-3 p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-semibold">{item.label}</div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
