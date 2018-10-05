import React from 'react';

const Card = ({location, stats}) =>{
  const statsArray = Object.keys(stats);
  const districtData = statsArray.map(data=>stats[data])
  return(
    <div>
    <h4>{location}</h4>
    <h3>{districtData}</h3>
    </div>
  )
}

export default Card;
