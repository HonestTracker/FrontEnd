import React, { useEffect, useState } from "react";
import { images } from "../../constants/Images";
import { icons } from "../../constants/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../../CustomLink";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
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

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("https://api.honesttracker.nl/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message || "An error occurred during logout.");
      }

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpiration");
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const renderLoggedInUser = () => {
    if (isLoggedIn) {
      const loggedUserString = localStorage.getItem("user");
      if (!loggedUserString) {
        console.error("No user data found");
        return null;
      }

      let loggedUser;
      try {
        loggedUser = JSON.parse(loggedUserString);
      } catch (error) {
        console.error("Error parsing user data:", error);
        return null;
      }

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
                <div className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100">
                  <icons.DoorOpen className="h-10 -ml-32" />
                  <button
                    className="text-xl absolute ml-12"
                    onClick={handleLogout}
                    style={{ fontFamily: "Poppins, sans-serif", right: "10px" }}
                    type="button"
                  >
                    Logout
                  </button>
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
    <nav className="bg-customTeal p-4 flex items-center w-full shadow-lg">
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
            <CustomLink to="/products">Products</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            {isLoggedIn ? (
              <CustomLink to="/settingsauth">Settings</CustomLink>
            ) : (
              <CustomLink to="/settings">Settings</CustomLink>
            )}
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
