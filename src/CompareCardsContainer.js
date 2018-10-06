import React from 'react';
import SchoolCard from './SchoolCard';
import ComparedCard from './ComparedCard';

const CompareCardsContainer = ({ cards, compareAvrg, setStateOfCompare, comparedCard }) => {
  const schoolCards = Object.keys(cards).map(card => 
    <SchoolCard location={card} 
      data={cards[card]} 
      key={Object.keys(cards[card])}
      compareAvrg={compareAvrg}/>
  );
  const comparisonCard = [{comparedCard}].map(card => 
    <ComparedCard location={comparedCard} data={card}/>
  );
  return (
    <div className='compare-card-container'>
       {schoolCards}
       {comparisonCard}  
    </div>
  );
};


export default CompareCardsContainer;