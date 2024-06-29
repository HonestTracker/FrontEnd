import React from "react";

const ProductList = ({
  products,
  formatPrice,
  formatDateTime,
  getIconComponent,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <ul className="list-none">
        {products.map((product, i) => (
          <li
            key={i}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <div className="flex items-center">
              {getIconComponent(product.site.site_name) &&
                React.createElement(getIconComponent(product.site.site_name), {
                  style: {
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  },
                })}
              <div className="flex items-start flex-col">
                <p className="text-gray-800 ">{product.name}</p>
                <span className="text-sm text-gray-500">
                  {formatDateTime(product.updated_at)}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p
                className={`text-m ${
                  parseFloat(product.change_percentage) > 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {formatPrice(product.current_price)}
              </p>
              <p
                className={`text-m font-semibold ${
                  parseFloat(product.change_percentage) > 0
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {parseFloat(product.change_percentage) > 0 ? "+" : ""}
                {product.change_percentage}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
