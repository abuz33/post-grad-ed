const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const commentSchema = new Schema({
  movie_id: { type: mongoose.Types.ObjectId, required: true, ref: "Movie" },
  name: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
