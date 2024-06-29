import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../utils/components/navigation/BackButton";
import { images } from "../utils/constants/images/Images";
import { icons } from "../utils/constants/images/Icons";

function SettingsAuthenticated() {
  const navigate = useNavigate();
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
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const baseURL = "https://api.honesttracker.nl";
  const profilePictureUrl = loggedUser.picture_url.startsWith("/")
    ? `https://api.honesttracker.nl${loggedUser.picture_url}`
    : images.placeholder;

  return (
    <main className="p-48">
      <div className="absolute -mt-40 z-10">
        <BackButton />
      </div>

      <div className="grid grid-cols-3 gap-4 -mt-24">
        <div className="col-span-2 mb-14">
          <h1 className="text-xl font-semibold">Edit account details</h1>
          <div className="bg-white border-2 border-gray-200 shadow-md p-4 rounded-lg">
            <div className="flex relative">
              <form>
                <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="h-64 w-64 border-2 border-gray-300 shadow-md"
                />
                <icons.Pencil
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                />
              </form>
              <div className="flex-col ml-16 w-80">
                <p className="text-xl mt-16">Username</p>
                <div className="relative w-full">
                  <input
                    type="text"
                    defaultValue={loggedUser.name}
                    className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                  />
                  <icons.Pencil
                    style={{
                      width: "20px",
                      height: "20px",
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-col">
              <p className="text-xl mt-6">Email</p>
              <div className="relative w-full">
                <input
                  type="text"
                  defaultValue={loggedUser.email}
                  className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                />
                <icons.Pencil
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    right: 16,
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="text-customGray border-2 border-gray-200 rounded-md p-2 w-28">
                  Cancel
                </button>
                <button className="bg-teal-400 cursor-pointer text-white ml-6 p-2 rounded hover:bg-teal-300 w-28">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="text-xl font-semibold">Appearance</h1>
          <div className="bg-white border-2 border-gray-200 shadow-md p-4 rounded-lg">
            <div className="mb-10">
              <p className="pl-6 pr-6 text-xl">Theme</p>
              <select
                id="currency"
                className="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56 focus:outline-none focus:border-blue-500"
              >
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>

            <div className="mb-10">
              <p className="pl-6 pr-6 text-xl">Currency</p>
              <select
                id="currency"
                className="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 pr-28 w-56 focus:outline-none focus:border-blue-500"
              >
                <option>Euro</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-2 -mt-6">
          <h1 className="text-xl font-semibold">Edit password</h1>
          <div className="bg-white border-2 border-gray-200 shadow-md p-4 rounded-lg">
            <div className="mb-10 relative">
              <p className="text-xl mt-6">Old password</p>
              <input
                type="text"
                className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                placeholder="Type here"
              />
              <icons.Pencil
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: 16,
                  top: "70%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>

            <div className="mb-10 relative">
              <p className="text-xl mt-6">New password</p>
              <input
                type="text"
                className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                placeholder="Type here"
              />
              <icons.Pencil
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: 16,
                  top: "70%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>

            <div className="mb-4 relative">
              <p className="text-xl mt-6">Repeat new password</p>
              <input
                type="text"
                className="text-customGray border-2 border-gray-200 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                placeholder="Type here"
              />
              <icons.Pencil
                style={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: 16,
                  top: "70%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="text-customGray border-2 border-gray-200 rounded-md p-2 w-28">
                Cancel
              </button>
              <button className="bg-teal-400 cursor-pointer text-white ml-6 p-2 rounded hover:bg-teal-300 w-28">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SettingsAuthenticated;
