import React from 'react';
import './Card.css';

const Card = (props) => {
  let locationMatch = props.selectedCards.includes(props.location)
  const yearKeys = Object.keys(props.stats);
  const dataElement = yearKeys.map((year, index) => {
    let lowStat =  <span className="card-low-stat">{props.stats[year]}</span>;
    let highStat = props.stats[year];

    return (
      <li key={index} >
        <span className="card-year">{year + ": "}</span>
        {props.stats[year] < .5 ? lowStat : highStat}
      </li>
    ) 
  })

  return (
    <div className={locationMatch ? 'selected card' : 'card'} onClick={props.selectCard} >
      <h3>{props.location}</h3>
      <hr />
      <ul>
        { dataElement }
      </ul>
    </div>
  )

}

export default Card;