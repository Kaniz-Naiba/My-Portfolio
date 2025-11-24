import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaGraduationCap,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Added explicit 'id' for each section to avoid mismatch
  const menuItems = [
    { name: "Home", icon: <FaHome />, id: "home" },
    { name: "About Me", icon: <FaUser />, id: "about" },       // matches your AboutMe id
    { name: "Skills", icon: <FaTools />, id: "skills" },
    { name: "Education", icon: <FaGraduationCap />, id: "education" },
    { name: "Projects", icon: <FaFolderOpen />, id: "projects" },
    { name: "Contact", icon: <FaEnvelope />, id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 shadow-lg rounded-3xl z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium items-center">
          {menuItems.map(({ name, icon, id }) => (
            <li key={name} className="flex items-center space-x-1">
              <a
                href={`#${id}`}
                className="hover:text-pink-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/Tanbina Kaniz Naiba -Web Developer.pdf"
            download
            className="bg-white text-[rgb(185,56,99)] px-4 py-2 rounded hover:bg-pink-300 transition duration-300 font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-[rgb(185,56,99)] px-4 pb-4 space-y-3 text-center rounded-b-3xl">
          {menuItems.map(({ name, icon, id }) => (
            <a
              key={name}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white font-medium hover:text-pink-300 transition flex items-center justify-center space-x-2"
            >
              <span className="text-lg">{icon}</span>
              <span>{name}</span>
            </a>
          ))}
          <a
            href="/Tanbina Kaniz Naiba -Web Developer.pdf"
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
