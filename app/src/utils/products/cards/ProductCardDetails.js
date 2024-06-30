import React from "react";
import { images } from "../../constants/images/Images";
import { icons } from "../../constants/images/Icons";
import { formatPrice, getIconComponent } from "../utils/Formatters";

/**
 * Renders the product card on the details page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object containing the details of the product.
 * @returns {JSX.Element} The JSX element representing the product card for the details page.
 */
const ProductCardDetails = ({ product }) => {
  return (
    <div
      className="bg-white flex rounded-lg mb-12"
      style={{
        boxShadow:
          "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
      <img
            src={product.picture_url || images.placeholder}
            alt={product.name || "Placeholder"}
            className="max-w-80 max-h-80 object-contain rounded-lg p-4"
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
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <icons.Heart
              style={{ width: "20px", height: "20px" }}
              className="hover:fill-red-500"
            />
            <a href="#" className="text-black">
              Favourite
            </a>
          </div>
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <icons.Link style={{ width: "20px", height: "20px" }} />
            <a href="#" className="text-black">
              Share
            </a>
          </div>
          <div className="flex flex-row items-center gap-1 cursor-pointer">
            <icons.Plane style={{ width: "20px", height: "20px" }} />
            <a href={product.url} target="_blank" className="text-black">
              Visit webpage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
