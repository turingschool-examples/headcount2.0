import React from 'react';

const Card = ({ location, stats }) => {
  console.log(stats)
  const statKeys = Object.keys(stats);
  const districtStats = statKeys.map(year => {
    return <ul>
              <li>{year}: {stats[year]}</li>
            </ul>
  });

  return (
    <div>
      <h2>{location}</h2>
      <h3>{districtStats}</h3>
    </div>
  )
}

export default Card;

