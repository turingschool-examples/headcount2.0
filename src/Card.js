import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({stats, location, handleCompare}) => {
  
  let cardCounter = 0;
  const yearData = Object.keys(stats);

  const SchoolScore = yearData.map(point => {
    return <p className={ (stats[point] < .5) 
      ? 'year-and-data-red' 
      : 'year-and-data-green'}
    key={cardCounter++}
    name={location}>
      {point} : {stats[point]} </p>;
  });

  this.handleClick = (event) => {
    let schoolName = event.target.getAttribute('name');
    handleCompare(schoolName);
    
  };

  return (
    <div className='card-div' name={location} onClick={this.handleClick}>
      <h1 className='location' name={location}>{location}</h1>
      {SchoolScore}
    </div>
  );
};

Card.propTypes = {
  stats: PropTypes.object,
  location: PropTypes.string,
  handleCompare: PropTypes.func
};

export default Card;