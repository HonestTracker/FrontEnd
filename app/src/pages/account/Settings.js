import React from "react";
import BackButton from "../../utils/components/navigation/BackButton";
import { images } from "../../utils/constants/images/Images";

/**
 * Renders the Settings page.
 * @returns {JSX.Element} The rendered Settings page.
 */
function Settings() {
  return (
    <main className="flex flex-col  items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 py-24  md:py-24 lg:py-28 h-screen">
      <div className="mb-10">
        <BackButton />
      </div>

      <div
        className="flex flex-col justify-between rounded-lg w-full md:w-3/4 lg:w-1/2 bg-white border-2 border-gray-200 shadow-md"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="h-full md:h-96">
          <div className="mb-10">
            <h1 className="text-left pl-6 pt-6 text-2xl md:text-3xl">Settings</h1>
          </div>

          <div className="mb-10">
            <p className="pl-6 pr-6 text-lg md:text-xl">Theme</p>
            <select
              id="theme"
              className="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-2/3 md:w-56"
            >
              <option selected value="light">
                Light
              </option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="mb-10">
            <p className="pl-6 pr-6 text-lg md:text-xl">Currency</p>
            <select
              id="currency"
              className="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-2/3 md:w-56"
            >
              <option selected value="Euro">
                Euro
              </option>
              <option value="Dollar">USD</option>
              <option value="Pound">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Settings;
