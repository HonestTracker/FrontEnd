import React from "react";
import {
  formatPrice,
  formatDateTime,
  getIconComponent,
} from "../utils/Formatters";

const LatestUpdates = ({ product }) => {
  // Extract prices and siteName from the product
  const prices = product.prices.map((price) => ({
    id: price.id,
    date: new Date(price.date),
    price: parseFloat(price.price),
    change_percentage: price.change_percentage,
  }));
  const siteName = product.site?.site_name || "Unknown";

  // Get the latest 3 prices
  const latestPrices = prices.reverse();

  return (
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
          {latestPrices.map((priceUpdate) => (
            <li
              key={priceUpdate.id}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <div className="flex items-center">
                {getIconComponent(siteName) &&
                  React.createElement(getIconComponent(siteName), {
                    style: {
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    },
                  })}
                <div className="flex flex-col">
                  <p className="text-gray-800">{siteName}</p>
                  <span className="text-sm text-gray-500">
                    {formatDateTime(priceUpdate.date)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p
                  className={`text-m ${
                    priceUpdate.change_percentage > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {formatPrice(priceUpdate.price)}
                </p>
                <p
                  className={`text-m font-semibold ${
                    priceUpdate.change_percentage > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {priceUpdate.change_percentage > 0 ? "+" : ""}
                  {priceUpdate.change_percentage}%
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestUpdates;
