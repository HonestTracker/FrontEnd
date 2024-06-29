import React, { useState } from "react";
import { icons } from "../../constants/images/Icons";
import { images } from "../../constants/images/Images";
import { formatDateTime } from "../utils/Formatters";

// THIS SHIT IS HARD CODED RN
const CommentsSection = () => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

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

  const handleMessageSend = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    console.log("Sending message:", message, "with rating:", rating);
    setMessage("");
    setRating(0);
  };

  const handleRatingClick = (star) => setRating(star);

  const handleHover = (star) => setHovered(star);

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold mb-4">Comments</h1>
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
              src={images.placeholder}
              className="h-14 w-14 rounded-md"
              alt="Footer Logo"
            />
            <p className="text-xl font-bold text-gray-500">Jur</p>
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
        </form>
      </div>

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
