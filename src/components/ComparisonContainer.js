import React from "react";
import DistrictCard from "./DistrictCard";
import ComparisonCard from "./ComparisonCard";
import "../css/ComparisonContainer.css";
import PropTypes from "prop-types";

const ComparisonContainer = ({
  selectedCards,
  districts,
  schoolData,
  selectCards
}) => {
  let firstCardSelected;
  let secondCardSelected;
  let comparisonCard;

  if (selectedCards[0]) {
    firstCardSelected = (
      <DistrictCard
        {...selectedCards[0]}
        districts={districts}
        selectCards={selectCards}
      />
    );
  }
  if (selectedCards[1]) {
    secondCardSelected = (
      <DistrictCard
        {...selectedCards[1]}
        districts={districts}
        selectCards={selectCards}
      />
    );
    if (selectedCards.length > 1) {
      comparisonCard = (
        <ComparisonCard
          selectedCards={selectedCards}
          districts={districts}
          schoolData={schoolData}
        />
      );
    }
  }
  return (
    <div className="comparison-container">
      {firstCardSelected}
      {comparisonCard}
      {secondCardSelected}
    </div>
  );
};

ComparisonContainer.propTypes = {
  selectedCards: PropTypes.array,
  districts: PropTypes.array,
  schoolData: PropTypes.object,
  selectCards: PropTypes.func,
  selected: PropTypes.bool
};

export default ComparisonContainer;
