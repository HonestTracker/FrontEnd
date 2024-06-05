import React from "react";
import NavbarHome from "../utils/components/NavbarHome";
import { images } from "../utils/constants/images/images";

function Home() {
  return (
    <div>
      <NavbarHome />
      <main className="p-6">
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img src={images.logo} alt="logo" className="w-80 h-80" />
        </section>

        {/* Featured Product Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Product</h2>
          <div className="flex">
            <img
              src={images.thomas}
              alt="thomas"
              className="w-1/3 rounded-lg"
            />
            <div className="ml-4 w-2/3">
              <h3 className="text-xl font-semibold">Pokemon Pikachu Shoes</h3>
              <p className="text-gray-500">Shoes, Gaming</p>
              <p className="text-red-500 text-2xl font-bold">€423.93</p>
              <span className="text-sm text-gray-500">(+2.73%, €2.34)</span>
              <p className="text-gray-500">
                Current cheapest website: amazon.com
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-customTeal text-white px-4 py-2 rounded">
                  Favourite
                </button>
                <button className="bg-customTeal text-white px-4 py-2 rounded">
                  Share
                </button>
                <button className="bg-customTeal text-white px-4 py-2 rounded">
                  Visit webpage
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Categories Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Trending Categories</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded">Laptops</div>
            <div className="bg-orange-500 text-white p-4 rounded">
              Furniture
            </div>
            <div className="bg-green-500 text-white p-4 rounded">Tablets</div>
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
