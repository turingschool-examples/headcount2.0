import React from 'react';
import './card.css'

const Card = ({location, stats}) => {

  const yearsArray = Object.keys(stats);

  const districtData = yearsArray.map(year => { return `${year}: ${stats[year] }`})

  return(
    <div className="card-div">
    <h4>{location}</h4>
    <h3>{districtData}</h3>
    </div>
  )
}

export default Card;
