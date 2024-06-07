import React from "react";

const Login = () => {
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
          <form action="#" method="post">
            <label htmlFor="username" className="block mb-1">
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username/Email..."
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
