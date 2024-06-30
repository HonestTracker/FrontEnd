import React, { useEffect, useState } from "react";
import BackButton from "../../utils/components/navigation/BackButton";
import { Link } from "react-router-dom";
import { images } from "../../utils/constants/images/Images";
import { icons } from "../../utils/constants/images/Icons";
import ProductCard from "../../utils/products/cards/ProductCardSmall";
import { getProfileData } from "../../backend/get_profiledata";
import CommentCard from "../../utils/products/components/CommentCard";

//placeholder until backend is ready
function ProfilePage() {
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

  const ProfilePictureUrl = user.picture_url.startsWith("/")
    ? `https://api.honesttracker.nl${user.picture_url}`
    : images.placeholder;

  return (
    <main className="flex flex-col mt-20 justify-center items-center mb-20">
      <div className="w-5/6">
        <div>
          <div className="flex flex-row mb-10 justify-between">
            <BackButton />
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-4">
            <div className="bg-white border-2 mb-10 border-gray-200 flex items-center p-4 shadow-sm rounded-md col-span-3">
              <img
                src={ProfilePictureUrl}
                alt="Profile"
                className="h-24 w-24 mr-4 rounded-full"
              />
              <span className="flex-grow text-3xl font-semibold">
                Hello, {user.name}!
              </span>
              <Link to="/settingsauth">
                <icons.SettingsGear
                  src={images.footerLogo}
                  alt="Settings"
                  className="h-12 w-12 mr-4 cursor-pointer hover:fill-black transition duration-1000 ease-in-out transform hover:rotate-360"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-2/3">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">Your recent comments</h1>
                <Link
                  to="/comments"
                  className="text-xl opacity-55 cursor-pointer underline font-medium"
                >
                  See all
                </Link>
              </div>

              {comments.length > 0 ? (
                comments.slice(0, 3).map((comment) => (
                  <div key={comment.id} className="flex flex-col mb-4">
                    <CommentCard comment={comment} />
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No comments yet!</p>
              )}
            </div>

            <div className="w-1/4">
              <div className="flex justify-between">
                <h1 className="text-2xl font-semibold">
                  Your favorite products
                </h1>
                <Link
                  to="/favourites"
                  className="text-xl opacity-55 cursor-pointer underline font-medium"
                >
                  See all
                </Link>
              </div>
              {favorites.slice(0, 3).map((favorite) => (
                <ProductCard key={favorite.id} product={favorite.product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
