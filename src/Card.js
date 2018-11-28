import React from 'react';
import './Card.css'
import PropTypes from 'prop-types'

const Card = (props) => {
  const stats = Object.keys(props.cardInfo.stats).map((currStat) => {
    return <li>{currStat}: {props.cardInfo.stats[currStat]}</li>

  })

  return(
    <div className="card-wrapper">
      <h1 className="location">{props.cardInfo.location}</h1>
      <ul className="stats">{stats}</ul>
    </div>
  )
}

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired 
}

export default Card;