import React from "react";
import { images } from "../constants/images/images";

function Navbar() {
  return (
    <nav className="bg-teal-500 p-4 flex items-center w-full shadow-2xl">
      {/* Container for logo and links */}
      <div className="relative flex items-center w-full">
        {/* Logo on the left */}
        <div className="absolute left-0">
          <img
            src={images.logo}
            alt="Logo"
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* Centered links */}
        <div className="mx-auto">
          <div className="flex space-x-4 text-white text-lg">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              Products
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
