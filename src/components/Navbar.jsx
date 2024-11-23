import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300"
          >
            <img src={image} alt="Logo" className="w-16 h-16 hover:scale-125 transition duration-300" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-gray-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white/80 hover:text-white font-medium transition duration-300 hover:scale-105 hover:bg-purple-600 px-4 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white/80 hover:text-white font-medium transition duration-300 hover:scale-105 hover:bg-purple-600 px-4 py-2 rounded-lg"
            >
              About
            </Link>
            <Link
              to="/team"
              className="text-white/80 hover:text-white font-medium transition duration-300 hover:scale-105 hover:bg-purple-600 px-4 py-2 rounded-lg"
            >
              Team
            </Link>
            <Link
              to="/event"
              className="text-white/80 hover:text-white font-medium transition duration-300 hover:scale-105 hover:bg-purple-600 px-4 py-2 rounded-lg"
            >
              Event
            </Link>
            <Link
              to="/gallery"
              className="text-white/80 hover:text-white font-medium transition duration-300 hover:scale-105 hover:bg-purple-600 px-4 py-2 rounded-lg"
            >
              Gallery
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/"
              className="block text-white/80 hover:text-white font-medium transition duration-300 hover:bg-purple-600 px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white/80 hover:text-white font-medium transition duration-300 hover:bg-purple-600 px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/team"
              className="block text-white/80 hover:text-white font-medium transition duration-300 hover:bg-purple-600 px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/event"
              className="block text-white/80 hover:text-white font-medium transition duration-300 hover:bg-purple-600 px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Event
            </Link>
            <Link
              to="/gallery"
              className="block text-white/80 hover:text-white font-medium transition duration-300 hover:bg-purple-600 px-4 py-2 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
