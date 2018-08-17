import React from 'react';

export const ComparisonCard = (props) => {
  const keys = Object.keys(props.comparisonData)
  return (
    <div>
      <div>
        <h4>{keys[0]}</h4>
        <h4>{keys[1]}</h4>
      </div>
      <div>
        <h4>{props.comparisonData[keys[0]]}</h4>
        <h4>{props.comparisonData[keys[1]]}</h4>
      </div>
      <h3>{props.comparisonData.compared}</h3>
    </div>
  );
};