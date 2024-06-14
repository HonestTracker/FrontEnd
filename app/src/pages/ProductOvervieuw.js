import React from "react";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import "@fontsource/poppins";

function ProductOverview() {
  const products = [
    {
      image: images.pikachu, // Using the path of the uploaded image
      title: "Pokemon Pikachu Shoes",
      price: "423,93",
      link: "https://www.amazon.com",
      reviews: 379,
      discount: "-2,73% (€3,94)",
    },
    // Add more products if necessary
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8 mt-12">
        <button
          className="bg-[#20C1AA] text-white font-bold py-2 px-4 rounded mr-4 ml-20 hover:text-gray-200"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span className="text-xl">←</span> Go Back
        </button>

        <input
          type="text"
          placeholder="Search"
          className="p-2 border border-gray-300 rounded w-3/4 ml-32"
        />
      </div>

      <div className="flex">
        <Filter />
        <div className="w-4/5 ml-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">Showing results for: "Shoes"</h1>
            <p className="text-gray-500">53 products found</p>
          </header>

          <div className="flex flex-wrap justify-around">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <div className="text-center mt-6">
            <button className="mx-2 px-4 py-2 border rounded">2</button>
            <button className="mx-2 px-4 py-2 border rounded bg-blue-500 text-white">
              3
            </button>
            <button className="mx-2 px-4 py-2 border rounded">4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filter() {
  const filterCategories = [
    { id: "shoes", name: "Shoes", count: 43 },
    { id: "footwear", name: "Footwear", count: 23 },
    { id: "gaming", name: "Gaming", count: 5 },
  ];

  return (
    <div className="w-1/5 p-4 border-r border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="mb-6 p-4 border border-gray-300 shadow-md rounded-lg"
        >
          <h4 className="text-gray-500 font-semibold mb-2 pb-1 border-b border-gray-500">
            Categories
          </h4>
          {filterCategories.map((category) => (
            <div key={category.id} className="mb-2">
              <input
                type="checkbox"
                id={`${category.id}-${index}`}
                name={category.id}
                className="mr-2"
              />
              <label htmlFor={`${category.id}-${index}`}>
                {category.name} ({category.count})
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="border border-gray-300 w-full shadow-md rounded-lg flex mb-4"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-cover rounded-lg "
      />
      <div className="ml-4 w-2/3">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <icons.Amazon style={{ width: "20px", height: "20px" }} />
            <span
              className="ml-2 text-gray-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              amazon.com
            </span>
          </div>
        </div>
        <a
          href={product.link}
          className="text-lg font-semibold text-blue-600 text-black"
        >
          {product.title}
        </a>
        <p className="text-green-600 text-xl mt-2">€{product.price}</p>
        <p className="text-red-600 text-sm">{product.discount}</p>
        <div className="flex items-center text-gray-600 text-xs mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
            />
          </svg>
          {product.reviews} reviews
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
