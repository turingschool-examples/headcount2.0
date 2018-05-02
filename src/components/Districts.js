import React from 'react';
import Card from './Card';

const Districts = ({ stats }) => {
  const statKeys = Object.keys(stats);

  const districtCards = statKeys.map((stat, index) => {
    return <Card {...stats[stat]} key={Date.now() + index} />
  });

  return (
    <div>
      {districtCards}
    </div>
  );
};

export default Districts;