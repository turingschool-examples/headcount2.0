import React from "react";
import { DistrictCard } from "./DistrictCard";
import { ComparisonCard } from "./ComparisonCard";

export const ControlCards = ({ comparisonData, cardClick }) => {
  const controlCards = Object.keys(comparisonData).map((district, i) => {
    if (comparisonData[district].hasOwnProperty("location")) {
      return (
        <DistrictCard
          cardClick={cardClick}
          key={i}
          location={district}
          stats={comparisonData[district].stats}
        />
      );
    }
    return (
      <ComparisonCard
        key={Date.now()}
        comparisonData={comparisonData[district]}
      />
    );
  });
  return <div className="control-cards">{controlCards} </div>;
};
