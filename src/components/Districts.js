import React from 'react';
import Card from './Card';

const Districts = ({ stats }) => {
  const statKeys = Object.keys(stats);

  const districtCards = statKeys.map((stat, index) => {
    return <Card {...stats[stat]} key={Date.now() + index} />
  });

  return (
    <section className="districtCards">
      {districtCards}
    </section>
  );
};

export default Districts;