import React, { useState, useEffect } from "react";
import BackButton from "../utils/BackButton";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import { Line, LinearScale } from "react-chartjs-2";

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
      console.log(
        `trying to go to: https://api.honesttracker.nl/api/products/${id}`
      );
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

  const labels = {
    "1M": ["Week 1", "Week 2", "Week 3", "Week 4"],
    "1Y": [
      "Januari",
      "Februari",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    All: [
      "Januari",
      "Februari",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };

  const dataSets = {
    "1M": [423.93, 425.0, 422.5, 423.93], // Replace with actual 1M data
    "1Y": [
      423.93, 450.0, 400.0, 470.0, 420.0, 430.0, 423.93, 425.0, 422.5, 423.93,
      430.0, 423.93,
    ], // Replace with actual 1Y data
    All: [350.0, 375.0, 400.0, 425.0, 423.93], // Replace with actual All data
  };

  const data = {
    labels: labels[selectedData],
    datasets: [
      {
        label: selectedData,
        data: dataSets[selectedData],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

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
  return (
    <main class="p-48">
      <div>
        <BackButton />
        <h1 class="text-3xl font-bold absolute right-48 top-24">
          Product overview
        </h1>
      </div>
      <div class="grid grid-cols-3 gap-x-16 gap-y-4 -mt-24">
        <div class="bg-white border-2 mb-10 border-gray-200 flex items-center shadow-sm rounded-lg col-span-3">
          <img
            src={images.pikachu}
            alt="Pikachu"
            class="h-full rounded-md w-64"
          />
          <div class="flex items-center ml-8 flex-column flex-col items-stretch">
            <p class="text-black font-extrabold text-2xl mt-10">
              {product.name}
            </p>
            <div class="flex items-center">
              <icons.Tag alt="Tag" class="h-8 w-8 hover:cursor-pointer" />
              <p class="text-[#575757] ml-2">Shoes, Gaming</p>
            </div>
            <div class="flex items-center text-[#575757]">
              <p class="ml-2 mt-4">Current price:</p>
              <p class=" mt-4 ml-14 mb-1">Current cheapest website:</p>
            </div>
            <div class="flex items-center">
              <p class="text-red-500 text-xl ml-2">€423,93</p>
              <icons.Amazon alt="Tag" class="h-8 w-8 ml-20" />
              <p class="">amazon.com</p>
            </div>
            <p class="text-red-500 ml-2 font-bold">+2,73% (€3,94)</p>
            <div class="flex justify-between items-center">
              <div class="flex ml-2">
                <icons.Heart
                  alt="Tag"
                  class="h-8 w-8 mt-2 cursor-pointer transition duration-800 ease-in-out transform hover:fill-heartRed"
                />
                <p class="text-xl ml-2 mt-2">Favourite</p>
              </div>
              <div class="flex">
                <icons.Ketting
                  alt="Tag"
                  class="h-8 w-8 mt-2 ml-20 hover:cursor-pointer"
                />
                <p class="text-xl ml-2 mt-2">Share</p>
              </div>
              <div class="flex">
                <icons.Plane
                  alt="Tag"
                  class="h-8 w-8 mt-2 ml-20 hover:cursor-pointer"
                />
                <p class="text-xl ml-2 mt-2">Visit webpage</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2 -mt-8">
          <h1 className="text-2xl font-semibold">Price history</h1>
          <div class="bg-white border-2  h-full flex-col   border-gray-200 shadow-sm p-4 rounded-lg">
            <div class="flex justify-between">
              <div class="flex-col items-center gap-4">
                <h1 class="">Current cheapest website:</h1>
                <div class="flex">
                  <icons.Amazon
                    src={images.footerLogo}
                    alt="Pikachu"
                    class="h-10 w-10 fill-blue-400"
                  />
                  <a
                    href="https://www.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 mt-2 hover:text-blue-600 transition duration-300 ease-in-out"
                  >
                    amazon.com
                  </a>
                </div>
              </div>
              <div class="flex space-x-4 h-12">
                <button
                  className="bg-teal-400 cursor-pointer text-white px-4 border-gray-200 rounded"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => setSelectedData("1M")}
                >
                  1M
                </button>
                <button
                  className="bg-white border-2 cursor-pointer text-black px-4 py-2 rounded  "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => setSelectedData("1Y")}
                >
                  1Y
                </button>
                <button
                  className="bg-white cursor-pointer text-black px-4 border-2 border-gray-200 rounded "
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  onClick={() => setSelectedData("All")}
                >
                  All
                </button>
              </div>
            </div>
            {/*  <Line data={data} options={options} /> */}

            <div class="flex justify-around w-full mt-6 -mb-7">
              <div class="flex-col">
                <h1 class="text-2xl">Current price:</h1>
                <h1 class=" text-xl">€423,93</h1>
                <h1 class="text-green-500 text-lg ">(+2,73%)</h1>
              </div>
              <div class="flex-col">
                <h1 class="text-2xl">Median price:</h1>
                <h1 class="text-xl">€473,93</h1>
              </div>
              <div class="flex-col">
                <h1 class="text-2xl">Lowest price:</h1>
                <h1 class="text-xl">€323,93</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1 -mt-8">
          <h1 className="text-2xl font-semibold">Latest Updates</h1>
          <div class="bg-white border-2 h-full  flex-col  border-gray-200 shadow-sm rounded-lg">
            <div class="self-start">
              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex w-full border-b-2 border-black py-2">
                <icons.Amazon alt="Tag" class="h-10 w-10 ml-4 mt-4" />
                <div class="flex justify-between w-full">
                  <div class="flex flex-col items-center ml-2 mt-2 py-2">
                    <span className="text-lg mr-8">amazon.com</span>
                    <span className="text-xs mr-12 -mt-2 text-[#575757]">
                      09-05-2024 11:23
                    </span>
                  </div>
                  <div class="flex flex-col items-end mr-4 mt-4 py-2">
                    <span className="text-lg -mt-2 text-red-500">+2,47%</span>
                    <span className="text-sm mr-2 mb-1 text-red-500">
                      (3,94)
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center h-full">
                <button class="bg-[#20C1AA] text-white py-2 px-4 mx-auto mt-4 -mb-4 rounded-md">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-2 mt-12">
          <h1 className="text-2xl font-semibold">Comments</h1>
          <div class="bg-white border-2 h-72 mb-16 border-gray-200 shadow-sm p-4 rounded-lg">
            <div class="flex justify-between">
              <div class="flex items-center gap-4">
                <img src={images.footerLogo} class="h-14" />
                <h1>Jur</h1>
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
              <div className="bg-gray-300 mt-4 h-32 p-4 flex items-center rounded-md">
                <icons.Pencil className="h-8 w-8 -mt-12 fill-gray-500" />
                <textarea
                  className="ml-4 flex-1 bg-transparent border-none outline-none text-gray-500 placeholder-gray-500 resize-none"
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

          <div class="bg-white border-2 h-36 mt-4 border-gray-200 shadow-sm p-4 rounded-lg">
            <div class="flex justify-between">
              <div class="flex items-center gap-4">
                <img src={images.footerLogo} class="h-14" />
                <h1>Jur</h1>
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
            <p class="pl-24 pt-2 overflow-hidden">
              {" "}
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>

        <div class="col-span-1 mt-12 ">
          <h1 className="text-2xl font-semibold">Similar products</h1>
          <div className="flex items-center border-2 h-44 bg-white  rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={images.pikachu}
              alt="Pokemon Shoes"
              className="w-48 h-full"
            />
            <div className="flex-grow p-4 ">
              <div className="flex justify-between items-center">
                <div>
                  <div className="mt-2 mb-2 flex items-center space-x-1">
                    <icons.Bolcom
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-8 w-8 fill-blue-400"
                    />
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black-500 hover:text-gray-600 transition duration-300 ease-in-out"
                    >
                      amazon.com
                    </a>
                  </div>
                  <h2 className="text-lg  text-red-500">€423,93</h2>
                  <p className="text-red-500 font-bold">-2,73%</p>
                  <div class="flex ml-12">
                    <icons.Heart alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                    <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center border-2 h-44 bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={images.pikachu}
              alt="Pokemon Shoes"
              className="w-48 h-full"
            />
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="mt-2 mb-2 flex items-center space-x-1">
                    <icons.Bolcom
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-8 w-8 fill-blue-400"
                    />
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black-500 hover:text-gray-600 transition duration-300 ease-in-out"
                    >
                      amazon.com
                    </a>
                  </div>
                  <h2 className="text-lg  text-red-500">€423,93</h2>
                  <p className="text-red-500 font-bold">-2,73%</p>
                  <div class="flex ml-12">
                    <icons.Heart alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                    <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center  border-2 h-44 bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={images.pikachu}
              alt="Pokemon Shoes"
              className="w-48 h-full"
            />
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="mt-2 mb-2 flex items-center space-x-1">
                    <icons.Bolcom
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-8 w-8 fill-blue-400"
                    />
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black-500 hover:text-gray-600 transition duration-300 ease-in-out"
                    >
                      amazon.com
                    </a>
                  </div>
                  <h2 className="text-lg  text-red-500">€423,93</h2>
                  <p className="text-red-500 font-bold">-2,73%</p>
                  <div class="flex ml-12">
                    <icons.Heart alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                    <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center border-2 h-44 bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={images.pikachu}
              alt="Pokemon Shoes"
              className="w-48 h-full"
            />
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="mt-2 mb-2 flex items-center space-x-1">
                    <icons.Bolcom
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-8 w-8 fill-blue-400"
                    />
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black-500 hover:text-gray-600 transition duration-300 ease-in-out"
                    >
                      amazon.com
                    </a>
                  </div>
                  <h2 className="text-lg  text-red-500">€423,93</h2>
                  <p className="text-red-500 font-bold">-2,73%</p>
                  <div class="flex ml-12">
                    <icons.Heart alt="Tag" class="h-6 w-6 ml-4 mt-4" />
                    <icons.Ketting alt="Tag" class="h-6 w-6 ml-4 mt-4" />
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
