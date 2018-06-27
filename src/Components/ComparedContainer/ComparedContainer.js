import React from 'react';
import './compared-container.css';
import Card from '../Card/Card';

const ComparedContainer = ({selectedCards, selectCard}) => {
  const displaySelected = selectedCards.map(card => {
    return <Card {...card} selectCard={selectCard} />
  })
  
  return (
    <div>
      {displaySelected}
    </div>
  )
} 

export default ComparedContainer;