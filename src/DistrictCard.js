import React from 'react';
import './DistrictCard.css';


const DistrictCard = (props) => {
  const allStats = Object.keys(props.stats).map(stat => <li className={`${props.stats[stat] < .5 ? 'red-text': 'green-text'}`}>{stat}: {props.stats[stat]}</li>)
  return(
    <article onClick={ () => props.addToCompare(props.location) }>
      <h3>{props.location}</h3>
      <ul>{allStats}</ul>
    </article>
  )
}

export default DistrictCard;