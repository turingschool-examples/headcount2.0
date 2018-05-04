import React from 'react';
// import '../styles/ComparisonCard.css';

const ComparisonCard = ({ selectedCards, districts }) => {
  if (selectedCards.length === 2) {
    const combinedAverage = (districts.findAverage(selectedCards[0].location) / districts.findAverage(selectedCards[1].location));
    const roundedAvg = Math.round(1000 * combinedAverage) / 1000;
    return <article className="comparisonCard card">
      {selectedCards[0].location}
      {districts.findAverage(selectedCards[0].location)}
      {roundedAvg}
      {selectedCards[1].location}
      {districts.findAverage(selectedCards[1].location)}
    </article>;
  }
  return null;
};

export default ComparisonCard;
