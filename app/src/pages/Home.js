import React from "react";
import NavbarHome from "../utils/components/navigation/NavbarSignIn";
import { images } from "../utils/constants/Images";
import { icons } from "../utils/constants/Icons";
import "@fontsource/poppins";

function Home() {
  return (
    <div>
      <NavbarHome />
      <main className="p-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img src={images.logoFNBG} alt="logo" className="w-24 h-24" />
        </section>

        <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
        {/* Featured Product Section */}
        <section
          className="bg-white rounded-lg p-6 mb-8"
          style={{
            boxShadow:
              "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex">
            <div className="w-1/4">
              <img
                src={images.placeholder}
                alt="Pokemon Pikachu Shoes"
                className="w-72 h-72 rounded-lg"
              />
            </div>
            <div className="ml-2 w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black">Pokemon Pikachu Shoes</h3>
                <div className="flex items-center">
                  <icons.Tag style={{ width: "20px", height: "20px" }} />
                  <p className="text-gray-500">Shoes, Gaming</p>
                </div>
                <div className="flex items-start mt-6">
                  <div className="mr-4">
                    <p className="text-gray-500">Current price:</p>
                    <p className="text-red-500 text-2xl font-bold">€423.93</p>
                    <span className="text-sm text-red-500">+2.73% (€3.94)</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-gray-500">Current cheapest website:</p>
                    <div className="flex items-center">
                      <div className="mr-2">
                        <icons.Amazon
                          style={{ width: "20px", height: "20px" }}
                        />
                      </div>
                      <p className="text-gray-500">amazon.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                <icons.Heart style={{ width: "20px", height: "20px" }} />
                <a href="#" className="text-black">
                  Favourite
                </a>
                <icons.Link style={{ width: "20px", height: "20px" }} />
                <a href="#" className="text-black">
                  Share
                </a>
                <icons.Plane style={{ width: "20px", height: "20px" }} />
                <a href="#" className="text-black">
                  Visit webpage
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative">
              <img
                src={images.laptopsBg}
                alt="Laptops"
                className="w-full h-full rounded-lg absolute inset-0 object-cover"
              />
              <div className="bg-blue-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                LAPTOPS
              </div>
            </div>
            <div className="relative">
              <img
                src={images.furnitureBg}
                alt="Furniture"
                className="w-full h-full rounded-lg absolute inset-0 object-cover h-full"
              />
              <div className="bg-orange-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                FURNITURE
              </div>
            </div>
            <div className="relative">
              <img
                src={images.tabletBg}
                alt="Tablets"
                className="w-full h-full rounded-lg absolute inset-0 object-cover"
              />
              <div className="bg-green-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                TABLETS
              </div>
            </div>
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
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Amazon style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">amazon.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Amazon style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">amazon.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Coolblue style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">Coolblue</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
              </ul>
              <button className="bg-teal-500 text-white px-4 py-2 rounded mt-4">
                View more
              </button>
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
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Amazon style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">amazon.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Coolblue style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">Coolblue</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
              </ul>
              <button className="bg-teal-500 text-white px-4 py-2 rounded mt-4">
                View more
              </button>
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
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Amazon style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">amazon.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Coolblue style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">Coolblue</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <icons.Bolcom style={{ width: "20px", height: "20px" }} />
                    <div>
                      <p className="text-gray-800">bol.com</p>
                      <p className="text-gray-500 text-sm">09-05-2024 15:46</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-right">
                    <p className="text-lg">+2,73%</p>
                    <p className="text-sm">(€3,94)</p>
                  </div>
                </li>
              </ul>
              <button className="bg-teal-500 text-white px-4 py-2 rounded mt-4">
                View more
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
