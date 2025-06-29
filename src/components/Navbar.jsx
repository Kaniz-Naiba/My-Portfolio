import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "About Me", "Experience", "Education", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 shadow-md z-50 text-white ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Naiba</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-pink-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/Kaniz-Naiba-Resume.pdf"
            download
            className="bg-white text-[rgb(185,56,99)] px-4 py-2 rounded hover:bg-pink-300 transition duration-300 font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-[rgb(185,56,99)] px-4 pb-4 space-y-3 text-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white font-medium hover:text-pink-300 transition"
            >
              {item}
            </a>
          ))}
          <a
            href="/Kaniz-Naiba-Resume.pdf"
            download
            className="inline-block mt-2 bg-white text-[rgb(185,56,99)] px-4 py-2 rounded hover:bg-pink-300 transition duration-300 font-semibold"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
