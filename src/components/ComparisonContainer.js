import React from "react";
import DistrictCard from "./DistrictCard";
import ComparisonCard from "./ComparisonCard";

const ComparisonContainer = ({ selectedDistrict, schoolData }) => {
  let firstCardSelected;
  let secondCardSelected;
  let comparisonCard;

  if (selectedDistrict[0]) {
    firstCardSelected = (
      <DistrictCard {...selectedDistrict[0]} schoolData={schoolData} />
    );
  }
  if (selectedDistrict[1]) {
    secondCardSelected = (
      <DistrictCard {...selectedDistrict[1]} schoolData={schoolData} />
    );
  }
  if (selectedDistrict.length > 1) {
    comparisonCard = (
      <ComparisonCard
        selectedDistrict={selectedDistrict}
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
