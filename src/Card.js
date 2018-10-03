import React from 'react'
import './Card.css'

const Card = ({district}) => {

  const dataPoints = Object.keys(district.data)
  console.log(dataPoints)
  return(
    <div className="card">
      <h3 className="school-name">{district.school}</h3>
      <ul className="school-data">
        {dataPoints.map( year => <li>{year} : {district.data[year]}</li>)}
      </ul>
    </div>
  )
}

export default Card; 