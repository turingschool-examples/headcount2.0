import React from 'react';

const Card = ({ location, stats }) => {
  // console.log(stats)
  const statKeys = Object.keys(stats);
  const districtStats = statKeys.map(year => {
    return  <li className={stats[year] < 0.5 ? "below": ""} >{year}: <span>{stats[year]}</span></li>
  });

  return (
    <article className="card">
      <h2>{location}</h2>
      <hr />
      <ul>
        {districtStats}
      </ul>
    </article>
  )
}

export default Card;

