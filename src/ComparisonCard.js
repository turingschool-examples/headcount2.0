import React from 'react';

export const ComparisonCard = (props) => {
  const keys = Object.keys(props.comparisonData)
  return (
    <div>
      <h3>
      {keys[0]} AVG: {props.comparisonData[keys[0]]} 
      </h3>
      <h3>
      {keys[1]} AVG: {props.comparisonData[keys[1]]} 
      </h3>
      <h4>
        {props.comparisonData.compared}
      </h4>
    </div>
  );
};