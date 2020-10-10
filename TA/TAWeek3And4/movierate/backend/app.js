const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const movieRoute = require("./routes/movie");
const commentRoute = require("./routes/comment");

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// Routes middlewares
app.use("/api/movies", movieRoute);
app.use("/api/comments", commentRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are now in home");
});

// Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to MongoDb")
);
// App listens
app.listen("5000", () => console.log("App started"));
