import React from "react";
import BackButton from "../utils/BackButton"
import { images } from "../utils/constants/Images"
import {icons} from "../utils/constants/Icons"
function SettingsAuthenticated() {
  
  return (
    <main class="p-48" style={{ fontFamily: "Poppins, sans-serif" }}>
      <BackButton/>
      <div className="grid grid-cols-3 gap-4 -mt-24">
        <div class="col-span-2 mb-14">
            <h1 className="text-xl font-semibold">Edit account details</h1>
            <div className="bg-white border-2  border-gray-200 shadow-md p-4 rounded-lg">
                <div class="flex relative">
                  <img src={images.footerLogo} class="opacity-50"/>
                  <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 740, top: "50%", transform: "translateY(-50%)", cursor: "pointer" }} />
                  <div class="flex-col ml-16 w-80">
                    <p class="text-xl mt-16">Username</p>
                    <div className="relative w-full">
                    <input type="text" className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"/>
                    <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }} />
                    </div>
                  </div>
                </div>
                
              <div class="flex-col">
                <p class="text-xl mt-6">Email</p>
                <div className="relative w-full">
                  <input type="text" className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500"/>
                  <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)"}} />
                </div>
                <div class="flex justify-center space-x-4 mt-4">
                  <button class="text-customGray border-2 border-gray-200 rounded-md p-2  w-28" >Cancel</button>
                  <button className="bg-teal-400 cursor-pointer text-white  ml-6 p-2 rounded hover:bg-teal-300 w-28">Save</button>
                </div>
              </div>
            </div>
          </div>
        <div>
            
            <h1 className="text-xl font-semibold">Appearance</h1>
            <div className="bg-white border-2 border-gray-200 shadow-md p-4 rounded-lg">
              <div class="mb-10">
                <p class=" pl-6 pr-6 text-xl">Theme</p>
                <select id="currency" class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6 w-56 focus:outline-none focus:border-blue-500">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>

              <div class="mb-10">
                <p class=" pl-6 pr-6 text-xl">Currency</p>
                <select id="currency" class="text-customGray border-2 border-gray-200 rounded-md p-2 ml-6  pr-28 w-56 focus:outline-none focus:border-blue-500">
                  <option>Euro</option>
                  <option>USD</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
            </div>
         

        <div class="col-span-2 -mt-6  ">
            <h1 className="text-xl font-semibold">Edit password</h1>
            <div className="bg-white border-2  border-gray-200 shadow-md p-4 rounded-lg">
              <div class="mb-10 relative">
                <p class="text-xl mt-6">Old password</p>
                <input type="text" className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500" placeholder="Type here"/>
                <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 16, top: "70%", transform: "translateY(-50%)" }} />
              </div>

            <div class="mb-10 relative">
              <p class="text-xl mt-6">New password</p>
              <input type="text" className="text-customGray border-2 border-gray-200 rounded-md p-2 h-12 w-full focus:outline-none focus:border-blue-500" placeholder="Type here"/>
              <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 16, top: "70%", transform: "translateY(-50%)" }} />
            </div>

            <div class="mb-4 relative">
              <p class="text-xl mt-6">Repeat new password</p>
              <input type="text" class="text-customGray border-2 border-gray-200 rounded-md p-2 w-full focus:outline-none focus:border-blue-500" placeholder="Type here"/>
              <icons.Pencil style={{ width: "20px", height: "20px", position: "absolute", right: 16, top: "70%", transform: "translateY(-50%)" }} />
            </div>
            <div class="flex justify-center space-x-4 mt-4">
                <button class="text-customGray border-2 border-gray-200 rounded-md p-2 w-28" >Cancel</button>
                <button className="bg-teal-400 cursor-pointer text-white  ml-6 p-2 rounded hover:bg-teal-300 w-28">Save</button>
            </div>
          </div>
    </div>
  </div>              
    
      
    
  </main>
  );
}

export default SettingsAuthenticated;
