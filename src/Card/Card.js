import React from 'react';

export const Card = ({location, stats}) => {
  const displayStats = Object.entries(stats).map(data => (
    <li>{data[0]}: {data[1]}</li>
  ));

  return (
    <div>
      <h2>{location}</h2>
      <ul>{displayStats}</ul>
    </div>
  );
};