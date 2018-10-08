import React from 'react';
import SchoolCard from './SchoolCard';
import ComparedCard from './ComparedCard';
import PropTypes from 'prop-types';


const CompareCardsContainer = 
({ cards, compareAvrg, comparedCard, setStateOfCompare }) => {
  const schoolCards = Object.keys(cards).map(card => 
    <SchoolCard location={card} 
      data={cards[card]} 
      key={Object.keys(cards[card])}
      compareAvrg={compareAvrg}
      setStateOfCompare={setStateOfCompare} />
  );
  const comparisonCard = [{comparedCard}].map(card => 
    <ComparedCard location={comparedCard} data={card} key={card}/>
  );
  return (
    <div className='compare-card-container'>
      {schoolCards}
      {comparisonCard}  
    </div>
  );
};


CompareCardsContainer.propTypes = {
  cards: PropTypes.array,
  compareAvrg: PropTypes.func,
  comparedCard: PropTypes.array,
  setStateOfCompare: PropTypes.func
};
export default CompareCardsContainer;