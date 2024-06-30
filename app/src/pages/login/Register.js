import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            repeat_password: formData.repeat_password,
            device: "web",
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.log(response);
        if (response.status === 422) {
          console.log(responseData.errors);
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || "An error occurred.");
        }
      } else {
        const accessToken = responseData.access_token;
        const user = responseData.user;
        console.log("Access Token:", accessToken);
        console.log("User:", user);

        await localStorage.setItem("token", accessToken);
        await localStorage.setItem("user", JSON.stringify(user));

        console.log("Token and user stored successfully");
        console.log("Token stored successfully");
        console.log("Response received:", accessToken);
        const expirationTime = new Date().getTime() + 3600 * 1000; // Calculate expiration time in milliseconds
        localStorage.setItem("token", accessToken);
        localStorage.setItem("tokenExpiration", expirationTime.toString());
        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className=" h-screen">
      <main className="py-24">
        <div className="bg-white p-10 rounded-lg mx-auto  shadow-lg w-2/4">
          <h2 className="text-5xl text-center mb-4">Register</h2>
          <p className="mb-4 text-center text-lg">
            Already have an account?{" "}
            <a href="login" className="text-teal-500">
              Log In
            </a>
          </p>
          <form class="text-xl" onSubmit={handleRegister} method="post">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="name"
              placeholder="Username..."
              className="w-full p-3 mb-4 border rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.name && (
              <div className="text-red-400 mb-4">{errors.name[0]}</div>
            )}
            <label htmlFor="email" className="block mb-1 mt-4 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
              className="w-full p-3 mb-4 border rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-400 mb-4">{errors.email[0]}</div>
            )}
            <label htmlFor="password" className="block mb-b mt-4 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              className="w-full p-3 border rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.password && (
              <div className="text-red-400 mb-4">{errors.password[0]}</div>
            )}
            <label htmlFor="confirm-password" className="block mb-1 mt-8">
              Repeat password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="repeat_password"
              placeholder="Password..."
              className="w-full p-3 mb-6 border rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.repeat_password && (
              <div className="text-red-400 mb-4">
                {errors.repeat_password[0]}
              </div>
            )}
            <input
              id="termsCheckbox"
              type="checkbox"
              class="h-4 w-4  mb-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              for="termsCheckbox"
              class="ml-2 absolute mt-1  text-sm text-gray-700"
            >
              I have read and agree to the terms and conditions
            </label>

            <div class="flex justify-center">
              <button type="submit" className="w-80 p-2 bg-teal-500 rounded ">
                <p class="text-2xl text-white font-bold ">Register</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
