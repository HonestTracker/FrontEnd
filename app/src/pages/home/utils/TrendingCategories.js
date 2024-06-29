import React from "react";
import { images } from "../../../utils/constants/images/Images";

const TrendingCategories = ({ categories }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, i) => (
          <div key={i} className="relative">
            <img
              src={images.laptopsBg}
              alt={category.name}
              className="w-full h-full rounded-lg absolute inset-0 object-cover"
            />
            <div className="bg-blue-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
