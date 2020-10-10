import React from 'react'
import { Card, Button } from 'react-bootstrap'

import StarRating from './StarRating'
const MovieCard = ({ movie, average, visibility, setVisibility, comments }) => {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.summary}</Card.Text>
        <Card.Text>
          <StarRating value={average} readonly size={10} /> {average}
          {`     ${comments.length} people rated`}
        </Card.Text>
        <Button variant="primary" onClick={() => setVisibility(!visibility)}>
          {visibility ? 'Cancel' : 'Please Rate and Write a Comment'}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MovieCard
