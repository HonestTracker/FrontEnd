import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.honesttracker.nl/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          device: "web",
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || "An error occurred.");
        }
      } else {
        const { access_token: accessToken, user } = responseData;
        const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour

        localStorage.setItem("token", accessToken);
        localStorage.setItem("user", JSON.stringify(user));
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
    <div className="bg-gray-100">
      <main className="flex items-center py-24">
        <div className="bg-white mx-auto p-10 rounded-lg shadow-lg w-2/4">
          <h2 className="text-5xl text-center mb-4">Log In</h2>
          <p className="mb-4 text-center text-lg">
            Don't have an account yet?{" "}
            <a href="register" className="text-teal-500">
              Sign Up
            </a>
          </p>
          <form onSubmit={handleLogin} method="post" className="text-xl">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
              className="w-full p-3 mb-8 border rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-400 -mt-5 mb-4">{errors.email[0]}</div>}
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              className="w-full p-3 border mb-8 rounded shadow-md shadow-gray-400"
              onChange={handleChange}
            />
            {errors.password && <div className="text-red-400 -mt-5 mb-4">{errors.password[0]}</div>}
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-teal-500">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-80 p-2 bg-teal-500 rounded">
                <p className="text-2xl text-white font-bold">Login</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
