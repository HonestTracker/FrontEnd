import React from "react";
import BackButton from "../utils/BackButton"

function Settings() {
  
  return (
    <main class="p-48">
      <BackButton/>
      
                       
    <div class="flex-column justify-between rounded-lg  bg-white border-2 border-gray-200 shadow-md -mt-28" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div class=" h-96">
          <div class="mb-10">
          <h1 class="text-left pl-6 pt-6 right-0 text-3xl">Settings</h1>
          </div>

          <form>
          <div class="mb-10">
          <p class=" pl-6 pr-6 text-xl">Theme</p>
          <select id="currency" class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56">
            <option>Dark</option>
          </select>
          </div>

          <div class="mb-10">
          <p class=" pl-6 pr-6 text-xl">Currency</p>
          <select id="currency" class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56 pr-28">
            <option>Euro</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          </div>
          </form>
          
        </div>
    </div>
      
      
    
  </main>
  );
}

export default Settings;
