import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md text-white px-6 md:px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3 text-xl font-bold">
        <FaChalkboardTeacher className="text-cyan-400 w-8 h-8" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
          EdTech
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-lg">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "hover:text-cyan-400 transition"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/practice"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "hover:text-cyan-400 transition"
          }
        >
          Practice
        </NavLink>
        <NavLink
          to="/subject"
          className={({ isActive }) =>
            isActive
              ? "text-cyan-400 font-semibold"
              : "hover:text-cyan-400 transition"
          }
        >
          Subject
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-6 h-6 text-white" />
          ) : (
            <FaBars className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center py-4 md:hidden">
          <NavLink
            to="/home"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold py-2"
                : "hover:text-cyan-400 transition py-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/practice"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold py-2"
                : "hover:text-cyan-400 transition py-2"
            }
          >
            Practice
          </NavLink>
          <NavLink
            to="/subject"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-400 font-semibold py-2"
                : "hover:text-cyan-400 transition py-2"
            }
          >
            Subject
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
