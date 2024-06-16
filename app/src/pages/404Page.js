import React from "react";
import { images } from "../utils/constants/Images"
function PageNotFound() {
  return (
   <main class="p-48 items-center">
    <div class="text-center -mt-32">
      <img src={images.logoFNBG} class="h-64 mx-auto"/>
      <h1 class="text-7xl mx-auto -mt-4">404</h1>
      <p class="text-2xl mt-6 ">This page could not be found</p>
    </div>
   </main>
  );
}

export default PageNotFound;
