import React from "react";
import PropTypes from "prop-types";
import "../CSS/ComparisonCard.css";

export const ComparisonCard = ({ comparisonData }) => {
  const comparisonKeys = Object.keys(comparisonData);
  const districtKeyOne = comparisonKeys[0];
  const districtKeyTwo = comparisonKeys[1];
  return (
    <div className="compare-data-card">
      <div className="district-title">
        Aggregate Avg.
        <p
          className={
            comparisonData[districtKeyOne] < comparisonData[districtKeyTwo]
              ? "district-low"
              : "district-high"
          }
        >
          {comparisonData[districtKeyOne]}
        </p>
      </div>
      <p className="comparison-value">{comparisonData[comparisonKeys[2]]}</p>
      <div className="district-title">
        Aggregate Avg.
        <p
          className={
            comparisonData[districtKeyOne] > comparisonData[districtKeyTwo]
              ? "district-low"
              : "district-high"
          }
        >
          {comparisonData[districtKeyTwo]}
        </p>
      </div>
    </div>
  );
};

const { shape, number } = PropTypes;

ComparisonCard.propTypes = {
  comparisonData: shape({ year: number })
};
