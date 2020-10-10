const express = require("express");

const Movie = require("../models/Movie");
const HttpError = require("../models/http-error");

const router = express.Router();

// To get all movie
router.get("/", async (req, res) => {
  try {
    const posts = await Movie.find();
    res.json({ data: JSON.stringify(posts), message: "Here are you movies" });
  } catch (error) {
    res.json({ message: "Couldn't get the Movies" });
  }
});

// Submits a movie
router.post("/", async (req, res, next) => {
  const { title, id, overview, poster_path, list_type } = req.body;

  let existingMovie;
  try {
    existingMovie = await Movie.findOne({ title: title });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingMovie) {
    const error = new HttpError(
      "Movie exists already, please try another movie instead.",
      422
    );
    return next(error);
  }

  const movie = new Movie({
    title,
    id,
    overview,
    poster_path,
    movie_list: list_type,
  });

  try {
    const savedMovie = await movie.save();
    res.json(savedMovie);
  } catch (error) {
    res.json({ message: error });
  }
});

// Get Specific Movie
router.get("/:movieId", async (req, res) => {
  try {
    const movie = await Movie.findById({ _id: req.params.movieId });
    if (movie === null) {
      res.json({ message: "Cannot find the movie" });
    }
    res.json({ movie: movie });
  } catch (error) {
    res.json({ message: "There was an error while getting the movie" });
  }
});
//Delete specific movie
router.delete("/:movieId", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete({ _id: req.params.movieId });
    res.json({ deletedMovie: movie, message: "Movie deleted succesfuly" });
  } catch (error) {
    res.json({ message: "There was an error while deleting the post" });
  }
});

// Changing a Movie details
router.patch("/:movieId", async (req, res) => {
  try {
    const movie = await Movie.updateOne(
      { _id: req.params.movieId },
      { listType: req.body.listType }
    );
    res.json({ movie: movie, message: "Movie has been updated succesfuly" });
  } catch (error) {
    res.json({ message: "There was an error while updating the movie" });
  }
});

module.exports = router;
