import React from 'react';
import Card from './Card';
import '../styles/CompareCards.css';
import ComparisonCard from '../components/ComparisonCard';

const CompareCards = ({selectedCards, setSelectedCard, districts}) => {

  if(selectedCards.length > 0) {
    const comparedCards = selectedCards.map((card, index) => {
      return <Card {...card} key={index + 'district'} setSelectedCard={setSelectedCard} selectedCards={selectedCards} />
    });

    return (
      <div>
        <ComparisonCard 
          selectedCards={selectedCards}
          districts={districts}
        />
        {comparedCards}
      </div>
    );
  }
  return null
}

export default CompareCards;