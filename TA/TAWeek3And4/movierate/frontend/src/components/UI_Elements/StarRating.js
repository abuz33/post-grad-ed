import React from "react";
import ReactStars from "react-rating-stars-component";

const StarRating = ({ value, size, color, ...rest }) => {
  const settings = {
    size,
    count: 5,
    color: "red",
    activeColor: color,
    value: value,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };
  return (
    <div>
      <ReactStars {...settings} {...rest} />
    </div>
  );
};

export default StarRating;
