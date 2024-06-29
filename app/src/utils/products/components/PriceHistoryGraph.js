import React from "react";
import { Line } from "react-chartjs-2";
import {
  generateChartData,
  formatPrice,
  getIconComponent,
} from "../utils/Formatters";
import Chart from "chart.js/auto";

const PriceHistoryGraph = ({ product, selectedData, setSelectedData }) => {
  const prices = product.prices.map((price) => ({
    date: new Date(price.date),
    price: parseFloat(price.price),
  }));

  const data = generateChartData(prices, selectedData);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
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

  const calculateMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
      ? sorted[mid]
      : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const lowestPrice = Math.min(...prices.map((price) => price.price));

  const currentPrice = product.current_price;
  const changePercentage = product.change_percentage;

  return (
    <div className="w-2/3">
      <h1 className="text-2xl font-semibold mb-4">Price history</h1>
      <div
        className="bg-white rounded-lg p-6"
        style={{
          boxShadow:
            "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex justify-between">
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
          <div className="flex space-x-4 h-8">
            {["1M", "1Y", "All"].map((range) => (
              <button
                key={range}
                className={`cursor-pointer px-4 py-2 rounded flex items-center justify-center ${
                  selectedData === range
                    ? "bg-teal-400 text-white border-none"
                    : "bg-white border-2 border-gray-200 text-black"
                }`}
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => setSelectedData(range)}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        <Line data={data} options={options} className="mt-4" />

        <div className="flex justify-around w-full mt-6">
          <div>
            <p className="text-gray-500">Current price:</p>
            <p
              className={`text-2xl font-bold ${
                changePercentage > 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {formatPrice(currentPrice)}
            </p>
            <span
              className={`text-sm ${
                changePercentage > 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {changePercentage > 0 ? "+" : "-"}
              {Math.abs(changePercentage)}%
            </span>
          </div>
          <div>
            <p className="text-gray-500">Median price:</p>
            <p className="text-2xl font-bold text-gray-500">
              {formatPrice(calculateMedian(prices.map((p) => p.price)))}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Lowest price:</p>
            <p className="text-2xl font-bold text-gray-500">
              {formatPrice(lowestPrice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceHistoryGraph;
