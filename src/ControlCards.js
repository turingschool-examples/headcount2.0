import React from "react";
import { DistrictCard } from "./DistrictCard";
import { ComparisonCard } from "./ComparisonCard";

export const ControlCards = ({ comparisonData }) => {
  const controlCards = Object.keys(comparisonData).map((district, i) => {
    if (comparisonData[district].hasOwnProperty("location")) {
      return (
        <DistrictCard
          key={i}
          location={district}
          stats={comparisonData[district].stats}
        />
      );
    }
    return <ComparisonCard comparisonData={comparisonData[district]} />;
  });
  return <div className="control-cards">{controlCards} </div>;
};
