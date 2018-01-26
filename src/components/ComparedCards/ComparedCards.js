import React from 'react';
import Card from '../Card/Card.js';
import './ComparedCards.css';

const ComparedCards = ({ selectedCards, selectCard }) => {
  const selectedCardsArray = selectedCards.map((district, key) => 
    <Card districtName={district.location}
          data={district.data}
          id={district.location}
          selectCard={selectCard}
          key={key}
    />)
  return (
    <div className="compared-cards">
      {selectedCardsArray}
    </div>
  )
}

export default ComparedCards;