import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../utils/components/navigation/BackButton";
import ProductCardDetails from "../../utils/products/cards/ProductCardDetails";
import PriceHistoryGraph from "../../utils/products/components/PriceHistoryGraph";
import LatestUpdates from "../../utils/products/components/LatestUpdates";
import CommentsSection from "../../utils/products/components/CommentsSection";
import SimilarProducts from "../../utils/products/components/SimilarProducts";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState("1M");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.honesttracker.nl/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Product not found"); // Update the error state with a meaningful message
        navigate("/404"); // Redirect to 404 page if product is not found
      } finally {
        setLoading(false); // Set loading to false after fetch operation is done
      }
    };

    if (id) {
      fetchProduct();
    } else {
      setError("No product ID provided");
      navigate("/404");
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <main className="flex flex-col items-center mt-20 mb-20">
      <div className="w-5/6">
        <div className="flex flex-row mb-10 justify-between">
          <BackButton />
          <h1 className="text-3xl font-bold">Product overview</h1>
        </div>
        <div className="flex flex-col">
          <ProductCardDetails product={product} />
          <div className="flex flex-row justify-between">
            <PriceHistoryGraph
              product={product}
              selectedData={selectedData}
              setSelectedData={setSelectedData}
            />
            <LatestUpdates product={product} />
          </div>
          <div className="flex flex-row justify-between mt-20">
            <CommentsSection />
            <SimilarProducts product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
