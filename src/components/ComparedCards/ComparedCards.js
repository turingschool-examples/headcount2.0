import React from 'react';
import Card from '../Card/Card.js';
import './ComparedCards.css';
import ComparisonCard from '../ComparisonCard/ComparisonCard';
const ComparedCards = ({ selectedCards, selectCard, makeComparison }) => {
  let comparedObject;
  if (selectedCards.length > 1) {
    comparedObject = makeComparison(selectedCards[0].location, selectedCards[1].location);
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

    <div className="compared-cards">
      {selectedCardsArray}
      <ComparisonCard 
        comparedObject={comparedObject}/>
    </div>
  );
};

export default ComparedCards;