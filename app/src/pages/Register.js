import React from "react";

const Register = () => {
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
          <form action="#" method="post" class="text-xl ">
            <label htmlFor="username" className="block mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
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
              placeholder="Password..."
              className="w-full p-3 border rounded shadow-md shadow-gray-400"
            />

            <label htmlFor="confirm-password" className="block mb-1 mt-8">
              Repeat password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
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
