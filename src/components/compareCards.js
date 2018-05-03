import React from 'react';
import Card from './Card';

const CompareCards = ({selectedCard, setSelectedCard}) => {
  if(selectedCard) {
    return <Card {...selectedCard} setSelectedCard={setSelectedCard} />
  } 
  return CompareCards;
}

export default CompareCards;