import React from 'react';
import './card.css'

const Card = (props) => {
  const {location, stats, selected} = props

  const spreadStats =
    Object.keys(stats).map((stat, index) => {
      return (
        <div>
          <h5>{stat}</h5>
          <p>{stats[stat]}</p>
        </div>
      )
    })
  

  return (
    <div className="card">
      <h1>{location}</h1>
      {spreadStats}
    </div>
  )
}

export default Card;