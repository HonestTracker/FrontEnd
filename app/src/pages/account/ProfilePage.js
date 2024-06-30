import React, { useEffect, useState } from "react";
import BackButton from "../../utils/components/navigation/BackButton";
import { Link } from "react-router-dom";
import { images } from "../../utils/constants/images/Images";
import { icons } from "../../utils/constants/images/Icons";
import ProductCard from "../../utils/products/cards/ProductCard";
import { getProfileData } from "../../backend/get_profiledata";

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
        console.log(data)
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

          <div className="col-span-2 -mt-8">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">Your recent comments</h1>
              <Link to="/all-comments" className="text-xl opacity-55 cursor-pointer underline font-medium">
                See all
              </Link>
            </div>

            {comments.slice(0, 3).map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-lg p-6 mb-4"
                style={{
                  boxShadow:
                    "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center gap-2 pl-4">
                      <img
                        src={ProfilePictureUrl}
                        className="h-14 w-14 rounded-md"
                        alt="User Profile"
                      />
                      <p className="text-xl font-bold text-gray-500">
                        {comment.user.name}
                      </p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <icons.Star
                          key={star}
                          className={`h-10 w-10 ${star <= comment.stars ? "fill-yellow-400" : ""
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-semibold text-gray-500 pt-4 overflow-hidden">
                    {comment.text}
                  </p>

                </div>
              </div>
            ))}
          </div>

          <div></div>
          <div class="mt-2">
            <h1 class="text-2xl font-semibold">Your favourite products</h1>
            <div className="flex items-center col-span-1 border-2  bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images.pickachu}
                alt="Pokemon Shoes"
                className="w-36 h-full"
              />
              <div className="flex-grow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="mt-2 mb-2 ml-4 flex items-center">
                      <icons.Amazon
                        src={images.footerLogo}
                        alt="Pikachu"
                        class="h-8 w-8 fill-blue-400"
                      />
                      <a
                        href="https://www.amazon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        amazon.com
                      </a>
                    </div>
                    <h2 className="text-lg font-bold ml-6 text-gray-800">
                      €423,93
                    </h2>
                    <p className="text-red-500 ml-6">-2,73%</p>
                    <icons.Link
                      style={{ width: "20px", height: "20px" }}
                      class="ml-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ProductCard />

          <div class="mt-4">
            <h1 class="text-xl text-end opacity-55 cursor-pointer underline font-medium">
              See all
            </h1>
            <div className="flex items-center col-span-1 border-2  bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={images.footerLogo}
                alt="Pokemon Shoes"
                className="w-36 h-full"
              />
              <div className="flex-grow p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="mt-2 mb-2 ml-4 flex items-center">
                      <icons.Coolblue
                        src={images.footerLogo}
                        alt="Pikachu"
                        class="h-8 w-8 mr-2 fill-blue-400"
                      />
                      <a
                        href="https://www.amazon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                      >
                        amazon.com
                      </a>
                    </div>
                    <h2 className="text-lg font-bold ml-6 text-gray-800">
                      €423,93
                    </h2>
                    <p className="text-red-500 ml-6">-2,73%</p>
                    <icons.Link
                      style={{ width: "20px", height: "20px" }}
                      class="ml-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center col-span-1 border-2 mt-10 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={images.footerLogo}
              alt="Pokemon Shoes"
              className="w-36 h-full"
            />
            <div className="flex-grow p-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="mt-2 mb-2 ml-4 flex items-center">
                    <icons.Bolcom
                      src={images.footerLogo}
                      alt="Pikachu"
                      class="h-8 w-8 mr-2 fill-blue-400"
                    />
                    <a
                      href="https://www.amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                    >
                      amazon.com
                    </a>
                  </div>
                  <h2 className="text-lg font-bold ml-6 text-gray-800">
                    €423,93
                  </h2>
                  <p className="text-red-500 ml-6">-2,73%</p>
                  <icons.Link
                    style={{ width: "20px", height: "20px" }}
                    class="ml-32"
                  />
                </div>
              </div>
            </div>
          </div>

          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
}

export default ProfilePage;
