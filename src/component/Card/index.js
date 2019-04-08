import React from 'react'
import PropTypes from 'prop-types'

const Card = ({property}) => {
  const {
    index,
    tenis,
    picture,
  } = property

  return (
    <div
      id={`card-${index}`}
      className="card"
    >
    <img src={picture} alt={tenis} />
    <div className="details" />
</div>
  )
}

Card.propTypes = {
  property: PropTypes.object.isRequired
}

export default Card