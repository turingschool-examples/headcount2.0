import React from 'react';
import Card from './Card';

const CompareCards = ({selectedCard}) => {
  if(selectedCard) {
    return <Card {...selectedCard} />
  } 
  return CompareCards;
}

export default CompareCards;