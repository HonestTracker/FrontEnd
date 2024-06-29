import React, { useEffect, useState } from "react";
import { getHomeData } from "../../backend/get_homedata";
import { images } from "../../utils/constants/images/Images";
import FeaturedProduct from "./utils/FeaturedProduct";
import TrendingCategories from "./utils/TrendingCategories";
import LatestProducts from "./utils/LatestProducts";
import {
  formatDateTime,
  formatPrice,
  getIconComponent,
} from "../../utils/products/utils/Formatters"; // Import utility functions

function Home() {
  const [loading, setLoading] = useState(true);
  const [featuredProduct, setFeaturedProduct] = useState({});
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [latestRiseProducts, setLatestRiseProducts] = useState([]);
  const [latestDropProducts, setLatestDropProducts] = useState([]);
  const [latestUpdatedProducts, setLatestUpdatedProducts] = useState([]);
  const [error, setError] = useState(null);

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
        {/* Logo Section */}
        <section className="flex justify-center mb-8">
          <img src={images.logoFNBG} alt="logo" className="w-64 h-64" />
        </section>

        {/* Featured Product Section */}
        <FeaturedProduct
          featuredProduct={featuredProduct}
          formatPrice={formatPrice}
          formatDateTime={formatDateTime}
          getIconComponent={getIconComponent}
        />

        {/* Trending Categories Section */}
        <TrendingCategories categories={featuredCategories} />

        {/* Latest Products Section */}
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
