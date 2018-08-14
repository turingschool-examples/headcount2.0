import React from 'react';

const Card = ({ location, stats}) => {
  const displayStats = Object.entries(stats).map((stat, i) => {
    return <div key={ i }>{stat[0]} : {stat[1]}</div>
  })
  
  return (
    <article className="card">
      <h1>{location}</h1>
      <ul>{displayStats}</ul>
    </article>
  )
}

export default Card;
