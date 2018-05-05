import React from 'react';
import '../styles/ComparisonCard.css';

const ComparisonCard = ({ selectedCards, districts }) => {
  if (selectedCards.length === 2) {
    const combinedAverage = (districts.findAverage(selectedCards[0].location) / districts.findAverage(selectedCards[1].location));
    const roundedAvg = Math.round(1000 * combinedAverage) / 1000;
    return <article className="comparisonCard card">
      <div>
        <h2>{selectedCards[0].location}</h2>
        <hr />
        <h3>{districts.findAverage(selectedCards[0].location)}</h3>
      </div>
      <div>
        <h4>{'<'} + {roundedAvg} {'>'}</h4>
      </div>
      <div>
        <h2>{selectedCards[1].location}</h2>
        <hr />
        <h3>{districts.findAverage(selectedCards[1].location)}</h3>
      </div>
    </article>;
  }
  return null;
};

export default ComparisonCard;
