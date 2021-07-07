import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card.js';
import './style/DistrictContainer.css';

export const DistrictContainer = ({ districts, handleClick }) => {
  return (
    <div className="district-card-container">
      {districts.map((district, index) => <Card 
        district={district} 
        key={index}
        handleClick={handleClick}/>)}
    </div>
  );
};

const { array, func } = PropTypes;
DistrictContainer.propTypes = {
  districts: array,
  handleClick: func
};