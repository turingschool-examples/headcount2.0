import React from 'react';
import Card from './Card';

const Districts = ({ stats, setSelectedCard, selectedCards }) => {

  const statKeys = Object.keys(stats);
  const districtCards = statKeys.map((stat, index) => {
    return <Card {...stats[stat]} key={index + 'district'} setSelectedCard={setSelectedCard} selectedCards={selectedCards} />
  });

  return (
    <section className="districtCards">
      {districtCards}
    </section>
  );
};

export default Districts;