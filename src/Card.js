import React from 'react';
import './Card.css'
import PropTypes from 'prop-types'

const Card = (props) => {
  const stats = Object.keys(props.cardInfo.stats).map((currStat) => {
    return <li><span className="year">{currStat}</span> <span className="percentage">{props.cardInfo.stats[currStat]}</span></li>

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