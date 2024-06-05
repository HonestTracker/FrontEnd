import React from "react";
import { images } from "../constants/images/images";

function Navbar() {
  return (
    <nav className="bg-customTeal p-6 flex items-center w-full shadow-2xl">
      {/* Container for logo and links */}
      <div className="relative flex items-center w-full">
        {/* Logo on the left */}
        <div className="absolute left-0">
          <img
            src={images.logo}
            alt="Logo"
            className="h-14 w-14 rounded-full"
          />
        </div>

        {/* Centered links */}
        <div className="mx-auto">
          <div className="flex space-x-6 text-white text-xl">
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
