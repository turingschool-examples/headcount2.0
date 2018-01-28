import React from 'react';
import Card from '../Card/Card.js';
import './ComparedCards.css';
import ComparisonCard from '../ComparisonCard/ComparisonCard';

const ComparedCards = ({ selectedCards, selectCard, makeComparison, removeComparison }) => {
  
  let comparedObject;
  if (selectedCards.length > 1) {
    comparedObject = makeComparison(selectedCards[0].location, selectedCards[1].location)
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
  )
}

export default ComparedCards;