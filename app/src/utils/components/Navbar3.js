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
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>

        {/* Profile section on the right */}
        <div className="absolute right-0 flex items-center space-x-2">
          <img
            src={images.thomas} // Replace with the correct image URL
            alt="thomas"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-white">Jur</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
