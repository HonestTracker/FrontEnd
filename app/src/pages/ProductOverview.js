import React, { useEffect, useState } from "react";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import BackButton from "../utils/BackButton";

function ProductOverview() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State to manage current page
  const productsPerPage = 10; // Number of products per page

  useEffect(() => {
    fetchData(); // Initial fetch when component mounts
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.honesttracker.nl/api/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Data received!", data);
      setProducts(data.products);
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.honesttracker.nl/api/products/search?search_data=${encodeURIComponent(
          searchQuery
        )}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Search Data received!", data);
      setProducts(data.products); // Update products state with search results
      setCategories(data.categories);
    } catch (error) {
      console.error("Error searching data:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Logic to paginate products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-[#20C1AA] text-white font-bold py-2 px-4 rounded ml-4 hover:text-gray-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="flex">
        <Filter categories={categories} />
        <div className="w-4/5 ml-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold">
              Showing results for: "{searchQuery}"
            </h1>
            <p className="text-gray-500">{products.length} products found</p>
          </header>
          <div className="flex flex-wrap justify-around">
            {currentProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                isSecond={i === 1 || i === 2}
              />
            ))}
          </div>
          <div className="text-center mt-6 flex justify-end">
            {/* Pagination buttons */}
            {[
              ...Array(Math.ceil(products.length / productsPerPage)).keys(),
            ].map((pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-2 px-4 py-2 border rounded ${
                  currentPage === pageNumber + 1
                    ? "bg-[#20C1AA] text-white"
                    : ""
                }`}
                onClick={() => paginate(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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

function ProductCard({ product, isSecond }) {
  const priceColor = product.change_percentage > 0 ? "red" : "#24BA4E";
  const percentageColor =
    product.change_percentage > 0 ? "text-red-500" : "text-green-500";
  const cardBackground =
    product.change_percentage > 0
      ? "linear-gradient(135deg, #FFFFFF 80%, #F44040 100%)"
      : "linear-gradient(135deg, #FFFFFF 80%, #10B981 100%)";

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginBottom: "1rem",
        background: cardBackground,
        display: "flex",
        width: "100%",
      }}
    >
      <img
        src={images.pikachu}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-lg"
      />
      <div className="ml-4 w-2/3">
        <div className="flex justify-between items-center mb-2">
          {/* ... your component */}
        </div>
        <a
          href={product.url}
          className="text-2xl font-semibold text-black mt-2 ml-2"
        >
          {" "}
          <div class="flex ml-1">
            {product.name}

            <icons.Heart
              alt="Tag"
              class="h-6 w-6 ml-96 mt-1 hover:fill-red-500"
            />
            <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-1" />
          </div>
        </a>

        <div className="flex items-center mt-2 ml-1">
          <p style={{ color: priceColor }} className="text-xl">
            {formatPrice(product.current_price)}
          </p>
          <p style={{ color: priceColor }} className="text-xl ml-4 font-bold">
            <span className={`text-sm ${percentageColor}`}>
              {product.change_percentage > 0 ? "+" : "-"}
              {Math.abs(product.change_percentage)}%
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-600 text-xs mt-2">
          <a href="productdetails">
            <icons.Textvak alt="Tag" class="h-6 w-6 ml-4 mt-12" />
          </a>
          <span className="ml-2 mt-12 text-lg">38</span>
        </div>
      </div>
    </div>
  );
}

export default ProductOverview;
