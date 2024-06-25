import React, { useEffect, useState } from "react";
import { images } from "../../constants/Images";
import { icons } from "../../constants/Icons";
import { useLocation } from "react-router-dom";
import CustomLink from "../../CustomLink";

const isLoggedIn = false;
const isLoginPage = false;

function Navbar() {
  const location = useLocation();
  let [isLoginPage, setIsLoginPage] = useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    const path = location.pathname;
    if (path === "/login" || path === "/register") {
      setIsLoginPage(true);
    } else {
      setIsLoginPage(false);
    }
  }, [location]);
  const renderSignInButton = () => {
    if (!isLoggedIn && !isLoginPage) {
      return (
        <div className="absolute right-44">
          <button className="bg-teal-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-teal-300">
            <CustomLink to="/login">Sign in</CustomLink>
          </button>
        </div>
      );
    }
    return null;
  };

  const renderLoggedInUser = () => {
    if (isLoggedIn) {
      const loggedUserString = localStorage.getItem("user");
      const loggedUser = JSON.parse(loggedUserString);

      return (
        <div className="absolute right-40 flex items-center space-x-2">
          <div className="inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="flex justify-between text-white px-4 py-2 "
            >
              <span className="text-white mt-3">{loggedUser.name}</span>
              <img
                src={images.placeholder}
                alt="thomas"
                className="h-12 w-12 ml-4 rounded-full"
              />
            </button>
            {isOpen && (
              <div className="absolute right-4 z-10  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <CustomLink to="">
                  <div className="flex items-center cursor-pointer  px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
                    <icons.AddressCard class="h-10" />
                    <p class="text-xl ml-2">Profile</p>
                  </div>
                </CustomLink>

                <div className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
                  <icons.SettingsGear class="h-10 w-10  mr-8" />
                  <p class="text-xl -ml-5">Settings</p>
                </div>

                <div className="flex items-center cursor-pointer  px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
                  <icons.DoorOpen class="h-10 -ml-32" />
                  <p class="text-xl absolute ml-12">Logout</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="bg-customTeal p-4 flex items-center w-full shadow-lg ">
      {/* Container for logo and links */}
      <div className="relative flex items-center w-full">
        {/* Logo on the left */}
        <div className="absolute left-40">
          <img
            src={images.logoFNBG}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>

        {/* Centered links */}
        <div className="mx-auto">
          <div className="flex space-x-10 text-white text-lg">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/Products">Products</CustomLink>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Contact">Contact</CustomLink>
            <CustomLink to="/Settings">Settings</CustomLink>
          </div>
        </div>

        {/* Conditionally render sign-in button */}
        {renderSignInButton()}

        <div className="bg-white hidden rounded-lg fixed shadow-lg p-4  w-48">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="path_to_pikachu_image.jpg"
              alt="Pikachu"
              className="h-12 w-12 rounded-full"
            />
            <span className="font-semibold text-lg">Jur</span>
          </div>
          <ul>
            <li className="flex items-center mb-3">
              <img class="h-16" />
              Profile Page
            </li>
            <li className="flex items-center mb-3">
              <img class="h-16" />
              Settings
            </li>
            <li className="flex items-center">
              <img class="h-16" />
              Logout
            </li>
          </ul>
        </div>

        {/* Conditionally render logged-in user */}
        {renderLoggedInUser()}
      </div>
    </nav>
  );
}

export default Navbar;
