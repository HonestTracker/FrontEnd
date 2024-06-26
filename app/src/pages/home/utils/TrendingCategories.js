import React from "react";
import { images } from "../../../utils/constants/images/Images";

/**
 * Renders the Trending Categories section.
 *
 * @param {Object[]} categories - An array of category objects.
 * @param {string} categories[].name - The name of the category.
 *
 * @returns {JSX.Element} The rendered Trending Categories section.
 */
const TrendingCategories = ({ categories }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, i) => (
          <div key={i} className="relative">
            <div className={`${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-green-600' : 'bg-orange-500'} bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold`}>
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
