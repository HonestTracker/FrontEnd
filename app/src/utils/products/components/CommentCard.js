import React from "react";
import { images } from "../../constants/images/Images";
import { icons } from "../../constants/images/Icons";
import { formatDateTime } from "../utils/Formatters";

const CommentCard = ({ comment }) => {
  const commentProfilePictureUrl = comment.user.picture_url.startsWith("/")
    ? `https://api.honesttracker.nl${comment.user.picture_url}`
    : images.placeholder;

  return (
    <div
      className="bg-white rounded-lg p-6 mb-4"
      style={{
        boxShadow:
          "0 -2px 5px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div key={comment.id} className="flex flex-col mb-4">
        <div className="flex justify-between mb-2">
          <div className="flex items-center gap-2 pl-4">
            <img
              src={commentProfilePictureUrl}
              className="h-14 w-14 rounded-md"
              alt="Footer Logo"
            />
            <p className="text-xl font-bold text-gray-500">
              {comment.user.name}
            </p>
          </div>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <icons.Star
                key={star}
                className={`h-10 w-10 ${
                  star <= comment.stars ? "fill-yellow-400" : ""
                }`}
              />
            ))}
          </div>
        </div>
        <p className="font-semibold text-gray-500 pt-4 overflow-hidden">
          {comment.text}
        </p>
        <p className="text-sm text-gray-400">
          {formatDateTime(comment.created_at)}
        </p>
      </div>
      <icons.Trash className="h-6 w-6 cursor-pointer" />
    </div>
  );
};

export default CommentCard;
