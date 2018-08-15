import React from 'react'
import './Card.css'

const Card = ({ location, stats }) => {
  const displayStats = Object.entries(stats).map(stat => <li className={`greaterThan ${ stat[1] < .5 ? 'lessThan' : ''}`}>{stat[0]}: {stat[1]}</li>)

  return(
  <div className="card">  
    <h4>{location}</h4>
    <ul>{displayStats}</ul>
  </div>
  )
}

export default Card