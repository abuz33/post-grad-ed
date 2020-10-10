import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./commentForm.css";
import StarRating from "./StarRating";
import { GlobalContext } from "../../context/GlobalState";

const initialFormState = {
  name: "",
  comment: "",
  rating: 0,
};

const CommentForm = ({ setComments, setVisible, comments }) => {
  const { movieId } = useParams();
  const { addCommentToMovies } = useContext(GlobalContext);
  const [commentToForward, setCommentToForward] = useState({
    name: "",
    comment: "",
    rating: 0,
    date: new Date().toLocaleDateString("en-US"),
    movieId: movieId,
  });
  const [formState, setFormState] = useState(initialFormState);
  const [disabled, setDisabled] = useState(true);

  const { name, comment, rating } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    setComments([commentToForward, ...comments]);
    setVisible(false);
    setFormState(initialFormState);
    addCommentToMovies(commentToForward);
  }

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setCommentToForward({
      ...commentToForward,
      [e.target.name]: e.target.value,
    });
    console.log("handle change", commentToForward.rating);
  }

  useEffect(() => {
    if (comment.length > 3 && rating > 0 && name !== "") setDisabled(false);
    else setDisabled(true);
  }, [name, rating, comment]);

  return (
    <div className="container__form">
      <div>
        <StarRating
          onChange={(rating) => {
            setFormState({ ...formState, rating: rating });
            setCommentToForward({
              ...commentToForward,
              rating: rating,
            });
          }}
          value={formState.rating}
          size={25}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <label for="name">First Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          value={formState.name}
          onChange={handleChange}
        />

        <label for="comment">Comment</label>
        <textarea
          id="subject"
          name="comment"
          placeholder="Write your comment about the movie here.."
          style={{ height: "200px" }}
          value={formState.comment}
          onChange={handleChange}
        />

        <button disabled={disabled} type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
