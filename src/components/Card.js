import React from 'react';
import '../styles/Card.css';

const Card = ({ location, stats, selected, setSelectedCard}) => {
  let statKeys = Object.keys(stats)

  const districtStats = statKeys.map(year => {
    return  <li className={stats[year] < 0.5 ? "below": ""} >{year}: <span>{stats[year]}</span></li>
  });

  return (
    <article className={"card " + (selected ? "selected": "")}  onClick={() => setSelectedCard(location)}>
      <h2>{location}</h2>
      <hr />
      <ul>
        {districtStats}
      </ul>
    </article>
  )
}

export default Card;

