import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import MovieCard from './components/MovieCard'
import Comments from './components/Comments'
import CommentForm from './components/CommentForm'

import movieList from './dummyData'
import initialComments from './initialComments'

function App() {
  const [formVisible, setFormVisible] = useState(false)
  const [comments, setComments] = useState(initialComments)

  const totalRating = comments.reduce((acc, { rating }) => acc + rating, 0)
  const average = (totalRating / comments.length || 0).toFixed(2)

  return (
    <Container>
      <Row style={{ marginTop: '10px' }} className="justify-content-md-center">
        <Col>
          <MovieCard
            movie={movieList}
            average={average}
            visibility={formVisible}
            setVisibility={setFormVisible}
            comments={comments}
          />
        </Col>
        <Col>
          {formVisible && (
            <Row>
              <CommentForm
                setComments={setComments}
                comments={comments}
                setVisible={setFormVisible}
              />
            </Row>
          )}
          <Row>
            <Comments comments={comments} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default App
