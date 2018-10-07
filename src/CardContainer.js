import React from 'react';
import SchoolCard from './SchoolCard';
import PropTypes from 'prop-types';

const CardContainer = ({ cards, setStateOfCompare }) => {
  const compareCards = Object.keys(cards).map(card => 
    <SchoolCard location={card} 
      data={cards[card]} 
      key={Object.keys(cards[card])} 
      setStateOfCompare={setStateOfCompare} />
  );
  return (
    <div className='card-container'>
      { compareCards }
    </div>
  );
};

CardContainer.propTypes = {
  cards: PropTypes.Object,
  setStateOfCompare: PropTypes.func
};
export default CardContainer;