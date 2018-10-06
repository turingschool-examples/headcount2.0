import React from 'react';
import SchoolCard from './SchoolCard';

const CompareCardsContainer = ({ cards, compareAvrg, setStateOfCompare }) => {
  const schoolCards = Object.keys(cards).map(card => 
    <SchoolCard location={card} 
      data={cards[card]} 
      key={Object.keys(cards[card])}
      compareAvrg={compareAvrg}/>
  );
  return (
    <div className='compare-card-container'>
       {schoolCards}  
    </div>
  );
};


export default CompareCardsContainer;