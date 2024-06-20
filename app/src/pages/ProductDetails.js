import React from "react";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";

function ProductDetails() {
  return (
    <main class="p-48" style={{ fontFamily: "Poppins, sans-serif" }}>
      <div>
        <h1 class="text-3xl font-bold absolute right-48 top-24">
          Your profile
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-x-16 gap-y-4 -mt-24">
        <div class="bg-white border-2 mb-10 border-gray-200 flex items-center p-4 shadow-sm rounded-md col-span-3 ">
          <img alt="Pikachu" class="h-24 w-24  mr-4" />
          <span class="flex-grow text-3xl font-semibold">
            Product placeholder
          </span>
        </div>

        <div class="bg-white border-2 col-span-2 h-36 flex-col   border-gray-200 shadow-sm p-4 rounded-lg">
          <div class="flex justify-between"></div>
          <p class="pl-24 pt-2 text-3xl overflow-hidden">Graph placeholder</p>
        </div>

        <div class="bg-white border-2 col-span-1  h-36 flex items-center py-8 border-gray-200 shadow-sm p-4 rounded-lg">
          <div class="mx-auto">
            <div class="">
              <h1 class="text-center text-5xl">349</h1>
              <p class="text-xl">Reviews posted</p>
            </div>
          </div>
        </div>

        <div className="flex items-center col-span-2 border-2 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
          <img alt="Pokemon Shoes" className="w-36 h-full" />
          <div className="flex-grow p-4">
            <div className="flex justify-between items-center">
              <div>
                <p class="text-3xl">Comments placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center col-span-1 border-2 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
          <img alt="Pokemon Shoes" className="w-36 h-full" />
          <div className="flex-grow p-4">
            <div className="flex justify-between items-center">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
