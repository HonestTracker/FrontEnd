import React from "react";
import ProductList from "../../../utils/products/components/ProductList";

/**
 * Renders the LatestProducts component.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.latestRiseProducts - The latest rise products.
 * @param {Array} props.latestDropProducts - The latest drop products.
 * @param {Array} props.latestUpdatedProducts - The latest updated products.
 * @param {Function} props.formatPrice - The function to format the price.
 * @param {Function} props.formatDateTime - The function to format the date and time.
 * @param {Function} props.getIconComponent - The function to get the icon component.
 * @returns {JSX.Element} The rendered LatestProducts component.
 */
const LatestProducts = ({
  latestRiseProducts,
  latestDropProducts,
  latestUpdatedProducts,
  formatPrice,
  formatDateTime,
  getIconComponent,
}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Rises</h3>
        <ProductList
          products={latestRiseProducts}
          formatPrice={formatPrice}
          formatDateTime={formatDateTime}
          getIconComponent={getIconComponent}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Drops</h3>
        <ProductList
          products={latestDropProducts}
          formatPrice={formatPrice}
          formatDateTime={formatDateTime}
          getIconComponent={getIconComponent}
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Updates</h3>
        <ProductList
          products={latestUpdatedProducts}
          formatPrice={formatPrice}
          formatDateTime={formatDateTime}
          getIconComponent={getIconComponent}
        />
      </div>
    </section>
  );
};

export default LatestProducts;
