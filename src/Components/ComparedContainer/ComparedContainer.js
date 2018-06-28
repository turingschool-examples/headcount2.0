import React from 'react';
import './compared-container.css';
import Card from '../Card/Card';
import CompareCard from '../CompareCard/CompareCard';

const ComparedContainer = ({selectedCards, selectCard, districtMethods}) => {
  const displaySelected = selectedCards.map((card, index) => {
    return <Card {...card} selectCard={selectCard} key={index} />
  })
  
  return (
    <div className="compared-container" >
      {displaySelected}
      <CompareCard districtMethods={districtMethods} selectedCards={selectedCards} className="compare-card" />
    </div>
  )
} 

export default ComparedContainer;