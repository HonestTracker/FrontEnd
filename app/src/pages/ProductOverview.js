import React from "react";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import BackButton from "../utils/BackButton";

function ProductOverview() {
  const products = [
    {
      image: images.pikachu,
      title: "Pokemon Pikachu Shoes",
      price: "423,93",
      link: "https://www.amazon.com",
      reviews: 379,
      discount: "-2,73% (€3,94)",
    },
    {
      image: images.pikachu,
      title: "Pokemon Pikachu Shoes",
      price: "423,93",
      link: "https://www.amazon.com",
      reviews: 379,
      discount: "-2,73% (€3,94)",
    },
    {
      image: images.pikachu,
      title: "Pokemon Pikachu Shoes",
      price: "423,93",
      link: "https://www.amazon.com",
      reviews: 379,
      discount: "-2,73% (€3,94)",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8 mt-12 ml-4">
        <div class="flex normal h-10" style={{ width: "14rem" }}>
          <BackButton />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="p-2 ml-12 border border-gray-300 rounded w-full"
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
              <ProductCard
                key={index}
                product={product}
                isSecond={index === 1 || index === 2}
              />
            ))}
          </div>
          <div className="text-center mt-6 flex justify-end">
            <button className="mx-2 px-4 py-2 border rounded">2</button>
            <button
              style={{ backgroundColor: "#20C1AA" }}
              className="mx-2 px-4 py-2 border rounded text-white"
            >
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

function ProductCard({ product, isSecond }) {
  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginBottom: "1rem",
        background: isSecond
          ? "linear-gradient(135deg, #FFFFFF 80%, #F44040 100%)"
          : "linear-gradient(135deg, #FFFFFF 80%, #24BA4E 100%)",
        display: "flex",
        width: "100%",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-64 h-64 object-cover rounded-lg "
      />
      <div className="ml-4 w-2/3">
        <div className="flex justify-between items-center mb-2">
          {/* ... your component */}
        </div>
        <a
          href={product.link}
          className="text-2xl font-semibold text-black mt-2 ml-2"
        >
          {" "}
          <div class="flex ml-1">
            {product.title}

            <icons.Heart
              alt="Tag"
              class="h-6 w-6 ml-96 mt-1 hover:fill-red-500"
            />
            <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-1" />
          </div>
        </a>

        <div className="flex items-center mt-2 ml-1">
          <p
            style={{ color: isSecond ? "red" : "#24BA4E" }}
            className="text-xl"
          >
            €{product.price}
          </p>
          <p
            style={{ color: isSecond ? "red" : "#24BA4E" }}
            className="text-xl ml-4 font-bold"
          >
            {product.discount}
          </p>
        </div>
        <div className="flex items-center text-gray-600 text-xs mt-2">
          {/* ... your component */}
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
