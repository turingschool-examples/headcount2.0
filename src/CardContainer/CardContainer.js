import React from 'react';
import { Card } from '../Card/Card';
import './CardContainer.css';

export const CardContainer = ({schoolData}) => {
  const displayCards = schoolData.map((schoolData, i) => (
    <Card
      key={i}
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