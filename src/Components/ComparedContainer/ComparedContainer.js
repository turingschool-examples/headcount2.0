import React from 'react';
import './compared-container.css';
import Card from '../Card/Card';

const ComparedContainer = ({selectedCards}) => {
  const displaySelected = selectedCards.map(card => {
    return <Card {...card} />
  })
  
  return (
    <div>
      {displaySelected}
    </div>
  )
} 

export default ComparedContainer;