import React, { useState } from "react";
import { icons } from "../../constants/images/Icons";
import { images } from "../../constants/images/Images";
import { formatDateTime } from "../utils/Formatters";
import { useNavigate } from "react-router-dom";

// THIS SHIT IS HARD CODED RN
const CommentsSection = ( product ) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [errors, setErrors] = useState({});

  const comments = [
    {
      id: 1,
      user: "Jur",
      date: "2024-06-28T15:30:00Z",
      message:
        "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 4,
    },
  ];

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleMessageSend = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://api.honesttracker.nl/api/products/comments/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            text: message,
            stars: rating,
            product_id: product.product.id,
            user_id: loggedUser.id,
            device: "web",
          }),
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      if (!response.ok) {
        if (response.status === 422) {
          setErrors(responseData.errors);
        }
        console.log(responseData);
      } else {
        console.log("Comment posted successfully");
        window.location.reload();
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error during posting:", error);
    }
  };

  const handleRatingClick = (star) => setRating(star);

  const handleHover = (star) => setHovered(star);
  const loggedUser = JSON.parse(localStorage.getItem('user'));
  const profilePictureUrl = loggedUser.picture_url.startsWith("/")
  ? `https://api.honesttracker.nl${loggedUser.picture_url}`
  : images.placeholder;
  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Comments</h1>
      {loggedUser && (
      <>
        <div
          className="bg-white rounded-lg p-6 mb-10"
          style={{
            boxShadow:
              "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex justify-between mb-4">
            <div className="flex items-center gap-2 pl-4">
              <img
                src={profilePictureUrl}
                className="h-14 w-14 rounded-md"
                alt="Footer Logo"
              />
              <p className="text-xl font-bold text-gray-500">{loggedUser.name}</p>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <icons.Star
                  key={star}
                  className={`cursor-pointer h-10 w-10 ${
                    star <= (hovered || rating) ? "fill-yellow-400" : ""
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => handleHover(star)}
                  onMouseLeave={() => setHovered(0)}
                />
              ))}
            </div>
          </div>
          <form onSubmit={handleMessageSend}>
            <div className="bg-gray-100 mt-4 p-4 flex items-start rounded-md">
              <textarea
                className="flex-1 bg-transparent border-none outline-none text-gray-500 placeholder-gray-500 resize-none"
                placeholder="Write a comment..."
                rows="3"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button
              type="submit"
              className="text-white text-xl ml-auto flex bg-customTeal p-2 px-4 rounded-md mt-2"
            >
              <icons.Send className="h-8 w-8" />
              <p className="ml-1">Post</p>
            </button>
            {errors.stars && (
              <div className="text-red-400 -mt-5 mb-4">{errors.stars[0]}</div>
            )}
            {errors.text && (
              <div className="text-red-400 -mt-5 mb-4">{errors.text[0]}</div>
            )}
          </form>
        </div>
      </>
    )}

      <div
        className="bg-white rounded-lg p-6 mb-4"
        style={{
          boxShadow:
            "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col mb-4">
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2 pl-4">
                <img
                  src={images.placeholder}
                  className="h-14 w-14 rounded-md"
                  alt="Footer Logo"
                />
                <p className="text-xl font-bold text-gray-500">
                  {comment.user}
                </p>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <icons.Star
                    key={star}
                    className={`h-10 w-10 ${
                      star <= comment.rating ? "fill-yellow-400" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="font-semibold text-gray-500 pt-4 overflow-hidden">
              {comment.message}
            </p>
            <p className="text-sm text-gray-400">
              {formatDateTime(comment.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsSection;
