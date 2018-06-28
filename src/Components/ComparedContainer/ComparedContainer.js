import React from 'react';
import './compared-container.css';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';

const ComparedContainer = ({selectedCards, selectCard, districtMethods}) => {
  const displaySelected = selectedCards.map((card, index) => {
    const id = `card${index}`
    return <Card {...card} selectCard={selectCard} id={id} key={index} />
  })
  
  return (
    <div className="compared-container" >
      {displaySelected}
      <CompareCard districtMethods={districtMethods} selectedCards={selectedCards} />
    </div>
  )
} 

export default ComparedContainer;