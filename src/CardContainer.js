import React from 'react';
import SchoolCard from './SchoolCard';

const CardContainer = ({ cards }) => {
  const schoolCards = Object.keys(cards).map(card => 
    <SchoolCard location={card} 
      data={cards[card]} 
      key={Object.keys(cards[card])}/>
  );
  return (
    <div className='card-container'>
      {schoolCards};
    </div>
  );
};


export default CardContainer;