import React from 'react';
import './card.css'

const Card = (props) => {
  const {location, stats, selected} = props

  const spreadStats =
    Object.keys(stats).map((stat, index) => {
      return (
        <div className="stat-container">
          <h5 className="year">{stat}:</h5>
          <p className="stat">{stats[stat]}</p>
        </div>
      )
    })
  

  return (
    <div className="card">
     
      <h1 className="location">{location}</h1>

      <div>
      {spreadStats}
      </div>
    </div>
  )
}

export default Card;