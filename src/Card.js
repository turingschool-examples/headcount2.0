import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({location, stats}) => {
  const statsKeys = Object.keys(stats);
  const resultsLi = statsKeys.map((years, i) => 
    <li 
      key={Date.now() + i}
      className={stats[years] < 0.5 ? "red" : "green"}
    >
    { years } : { stats[years] }
    </li>)

  return (
    <div className="card">
      <h3>{location}</h3>
      <ul>
        {resultsLi}
      </ul>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
}

export default Card;