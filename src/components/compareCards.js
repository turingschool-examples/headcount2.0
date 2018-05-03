import React from 'react';
import Card from './Card';
import '../styles/CompareCards.css';

const CompareCards = ({selectedCard, setSelectedCard}) => {
  if(selectedCard) {
    return <Card {...selectedCard} setSelectedCard={setSelectedCard} />
  } 
  return CompareCards;
}

export default CompareCards;