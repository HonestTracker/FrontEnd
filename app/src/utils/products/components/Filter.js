import React, { useState, useEffect } from "react";

function Filter({ categories, handleFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Load previously selected categories from local storage on component mount
  useEffect(() => {
    const storedSelectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    setSelectedCategories(storedSelectedCategories);
  }, []);

  const handleCheckboxChange = (categoryId, siteId) => {
    const selectedCategory = { category_id: categoryId, site_id: siteId };

    // Check if the category and site pair is already selected
    const isSelected = selectedCategories.some(
      (cat) => cat.category_id === categoryId && cat.site_id === siteId
    );

    if (isSelected) {
      setSelectedCategories(selectedCategories.filter(
        (cat) => !(cat.category_id === categoryId && cat.site_id === siteId)
      ));
    } else {
      setSelectedCategories([...selectedCategories, selectedCategory]);
    }
  };

  const applyFilters = () => {
    // Save selected categories to local storage
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    handleFilter(selectedCategories);
  };

  return (
    <div className="w-1/5 p-4 border-r border-gray-300">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="mb-6 p-4 border border-gray-300 shadow-md rounded-lg">
        <h4 className="text-gray-500 font-semibold mb-2 pb-1 border-b border-gray-500">
          Categories
        </h4>
        {categories.map((category) => (
          <div key={category.id} className="mb-2">
            <h4 className="text-gray-500 font-semibold mb-2">
              {category.name}
            </h4>
            {category.sites.map((site) => (
              <div key={site.id} className="ml-4">
                <input
                  type="checkbox"
                  id={`${category.id}-${site.id}`}
                  name={`${category.id}-${site.id}`}
                  className="mr-2"
                  checked={selectedCategories.some(
                    (cat) => cat.category_id === category.id && cat.site_id === site.id
                  )}
                  onChange={() => handleCheckboxChange(category.id, site.id)}
                />
                <label htmlFor={`${category.id}-${site.id}`}>
                  {site.site_name} ({site.products.length})
                </label>
              </div>
            ))}
          </div>
        ))}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
