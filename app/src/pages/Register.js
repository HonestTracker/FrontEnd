import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
const Register = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    /*try {
      console.log(email, password)
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
            device: "web",
          }),
        }
      )

      const responseData = await response.json()

      if (!response.ok) {
        console.log(response)
        if (response.status === 422) {
          console.log(responseData.errors)
          setErrors(responseData.errors)
        } else {
          throw new Error(responseData.message || "An error occurred.")
        }
      } else {
        const accessToken = responseData.access_token
        const user = responseData.user;
        console.log("Access Token:", accessToken)
        console.log("User:", user);

        await localStorage.setItem('token', accessToken);
        await localStorage.setItem("user", JSON.stringify(user));

        console.log("Token and user stored successfully");
        console.log("Token stored successfully")
        console.log("Response received:", accessToken)
        navigate('/')
      }
    } catch (error) {
      console.error("Error during login:", error)
    }*/
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className=" bg-gray-100">
      <main className="py-24">
        <div className="bg-white p-10 rounded-lg mx-auto  shadow-lg w-2/4">
          <h2 className="text-5xl text-center mb-4">Register</h2>
          <p className="mb-4 text-center text-lg">
            Already have an account?{" "}
            <a href="login" className="text-teal-500">
              Log In
            </a>
          </p>
          <form onSubmit={handleSubmit} class="text-xl ">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username..."
              className="w-full p-3 mb-4 border rounded shadow-md shadow-gray-400"
            />

            <label htmlFor="email" className="block mb-1 mt-4 ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email..."
              className="w-full p-3 mb-4 border rounded shadow-md shadow-gray-400"
            />

            <label htmlFor="password" className="block mb-b mt-4 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password..."
              className="w-full p-3 border rounded shadow-md shadow-gray-400"
            />

            <label htmlFor="confirm-password" className="block mb-1 mt-8">
              Repeat password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              placeholder="Password..."
              className="w-full p-3 mb-6 border rounded shadow-md shadow-gray-400"
            />

<input id="termsCheckbox" type="checkbox" class="h-4 w-4  mb-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
    <label for="termsCheckbox" class="ml-2 absolute mt-1  text-sm text-gray-700">
        I have read and agree to the terms and conditions
    </label>

            <div class="flex justify-center">
            <button
              type="submit"
              className="w-80 p-2 bg-teal-500 rounded "
            >
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
