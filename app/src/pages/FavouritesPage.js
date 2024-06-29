import React, { useState } from "react";
import { images } from "../utils/constants/images/Images";
import { icons } from "../utils/constants/images/Icons";

const FavouriteProducts = () => {
  const [liked, setLiked] = useState([]);

  const handleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((likeId) => likeId !== id) : [...prev, id]
    );
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <main className="py-6">
        <div className="container mx-auto p-4 max-w-screen-xl">
          <button className="bg-[#32c6a6] text-white px-4 py-2 rounded">
            Go Back
          </button>
          <h1 className="text-2xl font-bold mt-4 mb-6">
            Your Favourite Products
          </h1>
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 mb-6 border border-gray-300 rounded"
          />
          <div className="flex space-x-4">
            <div className="w-1/5 bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Categories</h3>
                <ul>
                  <li className="py-1">Shoes (40)</li>
                  <li className="py-1">Footwear (21)</li>
                  <li className="py-1">Gaming (10)</li>
                </ul>
              </div>
            </div>
            <div className="w-4/5">
              <p className="text-gray-600">Showing Jur’s favourite products</p>
              {[1, 2, 3].map((id) => (
                <div
                  key={id}
                  className="flex items-center border border-gray-200 p-4 mb-4 bg-white rounded shadow"
                >
                  <img
                    src={images.placeholder}
                    alt="Product Image"
                    className="w-24 mr-4"
                  />
                  <div className="flex-grow">
                    <a
                      href="https://amazon.com"
                      className="text-lg font-bold text-black hover:underline"
                    >
                      Pokemon Pikachu Shoes
                    </a>
                    <div className="text-lg mt-2">
                      <span>€423,93</span>
                      <span className="text-red-500"> -7,73% (€3,94)</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleLike(id)}
                        className={`bg-transparent border-none cursor-pointer`}
                      >
                        <icons.Heart
                          alt="Heart"
                          className={`w-6 h-6 ${
                            liked.includes(id) ? "text-red-500" : ""
                          }`}
                        />
                      </button>
                      <a href="https://amazon.com" className="ml-2">
                        <icons.Link alt="Link Icon" className="w-6 h-6" />
                      </a>
                      <span className="ml-2 text-gray-600">379</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center space-x-2 mt-6">
                {[1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavouriteProducts;
