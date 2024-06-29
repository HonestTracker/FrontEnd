import React from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../constants/images/Icons";
import { images } from "../../constants/images/Images";

function ProductCard() {
  return (
    <div className="flex items-center col-span-1 border-2 mt-10  bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={images.footerLogo}
        alt="Pokemon Shoes"
        className="w-36 h-full"
      />
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center">
          <div>
            <div className="mt-2 mb-2 ml-4 flex items-center">
              <icons.Amazon
                src={images.footerLogo}
                alt="Pikachu"
                class="h-8 w-8 fill-blue-400"
              />
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                amazon.com
              </a>
            </div>
            <h2 className="text-lg font-bold ml-6 text-gray-800">€423,93</h2>
            <p className="text-red-500 ml-6">-2,73%</p>
            <icons.Link
              style={{ width: "20px", height: "20px" }}
              class="ml-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
