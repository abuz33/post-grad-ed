import React from "react";

import StarRating from "./StarRating";
import "./comments.css";

const Comments = ({ comments }) => {
  return (
    <div>
      <h3 className="comment__header">Comments And Ratings</h3>
      {comments !== null &&
        comments.map(({ comment, name, date, rating }, index) => (
          <div className={"comment"} key={index}>
            <div className="comment__details">
              <div className="comment__author">{name}</div>
              <p className="comment__date">{date}</p>
              <StarRating value={rating} edit={false} size={18} />
            </div>

            <p className="comment__text">{comment}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Comments;
