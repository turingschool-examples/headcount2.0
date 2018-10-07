import React from 'react';
import './card.css'

const Card = ({location, stats}) => {

  const yearsArray = Object.keys(stats);

  // console.log(stats)

  const districtData = yearsArray.map((year, index) => { return <p key={index}><span className="year">{year}</span>: {stats[year]}</p>})

  return(
    <div className="card-div">
    <h2 className="location">{location}</h2>
    <h3 className="district-data">{districtData}</h3>
    </div>
  )
}

export default Card;
