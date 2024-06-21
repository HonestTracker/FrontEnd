import React, { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      console.log(email, password)
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/login",
        {
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
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-1 justify-center items-center py-10">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl mb-4">Log In</h2>
          <p className="mb-4">
            Don't have an account yet?{" "}
            <a href="register" className="text-teal-500">
              Sign Up
            </a>
          </p>
          <form onSubmit={handleLogin} method="post">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-400 mb-4">{errors.email[0]}</div>}
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
            {errors.password && <div className="text-red-400 mb-4">{errors.password[0]}</div>}

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center">
                <input type="checkbox" name="remember" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-teal-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-teal-500 text-white rounded"
            >
              Log In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
