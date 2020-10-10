import React, { useEffect, useState } from "react";

import StarRating from "./StarRating";
import "./movieCard.css";

const MovieCard = ({ movie, average, visibility, setVisibility }) => {
  const { title, overview, poster_path } = movie;

  console.log("average movieCard Special", average);
  return (
    <React.Fragment>
      <div className="container__movie-card">
        <div className="movie">
          <div
            className="movie-img"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster_path})`,
            }}
          ></div>
          <div className="text-movie-cont">
            <div className="mr-grid">
              <div className="col1">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="mr-grid summary-row">
              <div className="col2">
                <h5>SUMMARY</h5>
              </div>
            </div>
            <div className="mr-grid">
              <div className="col1">
                <p className="movie-description">{overview}</p>
                <div>
                  <StarRating
                    value={average}
                    edit={false}
                    size={35}
                    isHalf={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn__form_visible">
        <button className="btn" onClick={() => setVisibility(!visibility)}>
          {visibility ? "Cancel" : "Please Rate and Write a Comment"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
