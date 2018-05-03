import React from 'react';
import Card from './Card';
import '../styles/CompareCards.css';

const CompareCards = ({selectedCards, setSelectedCard}) => {

  if(selectedCards.length > 0) {
    const comparedCards = selectedCards.map((card, index) => {
      return <Card {...card} key={index + 'district'} setSelectedCard={setSelectedCard} selectedCards={selectedCards} />
    });

    return (
      <div>
        {comparedCards}
      </div>
    );
  }
  return null
}

export default CompareCards;