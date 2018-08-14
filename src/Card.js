import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Card = ({ stats, location }) => {
  return (
    <div className="Card">
      <h3>{location}</h3>
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

export default Card;
