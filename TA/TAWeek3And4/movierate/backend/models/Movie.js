const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: { type: String, required: true },
  id: { type: Number, required: true },
  overview: { type: String, required: true },
  poster_path: { type: String, required: true },
  movie_list: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

MovieSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Movie", MovieSchema);
