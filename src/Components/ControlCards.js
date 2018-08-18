import React from "react";
import { ComparedDistrictCard } from "./ComparedDistrictCard";
import { ComparisonCard } from "./ComparisonCard";
import PropTypes from "prop-types";
import "../CSS/ControlCards.css";

export const ControlCards = ({
  comparisonData,
  selectCard,
  selectedDistricts
}) => {
  const controlCards = Object.keys(comparisonData).map((district, index) => {
    if (selectedDistricts.length === 2) {
      if (comparisonData[district].hasOwnProperty("location")) {
        return (
          <ComparedDistrictCard
            key={`compared ${index}`}
            selectCard={selectCard}
            location={district}
            stats={comparisonData[district].stats}
            index={index}
          />
        );
      }
      return (
        <ComparisonCard key={index} comparisonData={comparisonData[district]} />
      );
    }
  });
  return <div className="control-cards">{controlCards} </div>;
};

const { string, number, bool, shape, objectOf, func } = PropTypes;

ControlCards.propTypes = {
  comparisonData: objectOf(
    shape({
      location: string,
      stats: objectOf(number),
      clicked: bool
    })
    // comparisonData: objectOf(shape({
    //   compared: number
    // }))
  ),
  selectCard: func.isRequired
};
