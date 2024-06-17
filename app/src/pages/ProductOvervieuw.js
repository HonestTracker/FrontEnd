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
          <div className="flex items-center mt-2">
            <icons.Amazon className="w-10 h-10 mt-2" />
            <span className="mt-3 ml-2 text-xl">amazon.com</span>
            <div className="flex items-center" style={{ marginLeft: "600px" }}>
              <icons.Heart className="w-8 h-8" />
              <icons.Ketting className="w-8 h-8 ml-4" />
            </div>
          </div>
        </div>
        <a
          href={product.link}
          className="text-2xl font-semibold text-black mt-2 ml-2"
        >
          {product.title}
        </a>
        <div className="flex items-center mt-2 ml-1">
          <p style={{ color: "#24BA4E" }} className="text-xl">
            €{product.price}
          </p>
          <p style={{ color: "#24BA4E" }} className="text-xl ml-4 font-bold">
            {product.discount}
          </p>
        </div>
        <div className="flex items-center text-gray-600 text-xs mt-2">
          <icons.Textvak className="w-10 h-10 mt-16" />
          <span className="ml-2 mt-16">379</span>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
