export const calculateAverage = (comments, movieId) => {
  const movieComments = comments.filter(
    (comment) => comment.movieId === movieId
  );
  console.log(comments);
  console.log("movieComments", movieComments);
  const totalRates = movieComments.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  console.log(Math.round((totalRates / movieComments.length) * 10) / 10);
  return movieComments.length === 0
    ? 0
    : Math.round((totalRates / movieComments.length) * 10) / 10;
};
