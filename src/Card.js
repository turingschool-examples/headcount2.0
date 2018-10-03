import React from 'react'
import './Card.css'

const Card = ({location, data}) => {
  return(
    <div className="card">
      <h3 className="school-name">{location}</h3>
      <p className="school-data">{data}</p>
    </div>
  )
}

export default Card; 