import React from "react";
import { images } from "../../constants/Images";
import { Link } from "react-router-dom";

// DUMMY VALUES
const isLoggedIn = true;
const isLoginPage = false;

function Navbar() {
  const renderSignInButton = () => {
    if (!isLoggedIn && !isLoginPage) {
      return (
        <div className="absolute right-0">
          <button className="bg-teal-400 text-white px-4 py-2 rounded hover:bg-teal-300">
            Sign In
          </button>
        </div>
      );
    }
    return null;
  };

  const renderLoggedInUser = () => {
    if (isLoggedIn) {
      return (
        <div className="absolute right-0 flex items-center space-x-2">
          <span className="text-white">Jur</span>
          <img
            src={images.placeholder}
            alt="thomas"
            className="h-10 w-10 rounded-full"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="bg-customTeal p-4 flex items-center w-full shadow-lg">
      {/* Container for logo and links */}
      <div className="relative flex items-center w-full">
        {/* Logo on the left */}
        <div className="absolute left-0">
          <img
            src={images.logoFNBG}
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

        {/* Conditionally render sign-in button */}
        {renderSignInButton()}

        {/* Conditionally render logged-in user */}
        {renderLoggedInUser()}
      </div>
    </nav>
  );
}

export default Navbar;
