import React from "react";
import { images } from "../../constants/images/Images";
import { icons } from "../../constants/images/Icons";
import { formatDateTime } from "../utils/Formatters";

// dummy data.
const comments = [
  {
    id: 1,
    user: "Jur",
    date: "2024-06-28T15:30:00Z",
    message:
      "eu aaaaaaa nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 4,
  },
];

// comment card
// TODO: pass in the product and loop over its comments
const CommentCard = ({ product }) => {
  return (
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
              <p className="text-xl font-bold text-gray-500">{comment.user}</p>
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
  );
};

export default CommentCard;
