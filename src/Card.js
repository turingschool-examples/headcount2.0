import React from 'react'
import './Card.css'
import PropType from 'prop-types'

const Card = ({ location, stats }) => {
  const displayStats = Object.entries(stats).map((stat,index) => <li key={index} className={`greaterThan ${ stat[1] < .5 ? 'lessThan' : ''}`}>{stat[0]}: {stat[1]}</li>)

  return(
  <div className="card">  
    <h1 className="cardHeader">{location}</h1>
    <ul>{displayStats}</ul>
  </div>
  )
}

Card.propTypes = {
  location: PropType.string,
  stats: PropType.object
}

export default Card