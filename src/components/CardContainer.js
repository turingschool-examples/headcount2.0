import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import '../styles/CardContainer.css';

const CardContainer = ({ stats, setSelectedCard}) => {
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

CardContainer.propTypes = {
  stats: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  setSelectedCard: PropTypes.func.isRequired,
}

export default CardContainer;