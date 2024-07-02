import React, { useEffect, useState } from "react";
import { images } from "../../constants/images/Images";
import { icons } from "../../constants/images/Icons";
import { useLocation, useNavigate } from "react-router-dom";
import CustomLink from "./CustomLink";

/**
 * Represents a navigation bar component.
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [NavbarItemsOpen, setNavbarItemsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // check if the token is still valid
  const checkTokenExpiry = () => {
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found");
      setIsLoggedIn(false);
      return false;
    }
    if (!tokenExpiration) {
      console.log("No token expiration found");
      setIsLoggedIn(false);
      return false;
    }
    const expirationTimeMillis = parseInt(tokenExpiration);
    if (isNaN(expirationTimeMillis)) {
      console.error("Invalid token expiration format:", tokenExpiration);
      return;
    }

    const expirationDate = new Date(expirationTimeMillis);
    const currentTime = new Date();
    if (expirationDate <= currentTime) {
      console.log("Token expired");
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      setIsLoggedIn(false);
      return false;
    }
    return true;
  };

  // check if the token is still valid on page load
  useEffect(() => {
    const isValidToken = checkTokenExpiry();
    setIsLoggedIn(isValidToken);

    const path = location.pathname;
    setIsLoginPage(path === "/login" || path === "/register");
  }, [location]);

  const toLoginPage = () => {
    navigate("/login");
  };

  // render the sign in button if the user is not logged in and the current page is not the login page
  const renderSignInButton = () => {
    if (!isLoggedIn && !isLoginPage) {
      return (
        <button
          className="bg-teal-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-teal-300"
          onClick={toLoginPage}
        >
          <CustomLink to="/login">Sign in</CustomLink>
        </button>
      );
    }
    return null;
  };

  // handle the logout process
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    try {
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(
          responseData.message || "An error occurred during logout."
        );
      }

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("tokenExpiration");
      console.log("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // render the logged in user if the user is logged in, also render the dropdown menu if the user clicks on the user icon
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

      if (!loggedUser) {
        console.error("Invalid user data");
        return null;
      }
      const profilePictureUrl = loggedUser.picture_url.startsWith("/")
        ? `https://api.honesttracker.nl${loggedUser.picture_url}`
        : images.placeholder;
      return (
        <div className="flex items-center space-x-2">
          <span className="text-white">{loggedUser.name}</span>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex justify-between text-white px-4 py-2 "
            >
              <img
                src={profilePictureUrl}
                alt={loggedUser.name}
                className="h-12 w-12 rounded-full"
              />
            </button>
            {isOpen && (
              <div className="absolute right-0 z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <CustomLink to="/profile">
                  <div
                    className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown} // Close dropdown when clicking on profile link
                  >
                    <icons.AddressCard
                      width={30}
                      height={30}
                      className="mr-2"
                    />
                    <p className="text-xl">Profile</p>
                  </div>
                </CustomLink>

                <CustomLink to="/settingsauth">
                  <div
                    className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown} // Close dropdown when clicking on settings link
                  >
                    <icons.SettingsGear
                      width={30}
                      height={30}
                      className="mr-2"
                    />
                    <p className="text-xl">Settings</p>
                  </div>
                </CustomLink>

                <div
                  className="flex items-center cursor-pointer px-4 py-2 text-lg text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout} // Perform logout and close dropdown
                >
                  <icons.DoorOpen width={30} height={30} className="mr-2" />
                  <p className="text-xl">Logout</p>
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
    <nav className="bg-customTeal p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={images.logoFNBG}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div className="hidden md:flex space-x-10 text-white text-lg">
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
        <div className="hidden md:flex items-center space-x-4">
          {renderSignInButton()}
          {renderLoggedInUser()}
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          {renderSignInButton()}
          {renderLoggedInUser()}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 mt-4 text-white text-lg">
            <CustomLink to="/" onClick={() => setIsOpen(false)}>Home</CustomLink>
            <CustomLink to="/products" onClick={() => setIsOpen(false)}>Products</CustomLink>
            <CustomLink to="/about" onClick={() => setIsOpen(true)}>About</CustomLink>
            <CustomLink to="/contact" onClick={() => setIsOpen(false)}>Contact</CustomLink>
            {isLoggedIn ? (
              <CustomLink to="/settingsauth" onClick={() => setNavbarItemsOpen(false)}>Settings</CustomLink>
            ) : (
              <CustomLink to="/settings" onClick={() => setIsOpen(false)}>Settings</CustomLink>
            )}
          </div>
          <div className="flex flex-col items-center mt-4">
           
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
