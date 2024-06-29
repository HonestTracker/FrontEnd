import React, { useEffect, useState } from "react";
import BackButton from "../../utils/components/navigation/BackButton";
import {
  formatPrice,
  getIconComponent,
} from "../../utils/products/utils/Formatters";
import ProductCardOverview from "./utils/ProductCardOverview";
import Filter from "../../utils/products/components/Filter";

function ProductOverview() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [displaySearchQuery, setDisplaySearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.honesttracker.nl/api/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.products);
      setCategories(data.categories);
    } catch (error) {
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
      setProducts(data.products);
      setCategories(data.categories);
      setDisplaySearchQuery(searchQuery);
      setCurrentPage(1);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8 mt-12 ml-4">
        <div className="flex normal h-10" style={{ width: "14rem" }}>
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
              Showing results for: "{displaySearchQuery}"
            </h1>
            <p className="text-gray-500">{products.length} products found</p>
          </header>
          <div className="flex flex-wrap justify-around">
            {currentProducts.map((product, i) => (
              <ProductCardOverview
                key={product.id}
                product={product}
                getIconComponent={getIconComponent}
                formatPrice={formatPrice}
              />
            ))}
          </div>
          <div className="text-center mt-6 flex justify-end">
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

export default ProductOverview;
