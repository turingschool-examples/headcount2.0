import React from 'react';
import './card.css'

const Card = ({location, stats}) => {

  const yearsArray = Object.keys(stats);

  // console.log(stats)

  const districtData = yearsArray.map((year, index) => { return <p key={index}>{year}: {stats[year]}</p>})

  return(
    <div className="card-div">
    <h4>{location}</h4>
    <h3>{districtData}</h3>
    </div>
  )
}

export default Card;
