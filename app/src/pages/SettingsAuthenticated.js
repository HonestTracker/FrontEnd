import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../utils/components/navigation/BackButton";
import { images } from "../utils/constants/images/Images";
import { icons } from "../utils/constants/images/Icons";

function SettingsAuthenticated() {
  const navigate = useNavigate();
  const loggedUserString = localStorage.getItem("user");
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

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
  const handlePassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }
    console.log("Old Password:", oldPassword);
    console.log("New Password:", password);
    console.log("Repeat Password:", repeatPassword);
    try {
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/edit/password",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Ensure Content-Type is set
          },
          body: JSON.stringify({
            old_password: oldPassword,
            password: password,
            password_confirmation: repeatPassword,
            device: "web",
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        if (response.status === 422) {
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || "An error occurred.");
        }
      } else {
        console.log("Password edit successful");
      }
    } catch (error) {
      console.error("Error during edit:", error);
      // Handle other types of errors here
    }
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    const formData = new FormData();
    if (name) {
      formData.append("name", name);
    }
    if (email) {
      formData.append("email", email);
    }
    formData.append("user_id", loggedUser.id);
    formData.append("device", "web");

    // Add the selected image file, if available
    if (selectedImage) {
      formData.append("picture", selectedImage);
    }

    try {
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/edit",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        if (response.status === 422) {
          const responseData = await response.json(); // Handle validation errors
          console.error("Validation errors:", responseData.errors);
          setErrors(responseData.errors); // Set state to display validation errors
        } else {
          throw new Error(response.statusText || "An error occurred.");
        }
      } else {
        const responseData = await response.json();
        console.log("User edit successful");
        console.log("Response data:", responseData);

        // Update localStorage with the new user data if needed
        if (responseData) {
          localStorage.setItem("user", JSON.stringify(responseData));
        }

        // Navigate to another page after successful edit
        navigate("/");
      }
    } catch (error) {
      console.error("Error during edit:", error);
      // Handle other types of errors here
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file); // Set the file object to state, not reader.result
      const reader = new FileReader();
      reader.onloadend = () => {
        // Optionally, you could set reader.result to preview the image if needed
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };


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
            <form onSubmit={handleEdit} method="post">
              <div className="flex relative">
                <img
                  src={selectedImage ? URL.createObjectURL(selectedImage) : profilePictureUrl}
                  alt="Profile"
                  className="h-64 w-64 border-2 border-gray-300 shadow-md"
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                {errors.picture && (
                  <div className="text-red-400 -mt-5 mb-4">
                    {errors.picture[0]}
                  </div>
                )}
                <div className="flex-col ml-16 w-80">
                  <p className="text-xl mt-16">Username</p>
                  <div className="relative w-full">
                    <input
                      type="text"
                      defaultValue={loggedUser.name}
                      onChange={(e) => setName(e.target.value)}
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
                  {errors.name && (
                    <div className="text-red-400 -mt-5 mb-4">
                      {errors.name[0]}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-col">
                <p className="text-xl mt-6">Email</p>
                <div className="relative w-full">
                  <input
                    type="text"
                    defaultValue={loggedUser.email}
                    onChange={(e) => setEmail(e.target.value)}
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
                {errors.email && (
                  <div className="text-red-400 -mt-5 mb-4">
                    {errors.email[0]}
                  </div>
                )}
                <div className="flex justify-center space-x-4 mt-4">
                  <button className="text-customGray border-2 border-gray-200 rounded-md p-2 w-28">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-teal-400 cursor-pointer text-white ml-6 p-2 rounded hover:bg-teal-300 w-28"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
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
          <form onSubmit={handlePassword} method="post">
            <div className="bg-white border-2 border-gray-200 shadow-md p-4 rounded-lg">
              <div className="mb-10 relative">
                <p className="text-xl mt-6">Old password</p>
                <input
                  type="password"
                  className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Type here"
                  onChange={(e) => setOldPassword(e.target.value)}
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
              {errors.old_password && (
                <div className="text-red-400 -mt-5 mb-4">
                  {errors.old_password[0]}
                </div>
              )}
              <div className="mb-10 relative">
                <p className="text-xl mt-6">New password</p>
                <input
                  type="password"
                  className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Type here"
                  onChange={(e) => setPassword(e.target.value)}
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
              {errors.password && (
                <div className="text-red-400 -mt-5 mb-4">
                  {errors.password[0]}
                </div>
              )}
              <div className="mb-4 relative">
                <p className="text-xl mt-6">Repeat new password</p>
                <input
                  type="password"
                  className="text-customGray border-2 border-gray-200 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                  placeholder="Type here"
                  onChange={(e) => setRepeatPassword(e.target.value)}
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
              {errors.password_confirmation && (
                <div className="text-red-400 -mt-5 mb-4">
                  {errors.password_confirmation[0]}
                </div>
              )}
              <div className="flex justify-center space-x-4 mt-4">
                <button className="text-customGray border-2 border-gray-200 rounded-md p-2 w-28">
                  Cancel
                </button>
                <button type="submit" className="bg-teal-400 cursor-pointer text-white ml-6 p-2 rounded hover:bg-teal-300 w-28">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main >
  );
}

export default SettingsAuthenticated;
