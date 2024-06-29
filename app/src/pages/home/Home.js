import React, { useEffect, useState } from "react";
import { getHomeData } from "../../backend/get_homedata";
import { images } from "../../utils/constants/images/Images";
import FeaturedProductCard from "../../utils/products/cards/ProductCardFeatured";
import TrendingCategories from "./utils/TrendingCategories";
import LatestProducts from "./utils/LatestProducts";
import {
  formatDateTime,
  formatPrice,
  getIconComponent,
} from "../../utils/products/utils/Formatters"; // Import utility functions

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [latestRiseProducts, setLatestRiseProducts] = useState([]);
  const [latestDropProducts, setLatestDropProducts] = useState([]);
  const [latestUpdatedProducts, setLatestUpdatedProducts] = useState([]);
  const [error, setError] = useState(null);

  // load a ton of data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getHomeData();
        setFeaturedProduct(data.featured_product || {});
        setFeaturedCategories(data.featured_categories || []);
        setLatestRiseProducts(data.latest_rise_products || []);
        setLatestDropProducts(data.latest_drop_products || []);
        setLatestUpdatedProducts(data.latest_updated_products || []);
      } catch (error) {
        console.error("Error fetching home data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <main className="p-6">
        <section className="flex justify-center mb-8">
          <img src={images.logoFNBG} alt="logo" className="w-64 h-64" />
        </section>
        <FeaturedProductCard
          product={featuredProduct}
          formatPrice={formatPrice}
          getIconComponent={getIconComponent}
        />
        <TrendingCategories categories={featuredCategories} />
        <LatestProducts
          latestRiseProducts={latestRiseProducts}
          latestDropProducts={latestDropProducts}
          latestUpdatedProducts={latestUpdatedProducts}
          formatPrice={formatPrice}
          formatDateTime={formatDateTime}
          getIconComponent={getIconComponent}
        />
      </main>
    </div>
  );
}

export default Home;
