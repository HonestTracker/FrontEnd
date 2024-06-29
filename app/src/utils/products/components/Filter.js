import React from "react";

/**
 * Renders a filter component with categories.
 *
 * @param {Object[]} categories - An array of category objects.
 * @returns {JSX.Element} The rendered filter component.
 */
function Filter({ categories }) {
  return (
    <div className="w-1/5 p-4 border-r border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-6 p-4 border border-gray-300 shadow-md rounded-lg">
        <h4 className="text-gray-500 font-semibold mb-2 pb-1 border-b border-gray-500">
          Categories
        </h4>
        {categories.map((category, i) => (
          <div key={category.id} className="mb-2">
            <input
              type="checkbox"
              id={`${category.id}-${i}`}
              name={category.id}
              className="mr-2"
            />
            <label htmlFor={`${category.id}-${i}`}>
              {category.name} ({category.count})
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
