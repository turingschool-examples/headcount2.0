import React from "react";
import DistrictCard from "./DistrictCard";
import ComparisonCard from "./ComparisonCard";

const ComparisonContainer = ({ selectedCards, districts, schoolData }) => {
  let firstCardSelected;
  let secondCardSelected;
  let comparisonCard;

  if (selectedCards[0]) {
    firstCardSelected = (
      <DistrictCard {...selectedCards[0]} districts={districts} />
    );
  }
  if (selectedCards[1]) {
    secondCardSelected = (
      <DistrictCard {...selectedCards[1]} districts={districts} />
    );
  }
  if (selectedCards.length > 1) {
    comparisonCard = (
      <ComparisonCard
        selectedCards={selectedCards}
        districts={districts}
        schoolData={schoolData}
      />
    );
  }
  return (
    <div>
      {firstCardSelected}
      {secondCardSelected}
      {comparisonCard}
    </div>
  );
};

export default ComparisonContainer;
