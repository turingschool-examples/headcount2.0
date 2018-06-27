import React from 'react';
import './compared-container.css';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';

const ComparedContainer = ({selectedCards, selectCard, comparisonCard}) => {
  const displaySelected = selectedCards.map(card => {
    return <Card {...card} selectCard={selectCard} />
  })
  
  return (
    <div className="compared-container" >
      {displaySelected}
      <CompareCard comparisonCard={comparisonCard} />
    </div>
  )
} 

export default ComparedContainer;