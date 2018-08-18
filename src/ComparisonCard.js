 import React from 'react';
import './ComparisonCard.css';

export const ComparisonCard = ({ comparisonData }) => {
  const keys = Object.keys(comparisonData)
  return (
    <div className="comparison-card">
      <div className="district-info">
        <h4>{keys[0]}</h4>
        <h4>{keys[1]}</h4>
      </div>
      <div className="district-info">
        <h4>{comparisonData[keys[0]]}</h4>
        <h4>{comparisonData[keys[1]]}</h4>
      </div>
      <h3 className="comparison-ratio">{comparisonData.compared}</h3>
    </div>
  );
};