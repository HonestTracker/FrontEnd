import React from "react";
import { images } from "../../constants/images/Images";
import { formatPrice } from "../utils/Formatters";

/**
 * Renders a component that displays similar products.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product object to display.
 * @returns {JSX.Element} The rendered SimilarProducts component.
 */

const SimilarProducts = ({ similarProducts }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-2xl font-semibold mb-4">Similar products</h1>
      {similarProducts.map((product) => (
        <div
          className="bg-white rounded-lg mb-10 flex flex-row"
          style={{
            boxShadow:
              "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img src={images.pikachu} alt="Pokemon Shoes" className="w-36 h-full" />
          <div>
            <div className="flex justify-center h-full">
              <div className="flex flex-col justify-center ml-4">
                <h3 className="text-l font-black">{product.name}</h3>
                <div className="flex items-start">
                  <div className="mr-4">
                    <p
                      className={`text-2xl text-bold ${product.change_percentage > 0
                          ? "text-red-500"
                          : "text-green-500"
                        }`}
                    >
                      {formatPrice(product.current_price)}
                    </p>
                    <span
                      className={`text-sm ${product.change_percentage > 0
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
      ))}
    </div>
  );
};

export default SimilarProducts;
