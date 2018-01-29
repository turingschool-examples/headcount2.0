import React from 'react';
import Card from '../Card/Card.js';
import './ComparedCards.css';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
import PropTypes from 'prop-types';

const ComparedCards = ({ selectedCards, selectCard, makeComparison, removeComparison }) => {
  let comparedObject;

  if (selectedCards.length > 1) {
    const d1 = selectedCards[0].location;
    const d2 = selectedCards[1].location;

    comparedObject = makeComparison(d1, d2);
  }

  const selectedCardsArray = selectedCards.map((district, key) => 
    <Card 
      districtName={district.location}
      data={district.data}
      id={district.location}
      selectCard={selectCard}
      key={key}
    />);

  return (

    <article className="compared-cards-container">
      
      <div className="compared-cards">
        {selectedCardsArray[0]}

        <ComparisonCard comparedObject={comparedObject}/>

        {selectedCardsArray[1]}
      </div>

      <div>
        <button 
          id="remove-comparison"
          onClick={removeComparison}>
            clear comparison
        </button>
      </div>
    
    </article>
  );
};

ComparedCards.propTypes = {
  selectedCards: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  makeComparison: PropTypes.func.isRequired,
  removeComparison: PropTypes.func.isRequired
};
export default ComparedCards;