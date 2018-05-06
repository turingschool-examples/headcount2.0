import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Districts = ({ stats, setSelectedCard}) => {
  const statKeys = Object.keys(stats);
  const districtCards = statKeys.map((stat, index) => {
    return <Card {...stats[stat]} key={index + 'district'} setSelectedCard={setSelectedCard} />
  });

  return (
    <section className="districtCards">
      {districtCards}
    </section>
  );
};

Districts.propTypes = {
  stats: PropTypes.string.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
}

export default Districts;