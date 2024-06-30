import React from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../constants/images/Images";
import { icons } from "../../constants/images/Icons";
import { addToFavorites } from "../../../backend/add_favorite.js";
/**
 * Renders a product card overview component.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product data.
 * @param {Function} props.getIconComponent - The function to get the icon component.
 * @param {Function} props.formatPrice - The function to format the price.
 * @returns {JSX.Element} The product card overview component.
 */
function ProductCardOverview({ product, getIconComponent, formatPrice }) {
  // bunch of stuff here cause i'm lazy and i don't want to explain them all
  const priceColor = product.change_percentage > 0 ? "red" : "#24BA4E";
  const percentageColor =
    product.change_percentage > 0 ? "text-red-500" : "text-green-500";
  const cardBackground =
    product.change_percentage > 0
      ? "linear-gradient(140deg, #FFFFFF 85%, #F4404880 0100%)"
      : "linear-gradient(140deg, #FFFFFF 85%, #10B98180 100%)";

  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo(0, 0);
  };

  // bro i'm lazy so i'll just copy these here
  // i forgot to explain but these are used to stop the event from propagating... whatever that means :D (i'm not a frontend dev, but im not a backend dev either, soooo... i'm a fullstack dev? :D no that can't be right... i'm a dev... i think... i'm not sure... i'm a human... i think... i'm not sure either)
  const token = localStorage.getItem("token");
  const handleFavouriteClick = async () => {
    try {
      // Call your API function to add to favorites
      const data = await addToFavorites(token, product.id); // Assuming addToFavorites sends a POST request with product ID
      console.log(`Added product ${product.id} to favorites`);
      // Optionally, you can update state or show a notification of success
    } catch (error) {
      console.error("Error adding to favorites:", error);
      // Handle error scenario
    }
  };

  const handleShareClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        marginBottom: "1rem",
        background: cardBackground,
        display: "flex",
        width: "100%",
        cursor: "pointer",
      }}
      onClick={navigateToDetails}
    >
      <img
        src={product.picture_url || images.placeholder}
        alt={product.name}
        className="max-w-64 max-h-64 object-contain rounded-lg p-4"
      />
      <div className="ml-4 w-full flex flex-col justify-between">
        <div className="text-xl font-semibold text-black mt-2 flex flex-row items-start justify-between p-2">
          <div className="flex flex-row gap-2 items-center">
            {getIconComponent(product.site?.site_name) &&
              React.createElement(getIconComponent(product.site.site_name), {
                style: { width: "20px", height: "20px" },
              })}
            <p className="text-gray-500">
              {product.site?.site_name || "Unknown"}
            </p>
          </div>
          <div className="flex flex-row gap-2 px-4">
            <icons.Heart
              alt="Heart"
              height={30}
              width={30}
              className="hover:fill-red-500"
              onClick={handleFavouriteClick}
            />
            <icons.Ketting
              alt="Tag"
              height={30}
              width={30}
              onClick={handleShareClick}
            />
          </div>
        </div>
        <div className="flex items-start mt-2 flex flex-col p-2">
          <p className="text-2xl font-bold">{product.name}</p>
          <div className="flex flex-row gap-2">
            <p style={{ color: priceColor }} className="text-xl">
              {formatPrice(product.current_price)}
            </p>
            <p style={{ color: priceColor }} className="text-xl font-bold">
              <span className={`text-sm ${percentageColor}`}>
                {product.change_percentage > 0 ? "+" : "-"}
                {Math.abs(product.change_percentage)}%
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-xs mb-2 p-2">
          <icons.Textvak alt="Tag" height={30} width={30} />
          <span className="ml-2 text-lg">38</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCardOverview;
