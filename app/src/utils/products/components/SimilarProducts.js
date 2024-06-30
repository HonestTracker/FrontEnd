import React from "react";
import { images } from "../../constants/images/Images";
import { formatPrice } from "../utils/Formatters";
import ProductCard from "../cards/ProductCardSmall";

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
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SimilarProducts;
