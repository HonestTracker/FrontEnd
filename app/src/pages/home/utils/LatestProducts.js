import React from "react";
import ProductList from "../../../utils/components/products/ProductList";

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
