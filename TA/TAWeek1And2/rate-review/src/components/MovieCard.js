import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import StarRating from './StarRating'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})

export default function MovieCard({ movie, reviews }) {
  const totalRating = reviews.reduce((acc, { rating }) => acc + rating, 0)
  const average = (totalRating / reviews.length || 0).toFixed(1)
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movie.poster}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StarRating value={average} readonly size={10} />
      </CardActions>
    </Card>
  )
}
