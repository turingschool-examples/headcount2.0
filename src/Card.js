import React from 'react'
import './Card.css'

const Card = ({ location, stats }) => {

  const displayStats = Object.entries(stats).map(stat => <li>{stat[0]}: {stat[1]}</li>)
  return(
  <div className="card">  
    <h4>{location}</h4>
    <p>{displayStats}</p>
  </div>
  )
}

export default Card