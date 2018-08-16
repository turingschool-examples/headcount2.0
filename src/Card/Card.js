import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({location, stats}) => {
  const displayStats = Object.entries(stats).map((data, i) => (
    <li 
      key={i} 
      className={`${data[1] < .5 ? 'red' : 'green'}`}
    >{data[0]}: {data[1]}</li>
  ));

  return (
    <div className='card'>
      <h2 className='card-header'>{location}</h2>
      <ul className='stats-list'>{displayStats}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
};