import React from "react";
import { icons } from "../../../utils/constants/images/Icons";
import { images } from "../../../utils/constants/images/Images";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({
  featuredProduct,
  formatPrice,
  getIconComponent,
  formatDateTime,
}) => {
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`/product/${featuredProduct.id}`);
    window.scrollTo(0, 0);
  };

  const handleFavouriteClick = (event) => {
    event.stopPropagation();
    // Handle the favourite action here
  };

  const handleShareClick = (event) => {
    event.stopPropagation();
    // Handle the share action here
  };

  const handleVisitWebpageClick = (event) => {
    event.stopPropagation();
    // Handle the visit webpage action here
  };

  return (
    <section className="bg-white rounded-lg mb-8 shadow-md">
      <div className="flex">
        <div onClick={navigateToDetails}>
          <img
            src={images.placeholder}
            alt={featuredProduct.name || "Placeholder"}
            className="w-72 h-72 rounded-lg"
          />
        </div>
        <div className="w-2/3 flex flex-col justify-between p-6">
          <div onClick={navigateToDetails}>
            <h3 className="text-xl font-black">{featuredProduct.name}</h3>
            <div className="flex items-center space-x-2">
              <icons.Tag style={{ width: "20px", height: "20px" }} />
              <p className="text-gray-500">
                {featuredProduct.site?.category?.name || "No category"}
              </p>
            </div>
            <div className="flex items-start mt-6 space-x-4">
              <div className="mr-4">
                <p className="text-gray-500">Current price:</p>
                <p
                  className={`text-2xl text-bold ${
                    featuredProduct.change_percentage > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {formatPrice(featuredProduct.current_price)}
                </p>
                <span
                  className={`text-sm ${
                    featuredProduct.change_percentage > 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {featuredProduct.change_percentage > 0 ? "+" : "-"}
                  {Math.abs(featuredProduct.change_percentage)}%
                </span>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-500">Current cheapest website:</p>
                <div className="flex items-center">
                  <div className="mr-2">
                    {getIconComponent(featuredProduct.site?.site_name) &&
                      React.createElement(
                        getIconComponent(featuredProduct.site.site_name),
                        {
                          style: { width: "20px", height: "20px" },
                        }
                      )}
                  </div>
                  <p className="text-gray-500">
                    {featuredProduct.site?.site_name || "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2 gap-4">
            <div className="flex flex-row items-center gap-1">
              <icons.Heart
                style={{ width: "20px", height: "20px" }}
                onClick={handleFavouriteClick}
              />
              <a href="#" className="text-black" onClick={handleFavouriteClick}>
                Favourite
              </a>
            </div>
            <div className="flex flex-row items-center gap-1">
              <icons.Link
                style={{ width: "20px", height: "20px" }}
                onClick={handleShareClick}
              />
              <a href="#" className="text-black" onClick={handleShareClick}>
                Share
              </a>
            </div>
            <div className="flex flex-row items-center gap-1">
              <icons.Plane style={{ width: "20px", height: "20px" }} />
              <a
                href={featuredProduct.url}
                target="_blank"
                className="text-black"
                onClick={handleVisitWebpageClick}
              >
                Visit webpage
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
