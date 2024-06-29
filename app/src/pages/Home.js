import React, { useEffect, useState } from "react";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import "@fontsource/poppins";
import { getHomeData } from "../backend/get_homedata.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [latestRiseProducts, setLatestRiseProducts] = useState([]);
  const [latestDropProducts, setLatestDropProducts] = useState([]);
  const [latestUpdatedProducts, setLatestUpdatedProducts] = useState([]);
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getHomeData();
        setFeaturedProduct(data.featured_product || {});
        setFeaturedCategories(data.featured_categories || []);
        setLatestRiseProducts(data.latest_rise_products || []);
        setLatestDropProducts(data.latest_drop_products || []);
        setLatestUpdatedProducts(data.latest_updated_products || []);
      } catch (error) {
        console.error("Error fetching home data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(featuredProduct);

  // Helper function to format price
  const getIconComponent = (siteName) => {
    const siteIcons = {
      "amazon.com": icons.Amazon,
      "bol.com": icons.Bolcom,
      "coolblue.nl": icons.Coolblue,
      // Add more mappings as needed
    };

    return siteIcons[siteName] || null;
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, "-");
    const formattedTime = date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  const navigateToDetails = () => {
    navigate(`/product/${featuredProduct.id}`);
    window.scrollTo(0, 0);
  };

  const handleFavouriteClick = (event) => {
    event.stopPropagation();
    // Handle the favourite action here
  };

  const handleShareClick = (event) => {
    event.stopPropagation();
    // Handle the share action here
  };

  const handleVisitWebpageClick = (event) => {
    event.stopPropagation();
    // Handle the visit webpage action here
  };

  return (
    <div>
      <main className="p-6">
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img src={images.logoFNBG} alt="logo" className="w-24 h-24" />
        </section>

        <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
        {/* Featured Product Section */}
        <section
          className="bg-white rounded-lg mb-8"
          style={{
            boxShadow:
              "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex">
            <div onClick={navigateToDetails}>
              <img
                src={images.placeholder}
                alt={featuredProduct.name || "Placeholder"}
                className="w-72 h-72 rounded-lg"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-6">
              <div onClick={navigateToDetails}>
                <h3 className="text-xl font-black">{featuredProduct.name}</h3>
                <div className="flex items-center space-x-2">
                  <icons.Tag style={{ width: "20px", height: "20px" }} />
                  <p className="text-gray-500">
                    {featuredProduct.site?.category?.name || "No category"}
                  </p>
                </div>
                <div className="flex items-start mt-6 space-x-4">
                  <div className="mr-4">
                    <p className="text-gray-500">Current price:</p>
                    <p
                      className={`text-2xl text-bold ${
                        featuredProduct.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {formatPrice(featuredProduct.current_price)}
                    </p>
                    <span
                      className={`text-sm ${
                        featuredProduct.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {featuredProduct.change_percentage > 0 ? "+" : "-"}
                      {Math.abs(featuredProduct.change_percentage)}%
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500">Current cheapest website:</p>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {getIconComponent(featuredProduct.site?.site_name) &&
                          React.createElement(
                            getIconComponent(featuredProduct.site.site_name),
                            {
                              style: { width: "20px", height: "20px" },
                            }
                          )}
                      </div>
                      <p className="text-gray-500">
                        {featuredProduct.site?.site_name || "Unknown"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2 gap-4">
                <div className="flex flex-row items-center gap-1">
                  <icons.Heart
                    style={{ width: "20px", height: "20px" }}
                    onClick={handleFavouriteClick}
                  />
                  <a
                    href="#"
                    className="text-black"
                    onClick={handleFavouriteClick}
                  >
                    Favourite
                  </a>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <icons.Link
                    style={{ width: "20px", height: "20px" }}
                    onClick={handleShareClick}
                  />
                  <a href="#" className="text-black" onClick={handleShareClick}>
                    Share
                  </a>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <icons.Plane style={{ width: "20px", height: "20px" }} />
                  <a
                    href={featuredProduct.url}
                    target="_blank"
                    className="text-black"
                    onClick={handleVisitWebpageClick}
                  >
                    Visit webpage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            {Array.isArray(featuredCategories) &&
              featuredCategories.map((category, i) => (
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

        {/* Latest Updates Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Rises</h3>
            <div
              className="bg-white rounded-lg p-6"
              style={{
                boxShadow:
                  "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ul className="list-none">
                {Array.isArray(latestRiseProducts) &&
                  latestRiseProducts.map((product, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 py-2 "
                    >
                      <div className="flex items-center">
                        {getIconComponent(product.site.site_name) &&
                          React.createElement(
                            getIconComponent(product.site.site_name),
                            {
                              style: {
                                width: "30px",
                                height: "30px",
                                marginRight: "10px",
                              },
                            }
                          )}
                        <div className="flex items-start flex-col">
                          <p className="text-gray-800 ">{product.name}</p>
                          <span className="text-sm text-gray-500">
                            {formatDateTime(product.updated_at)}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`text-lg font-semibold ${
                          product.change_percentage > 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {product.change_percentage}%
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Drops</h3>
            <div
              className="bg-white rounded-lg p-6"
              style={{
                boxShadow:
                  "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ul className="list-none">
                {Array.isArray(latestDropProducts) &&
                  latestDropProducts.map((product, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 py-2"
                    >
                      <div className="flex items-center">
                        {getIconComponent(product.site.site_name) &&
                          React.createElement(
                            getIconComponent(product.site.site_name),
                            {
                              style: {
                                width: "30px",
                                height: "30px",
                                marginRight: "10px",
                              },
                            }
                          )}
                        <div className="flex items-start flex-col">
                          <p className="text-gray-800 ">{product.name}</p>
                          <span className="text-sm text-gray-500">
                            {formatDateTime(product.updated_at)}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`text-lg font-semibold ${
                          product.change_percentage > 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {product.change_percentage}%
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
            <div
              className="bg-white rounded-lg p-6"
              style={{
                boxShadow:
                  "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <ul className="list-none">
                {Array.isArray(latestUpdatedProducts) &&
                  latestUpdatedProducts.map((product, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 py-2"
                    >
                      <div className="flex items-center">
                        {getIconComponent(product.site.site_name) &&
                          React.createElement(
                            getIconComponent(product.site.site_name),
                            {
                              style: {
                                width: "30px",
                                height: "30px",
                                marginRight: "10px",
                              },
                            }
                          )}
                        <div className="flex items-start flex-col">
                          <p className="text-gray-800">{product.name}</p>
                          <span className="text-sm text-gray-500">
                            {formatDateTime(product.updated_at)}
                          </span>
                        </div>
                      </div>
                      <p
                        className={`text-lg font-semibold ${
                          product.change_percentage > 0
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {product.change_percentage}%
                      </p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
