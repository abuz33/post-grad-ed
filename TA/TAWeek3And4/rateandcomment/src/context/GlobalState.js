import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

/********** Delete the codes below ***********/

// import { useHttpClient } from "../components/hooks/http-hook";
// const { isLoading, error, sendRequest, clearError } = useHttpClient();
// useEffect(() => {
//   const fetchMovies = async () => {
//     try {
//       console.log(process.env.REACT_APP_BACKEND_URL);
//       const responseData = await sendRequest(
//         `${process.env.REACT_APP_BACKEND_URL}/movies`
//       );
//       addMovieToWatched(responseData);
//     } catch (err) {}
//   };
//   fetchMovies();
// }, [sendRequest]);

//initial State
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
  comments: localStorage.getItem("comments")
    ? JSON.parse(localStorage.getItem("comments"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provide context
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
    localStorage.setItem("comments", JSON.stringify(state.comments));
  }, [state]);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const addCommentToMovies = (comment) => {
    dispatch({ type: "ADD_COMMENT_TO_MOVIES", payload: comment });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        removeFromWatched,
        moveToWatchlist,
        addCommentToMovies,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
