import React from "react";
import NavbarHome from "../utils/components/NavbarHome";
import { images } from "../utils/constants/images/images";
import { ReactComponent as YourSvg } from "../utils/constants/images/img/test.svg";
import { ReactComponent as Hartje } from "../utils/constants/images/img/hartje.svg";
import { ReactComponent as Ketting } from "../utils/constants/images/img/ketting.svg";
import { ReactComponent as Vliegtuigje } from "../utils/constants/images/img/vliegtuigje.svg";

function Home() {
  return (
    <div>
      <NavbarHome />
      <main className="p-6">
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img src={images.logo} alt="logo" className="w-24 h-24" />
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
                src={images.thomas}
                alt="Pokemon Pikachu Shoes"
                className="w-72 h-72 rounded-lg"
              />
            </div>
            <div className="ml-2 w-2/3 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black">Pokemon Pikachu Shoes</h3>
                <div className="flex items-center">
                  <img
                    src={images.pricetag}
                    alt="Precitag"
                    className="w-5 h-5 rounded-lg mr-2"
                  />
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
                        <YourSvg style={{ width: "20px", height: "20px" }} />
                      </div>
                      <p className="text-gray-500">amazon.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="mt-4 flex items-center space-x-2"
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                <Hartje style={{ width: "20px", height: "20px" }} />
                <a href="#" className="text-black">
                  Favourite
                </a>
                <Ketting style={{ width: "20px", height: "20px" }} />
                <a href="#" className="text-black">
                  Share
                </a>
                <Vliegtuigje style={{ width: "20px", height: "20px" }} />
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
                src={images.laptop}
                alt="Laptops"
                className="w-full h-full rounded-lg absolute inset-0 object-cover"
              />
              <div className="bg-blue-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                Laptops
              </div>
            </div>
            <div className="relative">
              <img
                src={images.design}
                alt="Furniture"
                className="w-full h-full rounded-lg absolute inset-0 object-cover h-full"
              />
              <div className="bg-orange-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                Furniture
              </div>
            </div>
            <div className="relative">
              <img
                src={images.tablet}
                alt="Tablets"
                className="w-full h-full rounded-lg absolute inset-0 object-cover"
              />
              <div className="bg-green-500 bg-opacity-75 text-white p-4 rounded relative z-10 h-48 flex items-center justify-center text-4xl font-bold">
                Tablets
              </div>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Latest Rises</h3>
            {/* Placeholder content */}
            <ul className="list-disc list-inside">
              <li>amazon.com (+2.73%, €2.34)</li>
              <li>mediamarkt.nl (+2.73%, €2.34)</li>
              <li>bol.com (+2.73%, €2.34)</li>
            </ul>
            <button className="bg-customTeal text-white px-4 py-2 rounded mt-4">
              View more
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Latest Drops</h3>
            {/* Placeholder content */}
            <ul className="list-disc list-inside">
              <li>amazon.com (-1.73%, €1.34)</li>
              <li>mediamarkt.nl (-1.73%, €1.34)</li>
              <li>bol.com (-1.73%, €1.34)</li>
            </ul>
            <button className="bg-customTeal text-white px-4 py-2 rounded mt-4">
              View more
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
            {/* Placeholder content */}
            <ul className="list-disc list-inside">
              <li>amazon.com (+0.73%, €0.34)</li>
              <li>mediamarkt.nl (+0.73%, €0.34)</li>
              <li>bol.com (+0.73%, €0.34)</li>
            </ul>
            <button className="bg-customTeal text-white px-4 py-2 rounded mt-4">
              View more
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
