import React, { useState, useEffect } from "react";
import BackButton from "../utils/BackButton";
import { images } from "../utils/constants/images/Images";
import { icons } from "../utils/constants/images/Icons";
import { Line, LinearScale } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useParams, useNavigate, uselo } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [message, setMessage] = useState("");
  const [selectedData, setSelectedData] = useState("1M");
  const [hovered, setHovered] = useState(0);
  const [rating, setRating] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.honesttracker.nl/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Product not found"); // Update the error state with a meaningful message
        navigate("/404"); // Redirect to 404 page if product is not found
      } finally {
        setLoading(false); // Set loading to false after fetch operation is done
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("No product ID provided");
      navigate("/404");
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>; // Display the error message
  }

  if (!product) {
    return null; // This should be handled by the 404 redirect
  }

  const handleStarClick = (value) => {
    setHovered(value);
    console.log(value);
  };

  const handleHover = (value) => {
    setHovered(value);
  };

  const handleRatingClick = (value) => {
    setRating(value);
    console.log(rating);
  };

  // Extract prices and dates
  const prices = product.prices.map((price) => ({
    date: new Date(price.date),
    price: parseFloat(price.price),
  }));

  const calculateMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  // Get the lowest price
  const lowestPrice = Math.min(...prices.map((price) => price.price));

  // Generate labels and data sets based on selected data
  const generateChartData = (range) => {
    let filteredPrices;
    switch (range) {
      case "1M":
        filteredPrices = prices.slice(-4); // Get last 4 weeks for 1 month
        break;
      case "1Y":
        filteredPrices = prices.slice(-12); // Get last 12 months for 1 year
        break;
      case "All":
        filteredPrices = prices; // Get all available data
        break;
      default:
        filteredPrices = [];
    }

    const labels = filteredPrices.map(
      (price) =>
        range === "1M"
          ? price.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            }) // Show day and month for 1M
          : range === "1Y"
          ? price.date.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            }) // Show month and year for 1Y
          : price.date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }) // Show full date for All
    );
    const dataSets = filteredPrices.map((price) => price.price);

    return {
      labels,
      datasets: [
        {
          label: range,
          data: dataSets,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  };

  const data = generateChartData(selectedData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Price: €${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `€${value.toFixed(2)}`;
          },
        },
      },
    },
  };

  console.log(product);

  const handleMessageSend = async (event) => {
    event.preventDefault();
    console.log(message);
    /*try {
      console.log(email, password);
      const response = await fetch(
        "https://api.honesttracker.nl/api/auth/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            message: message,
            device: "web",
          }),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        console.log(response);
        if (response.status === 422) {
          console.log(responseData.errors);
          setErrors(responseData.errors);
        } else {
          throw new Error(responseData.message || "An error occurred.");
        }
      }
    } catch (error) {
      console.error("Error when trying to send message:", error);
    }*/
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  const getIconComponent = (siteName) => {
    const siteIcons = {
      "amazon.com": icons.Amazon,
      "bol.com": icons.Bolcom,
      "coolblue.nl": icons.Coolblue,
      // Add more mappings as needed
    };

    return siteIcons[siteName] || null;
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
    <main className="flex flex-col flex items-center mt-20 mb-20">
      <div className="w-5/6">
        {/* TITLE */}
        <div className="flex flex-row mb-10 justify-between">
          <BackButton />
          <h1 class="text-3xl font-bold">Product overview</h1>
        </div>

        {/* CONTAINER */}
        <div className="flex flex-col">
          {/* PRODUCT CARD */}
          <div
            className="bg-white flex rounded-lg mb-12"
            style={{
              boxShadow:
                "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div>
              <img
                src={images.pikachu}
                alt={product.name || "Placeholder"}
                className="w-72 h-72 rounded-lg"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between p-6">
              <div>
                <h3 className="text-xl font-black">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <icons.Tag style={{ width: "20px", height: "20px" }} />
                  <p className="text-gray-500">
                    {product.site?.category?.name || "No category"}
                  </p>
                </div>
                <div className="flex items-start mt-6 space-x-4">
                  <div className="mr-4">
                    <p className="text-gray-500">Current price:</p>
                    <p
                      className={`text-2xl text-bold ${
                        product.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {formatPrice(product.current_price)}
                    </p>
                    <span
                      className={`text-sm ${
                        product.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {product.change_percentage > 0 ? "+" : "-"}
                      {Math.abs(product.change_percentage)}%
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500">Current cheapest website:</p>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {getIconComponent(product.site?.site_name) &&
                          React.createElement(
                            getIconComponent(product.site.site_name),
                            {
                              style: { width: "20px", height: "20px" },
                            }
                          )}
                      </div>
                      <p className="text-gray-500">
                        {product.site?.site_name || "Unknown"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2 gap-4">
                <div
                  className="flex flex-row items-center gap-1 cursor-pointer"
                  onClick={handleFavouriteClick}
                >
                  <icons.Heart
                    style={{ width: "20px", height: "20px" }}
                    className="hover:fill-red-500"
                  />
                  <a href="#" className="text-black">
                    Favourite
                  </a>
                </div>
                <div
                  className="flex flex-row items-center gap-1 cursor-pointer"
                  onClick={handleShareClick}
                >
                  <icons.Link style={{ width: "20px", height: "20px" }} />
                  <a href="#" className="text-black">
                    Share
                  </a>
                </div>
                <div
                  className="flex flex-row items-center gap-1 cursor-pointer"
                  onClick={handleVisitWebpageClick}
                >
                  <icons.Plane style={{ width: "20px", height: "20px" }} />
                  <a href={product.url} target="_blank" className="text-black">
                    Visit webpage
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* PRODUCT PRICE HISTORY */}
          <div className="flex flex-row justify-between">
            <div className="w-2/3">
              <h1 className="text-2xl font-semibold mb-4">Price history</h1>
              <div
                className="bg-white rounded-lg p-6"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div class="flex justify-between">
                  <div className="flex flex-col">
                    <p className="text-gray-500">Current cheapest website:</p>
                    <div className="flex items-center">
                      <div className="mr-2">
                        {getIconComponent(product.site?.site_name) &&
                          React.createElement(
                            getIconComponent(product.site.site_name),
                            {
                              style: { width: "20px", height: "20px" },
                            }
                          )}
                      </div>
                      <p className="text-gray-500">
                        {product.site?.site_name || "Unknown"}
                      </p>
                    </div>
                  </div>
                  <div class="flex space-x-4 h-8">
                    <button
                      className={`cursor-pointer px-4 py-2 rounded flex items-center justify-center ${
                        selectedData === "1M"
                          ? "bg-teal-400 text-white border-none"
                          : "bg-white border-2 border-gray-200 text-black"
                      } `}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      onClick={() => setSelectedData("1M")}
                    >
                      1M
                    </button>
                    <button
                      className={`cursor-pointer px-4 py-2 rounded flex items-center justify-center ${
                        selectedData === "1Y"
                          ? "bg-teal-400 text-white border-none"
                          : "bg-white border-2 border-gray-200 text-black"
                      } `}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      onClick={() => setSelectedData("1Y")}
                    >
                      1Y
                    </button>
                    <button
                      className={`cursor-pointer px-4 py-2 rounded flex items-center justify-center ${
                        selectedData === "All"
                          ? "bg-teal-400 text-white border-none"
                          : "bg-white border-2 border-gray-200 text-black"
                      } `}
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      onClick={() => setSelectedData("All")}
                    >
                      All
                    </button>
                  </div>
                </div>
                <Line data={data} options={options} className="mt-4" />

                <div class="flex justify-around w-full mt-6 ">
                  <div>
                    <p className="text-gray-500">Current price:</p>
                    <p
                      className={`text-2xl text-bold ${
                        product.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {formatPrice(product.current_price)}
                    </p>
                    <span
                      className={`text-sm ${
                        product.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {product.change_percentage > 0 ? "+" : "-"}
                      {Math.abs(product.change_percentage)}%
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500">Median price:</p>
                    <p className={`text-2xl text-bold text-gray-500`}>
                      {formatPrice(calculateMedian(prices.map((p) => p.price)))}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Lowest price:</p>
                    <p className={`text-2xl text-bold text-gray-500`}>
                      {formatPrice(lowestPrice)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/4">
              <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
              <div
                className="bg-white rounded-lg p-6"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ul className="list-none">
                  {product.prices.map((priceUpdate) => (
                    <li
                      key={priceUpdate.id}
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
                        <div className="flex flex-col">
                          <p className="text-gray-800">
                            {product.site.site_name}
                          </p>
                          <span className="text-sm text-gray-500">
                            {new Date(priceUpdate.date).toLocaleDateString()}{" "}
                            {new Date(priceUpdate.date).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p
                          className={`text-m ${
                            parseFloat(priceUpdate.change_percentage) > 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          €{priceUpdate.price}
                        </p>
                        <p
                          className={`text-m font-semibold ${
                            parseFloat(priceUpdate.change_percentage) > 0
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
                        >
                          {parseFloat(priceUpdate.change_percentage) > 0
                            ? "+"
                            : ""}
                          {priceUpdate.change_percentage}%
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* PRODUCT COMMENTS N STUFF */}
          <div className="flex flex-row justify-between">
            <div class="mt-20 w-2/3">
              <h1 className="text-2xl font-semibold mb-4">Comments</h1>
              <div
                className="bg-white rounded-lg p-6 mb-10"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div class="flex justify-between">
                  <div class="flex items-center gap-2 pl-4">
                    <img src={images.footerLogo} class="h-14 rounded-md" />
                    <p className="text-xl font-bold text-gray-500">Jur</p>
                  </div>
                  <div class="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <icons.Star
                        key={star}
                        className={`cursor-pointer h-10 w-10 ${
                          star <= (hovered || rating) ? "fill-yellow-400" : ""
                        }`}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => handleHover(star)}
                        onMouseLeave={() => setHovered(0)}
                      />
                    ))}
                  </div>
                </div>
                <form onSubmit={handleMessageSend}>
                  <div className="bg-gray-100 mt-4 p-4 flex items-start rounded-md">
                    <textarea
                      className="flex-1 bg-transparent border-none outline-none text-gray-500 placeholder-gray-500 resize-none"
                      placeholder="Write a comment..."
                      rows="3"
                      value={message}
                      onChange={handleMessageChange}
                    />
                  </div>

                  <button
                    type="submit"
                    class="text-white text-xl ml-auto flex bg-customTeal p-2 px-4 rounded-md mt-2 "
                  >
                    <icons.Send class="h-8 w-8 " />
                    <p class="ml-1">Post</p>
                  </button>
                </form>
              </div>

              <div
                className="bg-white rounded-lg p-6 mb-4"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div class="flex justify-between">
                  <div class="flex items-center gap-2 pl-4">
                    <img src={images.footerLogo} class="h-14 rounded-md" />
                    <p className="text-xl font-bold text-gray-500">Jur</p>
                  </div>
                  <div class="flex">
                    <icons.Star
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-10 w-10 fill-yellow-400 "
                    />
                    <icons.Star
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-10 w-10 fill-yellow-400  border-10 "
                    />
                    <icons.Star
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-10 w-10 fill-yellow-400  "
                    />
                    <icons.Star
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-10 w-10 fill-yellow-400  "
                    />
                    <icons.Star
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-10 w-10  "
                    />
                  </div>
                </div>
                <p class="font-semibold text-gray-500 pt-4 overflow-hidden">
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                  non proident, sunt in culpa qui officia deserunt mollit anim
                  id est laborum.
                </p>
              </div>
            </div>

            <div class="mt-20 w-1/4">
              <h1 className="text-2xl font-semibold mb-4">Similar products</h1>
              <div
                className="bg-white rounded-lg mb-10 flex flex-row"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  src={images.pikachu}
                  alt="Pokemon Shoes"
                  className="w-36 h-full"
                />
                <div>
                  <div className="flex justify-center h-full">
                    <div className="flex flex-col justify-center ml-4">
                      <h3 className="text-l font-black">{product.name}</h3>
                      <div className="flex items-start">
                        <div className="mr-4">
                          <p
                            className={`text-2xl text-bold ${
                              product.change_percentage > 0
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {formatPrice(product.current_price)}
                          </p>
                          <span
                            className={`text-sm ${
                              product.change_percentage > 0
                                ? "text-red-500"
                                : "text-green-500"
                            }`}
                          >
                            {product.change_percentage > 0 ? "+" : "-"}
                            {Math.abs(product.change_percentage)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
