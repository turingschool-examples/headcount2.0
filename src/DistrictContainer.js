import React from 'react';

import { Card } from './Card.js';
import './style/DistrictContainer.css';

export const DistrictContainer = ({ districts, checkForMaxCards }) => {
  return (
    <div className="district-card-container">
      {districts.map((district, index) => <Card 
        district={district} 
        key={index}
        checkForMaxCards={checkForMaxCards}/>)}
    </div>
  );
};