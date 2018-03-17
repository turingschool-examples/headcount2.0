import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ location, stats, selectLocation, selectedLocations }) => {

  const isSelected = selectedLocations.some(district => {
    return district.location === location;
  });
  const selected = isSelected ? 'selected' : '';
  
  const dataPoints = Object.keys(stats).map((timeFrame, index) => {
    return (
      <li key={index} className={stats[timeFrame] < 0.5 ? 'red' : ''}>
        {timeFrame}: {Math.round(stats[timeFrame] * 100) / 100} %
      </li>
    );
  });    

  return (
    <article 
      className={`district ${selected}`}
      onClick={() => selectLocation(location)} >
      <header>
        <h3>{location}</h3>
      </header>
      <ul>
        {dataPoints}
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