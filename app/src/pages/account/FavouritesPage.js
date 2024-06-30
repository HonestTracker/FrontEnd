import React, { useState, useEffect } from "react";
import { images } from "../../utils/constants/images/Images";
import { icons } from "../../utils/constants/images/Icons";
import { getProfileData } from "../../backend/get_profiledata";
import BackButton from "../../utils/components/navigation/BackButton";
import ProductCardOverview from "../../utils/products/cards/ProductCardOverview";
import {
  getIconComponent,
  formatPrice,
} from "../../utils/products/utils/Formatters";

// the backend for this stuff isnt done yet, so this is just a placeholder
const FavouriteProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState(null);
  const [favorites, setFavorites] = useState(null);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getProfileData(token);
        console.log(data);
        setComments(data.comments || []);
        setFavorites(data.favorites || []);
        setUser(data.user || {});
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!token) {
    return (
      <div className="h-screen flex justify-center items-center">
        Not logged in! Go away :3
      </div>
    );
  }

  return (
    <main className="flex flex-col mt-20 justify-center items-center mb-20">
      <div className="w-2/3">
        <div>
          <div className="flex flex-row mb-10 justify-between">
            <BackButton />
            <h1 className="text-3xl font-bold">
              {user.name}'s favorite products
            </h1>
          </div>
          <div className="flex space-x-4">
            <div className="w-5/6">
              {favorites.map((favorite) => (
                <ProductCardOverview
                  key={favorite.product.id}
                  product={favorite.product}
                  getIconComponent={getIconComponent}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FavouriteProducts;
