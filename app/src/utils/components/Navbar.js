import React from "react";
import { images } from "../constants/images/images";

function Navbar() {
  return (
    <nav className="bg-teal-500 p-4 flex items-center ">
      {/* Container for logo and links (right-aligned) */}
      <div className="flex  justify-between">
        {/* Logo on the left */}
        <div className="flex items-center mr-auto">
          <img src={images.logo} alt="Logo" className="h-6 w-6 rounded-full" />
        </div>

        {/* Centered links within the right space */}
        <div className="flex space-x-4 text-white text-lg justify-center">
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
    </nav>
  );
}

export default Navbar;
