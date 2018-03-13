import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';


const Card = ({ district, selectLocation, compareLocations }) => {
  const selected = compareLocations.includes(district.location) ? 'selected' : '';

  return (
    <article 
      className={`district ${selected}`}
      onClick={() => selectLocation(district.location)} >
      <h3>{ district.location } </h3>
      <ul>
        {
          Object.keys(district.stats).map( (timeFrame, index) => {
            return (
              <li 
                key={index}
                className={district.stats[timeFrame] < 0.5 ? 'red' : ''}
              >
                {timeFrame}:
                {Math.round(district.stats[timeFrame] * 100) / 100}
              </li> 
            );
          })    
        }
      </ul>
    </article>
  
  );
};

Card.propTypes = { 
  district: PropTypes.object.isRequired
};

export default Card;