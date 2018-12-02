import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({location, stats}) => {
  const statsKeys = Object.keys(stats);

  const listItems = statsKeys.map((key) => {
    if (stats[key] < 0.5) {
      return <li key={key}>{`${key}: `}<span className="yellow">{`${stats[key]}`}</span></li>
    } else {
      return <li key={key}>{`${key}: `}<span className="purple">{`${stats[key]}`}</span></li>
    }
  })

  return ( 
    <article className="card">
      <h3>{location}</h3>
      <hr />
      <ul className="timeframes">
        {listItems}
      </ul>
    </article>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
}

export default Card;