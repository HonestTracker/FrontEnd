import React from "react";
import BackButton from "../utils/BackButton";
import { images } from "../utils/constants/Images";

function Settings() {
  return (
    <main class="flex flex-col h-full flex items-start p-10 h-screen">
      <div className="mb-10">
        <BackButton />
      </div>

      <div
        class="flex-column justify-between rounded-lg w-1/2  bg-white border-2 border-gray-200 shadow-md"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div class=" h-96">
          <div class="mb-10">
            <h1 class="text-left pl-6 pt-6 right-0 text-3xl">Settings</h1>
          </div>

          <div class="mb-10">
            <p class=" pl-6 pr-6 text-xl">Theme</p>
            <select
              id="currency"
              class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56"
            >
              <option selected value="light">
                Light
              </option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div class="mb-10">
            <p class=" pl-6 pr-6 text-xl">Currency</p>
            <select
              id="currency"
              class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56"
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
