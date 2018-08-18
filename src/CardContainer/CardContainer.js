import React from 'react';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

import './CardContainer.css';

export const CardContainer = ({schoolData}) => {
  const displayCards = schoolData.map((schoolData) => (
    <Card
      key={Date.now() * Math.random()}
      location={schoolData.location}
      stats={schoolData.stats}
    />
  ));

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  );
};

CardContainer.propTypes = {
  schoolData: PropTypes.array
};