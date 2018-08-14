import React from "react";

export const ComparisonCard = ({ comparisonData }) => {
  const comparisonKeys = Object.keys(comparisonData);
  const districtKeyOne = comparisonKeys[0];
  const districtKeyTwo = comparisonKeys[1];
  return (
    <div>
      <p>
        {comparisonKeys[0]} :<span> {comparisonData[districtKeyOne]}</span>
      </p>
      <container>
        ----
        {comparisonData[comparisonKeys[2]]}
        ----
      </container>
      <p>
        {comparisonKeys[1]} :<span> {comparisonData[districtKeyTwo]}</span>
      </p>
    </div>
  );
};
