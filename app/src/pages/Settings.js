import React from "react";
import { icons } from "../utils/constants/Icons";
import CustomLink from "../utils/CustomLink";
import { useNavigate } from 'react-router-dom';
import {BackButton} from "../utils/BackButton"

function Settings() {
  
  return (
    <main class="p-48">
      <BackButton/>
      
                       
    <div class="flex-column justify-between rounded-lg  bg-white border-2 border-gray-200 shadow-md -mt-28">
        <div class="content-center h-96">
          <div>
          <h1 class="text-center mb-6 text-3xl">Settings</h1>
          </div>

          <div>
          <p class="mb-10 pl-6 pr-6 text-xl">Theme</p>
          <input type="text" placeholder="Light"/>
          </div>
            
            
        </div>
        <div class="about-right"></div>
    </div>
      
      
    
  </main>
  );
}

export default Settings;
