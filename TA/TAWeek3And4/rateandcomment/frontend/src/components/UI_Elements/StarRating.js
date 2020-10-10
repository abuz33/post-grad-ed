import React from 'react'
import Rating from 'react-rating'

const StarRating = ({ value, size, color, ...rest }) => {
  return (
    <div>
      <Rating
        style={{
          fontSize: `${size}px`,
          color: color || 'gold',
        }}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
        initialRating={value}
        {...rest}
      />
    </div>
  )
}

export default StarRating
