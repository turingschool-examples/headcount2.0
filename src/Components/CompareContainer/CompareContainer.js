import React from 'react';
import './CompareContainer.css';
import PropTypes from 'prop-types';

const CompareContainer = ({matchedCards}) => {
  const matchedCardKeys = Object.keys(matchedCards);
  const matchedCardValues = Object.values(matchedCards);

  return (
    <div className='card'>
      <div className='location1'>
        <h3 className='compared-title'>{matchedCardKeys[0]}</h3>
        <h5 
          className={`lessThan1 ${matchedCardValues[0] > 0.5 ? 'greaterThan1' : 'lessThan1'}`}>
          {matchedCardValues[0]}
        </h5>
      </div>
      <h1 className='compared-value'>{matchedCardValues[2]}</h1>
      <div className='location2'>
        <h3 className='compared-title'>{matchedCardKeys[1]}</h3>
        <h5 
          className={`lessThan1 ${matchedCardValues[1] > 0.5 ? 'greaterThan1' : 'lessThan1'}`}>
          {matchedCardValues[1]}
        </h5>
      </div>
    </div>
  ); 
};

CompareContainer.propTypes = {
  matchedCards: PropTypes.object
};


export default CompareContainer;