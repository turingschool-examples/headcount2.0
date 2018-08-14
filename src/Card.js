import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ stats, location }) => {
  return (
    <div className="Card">
      <h2>{location}</h2>
      {Object.keys(stats).map(stat => {
        return (
          <article>
            <ul>
              {stat}: {stats[stat]}
            </ul>
          </article>
        );
      })}
    </div>
  );
};

Card.propTypes = {
  stats: PropTypes.object,
  location: PropTypes.string
};

export default Card;
