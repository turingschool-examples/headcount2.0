import React from 'react';
import { Card } from '../Card/Card';

export const CardContainer = ({schoolData}) => {
  const schoolValues = Object.values(schoolData.stats);
  const displayCards = schoolValues.map((schoolData, i) => (
    <Card
      key={i}
      location={schoolData.location}
      stats={schoolData.stats}
    />
  ));

  return (
    <div>
      {displayCards}
    </div>
  );
};