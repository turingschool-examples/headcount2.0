import React from 'react';
import './DistrictCard.css';


const DistrictCard = (props) => {
  console.log(Object.keys(props.stats))
  const allStats = Object.keys(props.stats).map(stat => <li className={`${props.stats[stat] < .5 ? 'red-text': 'green-text'}`}>{stat}: {props.stats[stat]}</li>)
  console.log(allStats)
  return(
    <div>
      <h3>{props.location}</h3>
      <ul>{allStats}</ul>
    </div>
  )
}

export default DistrictCard;