import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
          <button className="ctrl-btn">
            <Link to={`/watchlist/${movie.id}`}>
              <i className="fa fa-info-circle"> </i>
            </Link>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times" aria-hidden="true"></i>
          </button>
          <button className="ctrl-btn">
            <Link to={`/wacthed/${movie.id}`}>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
            </Link>
          </button>
        </>
      )}
    </div>
  );
};
