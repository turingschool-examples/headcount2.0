import React from 'react';
import './DistrictCard.css';


const DistrictCard = ({stats, location, addToCompare}) => {
  const allStats = Object.keys(stats).map(stat => (
    <p className={`${stats[stat] < .5 ? 'red-text': 'green-text'}`}>{stat}: {stats[stat]}</p>
  ))
  return (
    <article onClick={ () => addToCompare(location) }>
      <h3>{location}</h3>
      <ul>{allStats}</ul>
    </article>
  )
}

export default DistrictCard;