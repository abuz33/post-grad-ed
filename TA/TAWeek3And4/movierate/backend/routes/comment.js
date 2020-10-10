const express = require("express");

const Comment = require("../models/Comment");

const router = express.Router();

// To get all Comments
router.get("/", async (req, res) => {
  try {
    const posts = await Comment.find();
    res.json({ data: JSON.stringify(posts), message: "Here are you comments" });
  } catch (error) {
    res.json({ message: "Couldn't get the Comments" });
  }
});

// To post a comment
router.post("/", async (req, res) => {
  const { movie_id, name, comment, rating } = req.body;
  const commentToPost = new Comment({
    movie_id,
    name,
    comment,
    rating,
  });
  try {
    const savedComment = await commentToPost.save();
    res.json(savedComment);
  } catch (error) {
    res.json({
      message: "There was an error while sending the comment",
      error: error,
    });
  }
});

// Get Specific Comment
router.get("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.findById({ _id: req.params.commentId });
    if (comment === null) {
      res.json({ message: "Cannot find the comment" });
    }
    res.json({ comment: comment });
  } catch (error) {
    res.json({ message: "There was an error while sending the qeury" });
  }
});
//Delete specific movie
router.delete("/:commentId", async (req, res) => {
  try {
    const movie = await Comment.findByIdAndDelete({ _id: req.params.movieId });
    res.json({ deletedComment: movie, message: "Comment deleted succesfuly" });
  } catch (error) {
    res.json({ message: "There was an error while sending the post" });
  }
});

// Changing a Comment details
router.patch("/:CommentId", async (req, res) => {
  try {
    const comment = await Comment.updateOne(
      { _id: req.params.movieId },
      { listType: req.body.listType }
    );
    res.json({
      commnet: comment,
      message: "Comment has been updated succesfuly",
    });
  } catch (error) {
    res.json({ message: "There was an error while updating the Comment" });
  }
});

module.exports = router;
