import React from 'react';
import './ComparisonCard.css';
import PropTypes from 'prop-types';

const ComparisonCard = ({comparedObject}) => {
  if (comparedObject) {
    const d1Name = Object.keys(comparedObject)[0];
    const d1Avg = comparedObject[Object.keys(comparedObject)[0]];
    const d2Name = Object.keys(comparedObject)[1];
    const d2Avg = comparedObject[Object.keys(comparedObject)[1]];
    const compareRatio = comparedObject.compared;
    
    return (
      <article className="compare-card">
        <h3>{d1Name}</h3>
        <h4 className="avg">{d1Avg}</h4>
        <h1>{compareRatio}</h1>
        <h4 className="avg bottom">{d2Avg}</h4>
        <h3 className="name-target">{d2Name}</h3>
      </article>
    );
  }
  
  return (
    <div></div>
  );
};

ComparisonCard.propTypes = {
  comparedObject: PropTypes.object
};

export default ComparisonCard;