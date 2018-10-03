import React from 'react'
import './Card.css'

const Card = ({district}) => {
  // const schoolName = Object.keys(district)
  // const { data } = district
  return(
    <div className="card">
      <h3 className="school-name">{district}</h3>
      <p className="school-data"></p>
    </div>
  )
}

export default Card; 