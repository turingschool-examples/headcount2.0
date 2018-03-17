import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ComparisonCard.css';

const ComparisonCard = ({ comparisonCard, clearedComparison }) => {
  const [ cardAAvg, cardBAvg, comparedValue ] = Object.values(comparisonCard);
  const [ cardALocation, cardBLocation ] = Object.keys(comparisonCard);

  return (
    <article className='card selected'>
      <div className='card-a'>
        <h2>{cardALocation}:</h2>
        <p className='comparison-value'>Attendance: {(cardAAvg * 100).toFixed(1)}%</p>
      </div>
      <div className='comparison'>
        <h3>{(comparedValue * 100).toFixed(1)}%</h3>
        <p className='comparison-value'>to</p>
      </div>
      <div className='card-b'>
        <h2>{cardBLocation}:</h2>
        <p className='comparison-value'>Attendance: {(cardBAvg * 100).toFixed(1)}%</p>
      </div>
      <button onClick={clearedComparison}>Clear Comparison</button>
    </article>
  )
}

ComparisonCard.propTypes = {
  comparisonCard: PropTypes.object
}

export default ComparisonCard