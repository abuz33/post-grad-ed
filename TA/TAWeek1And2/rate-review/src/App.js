import React, { useState } from 'react'
import { Grid, Button } from '@material-ui/core'

import movieList from './dummyData'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const [reviews, setReviews] = useState([])
  const [formVisible, setFormVisible] = useState(false)

  const addReview = (newReview) => {
    setReviews([...reviews, newReview])
  }

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <h1>Movie Rate and Make Review</h1>
      </Grid>
      <Grid item xs={12}>
        <MovieCard movie={movieList} reviews={reviews}></MovieCard>
      </Grid>
      <Grid>
        <Button>Make a review</Button>
      </Grid>
    </Grid>
  )
}

export default App
