import React from 'react';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
}

export default Card;
