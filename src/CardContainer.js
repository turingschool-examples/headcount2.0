import React from 'react';
import SchoolCard from './SchoolCard';

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


export default CardContainer;