// src/components/Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className="bg-teal-500 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/24"
          alt="Logo"
          className="h-6 w-6 rounded-full"
        />
      </div>
      <div className="flex space-x-8 text-white text-lg">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
