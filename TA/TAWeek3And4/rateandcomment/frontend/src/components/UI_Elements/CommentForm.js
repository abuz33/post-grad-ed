import React, { useState, useEffect } from 'react'

import { Form, Button } from 'react-bootstrap'
import StarRating from './StarRating'

const initialFormState = { name: '', comment: '', rating: 0 }

const CommentForm = ({ setComments, setVisible, comments }) => {
  const [formState, setFormState] = useState(initialFormState)
  const [disabled, setDisabled] = useState(true)

  const { name, comment, rating } = formState

  function handleSubmit(e) {
    e.preventDefault()
    setComments([
      { name, comment, rating, date: new Date().toLocaleDateString('en-US') },
      ...comments,
    ])
    setVisible(false)
    setFormState(initialFormState)
  }

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    if (comment.length > 3 && rating > 0 && name !== '') setDisabled(false)
    else setDisabled(true)
  }, [name, rating, comment])

  return (
    <div>
      <StarRating
        onChange={(rating) => {
          console.log(formState)
          setFormState({ ...formState, rating })
        }}
        value={formState.rating}
      />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control
            size="lg"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            size="lg"
            name="comment"
            type="text"
            placeholder="Enter your comment"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={disabled}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CommentForm
