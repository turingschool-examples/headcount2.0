import React from 'react';
import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({schoolData}) => {
  const displayCards = schoolData.map((schoolData) => (
    <Card
      key={schoolData.location}
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