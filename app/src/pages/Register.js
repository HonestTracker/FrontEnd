import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-1 justify-center items-center py-10">
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl mb-4">Register</h2>
          <p className="mb-4">
            Already have an account?{" "}
            <a href="login" className="text-teal-500">
              Log In
            </a>
          </p>
          <form action="#" method="post">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username..."
              className="w-full p-2 mb-4 border rounded"
            />

            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email..."
              className="w-full p-2 mb-4 border rounded"
            />

            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password..."
              className="w-full p-2 mb-4 border rounded"
            />

            <label htmlFor="confirm-password" className="block mb-1">
              Repeat password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Password..."
              className="w-full p-2 mb-4 border rounded"
            />

            <label className="flex items-center mb-4">
              <input type="checkbox" name="terms" className="mr-2" /> I have
              read and agree to the terms and conditions
            </label>

            <button
              type="submit"
              className="w-full p-2 bg-teal-500 text-white rounded"
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
