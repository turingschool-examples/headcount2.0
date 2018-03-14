import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ location, stats, selectLocation, selectedLocations }) => {
  const selected = selectedLocations.some(district => district.location === location) ? 'selected' : '';

  return (
    <article 
      className={`district ${selected}`}
      onClick={() => selectLocation(location)} >
      <h3>{location} </h3>
      <ul>
        {
          Object.keys(stats).map( (timeFrame, index) => {
            return (
              <li 
                key={index}
                className={stats[timeFrame] < 0.5 ? 'red' : ''}
              >
                {timeFrame}:
                {Math.round(stats[timeFrame] * 100) / 100}
              </li> 
            );
          })    
        }
      </ul>
    </article>
  
  );
};

Card.propTypes = { 
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  selectLocation: PropTypes.func.isRequired,
  selectedLocations: PropTypes.array.isRequired
};

export default Card;