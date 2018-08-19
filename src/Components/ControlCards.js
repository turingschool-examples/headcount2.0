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
      return comparisonData[district].hasOwnProperty("location") ? (
        <ComparedDistrictCard
          key={`compared ${index}`}
          selectCard={selectCard}
          location={district}
          stats={comparisonData[district].stats}
          index={index}
        />
      ) : (
        <ComparisonCard key={index} comparisonData={comparisonData[district]} />
      );
    }
  });
  return <div className="control-cards">{controlCards} </div>;
};

const { string, number, bool, shape, objectOf, func, arrayOf } = PropTypes;

ControlCards.propTypes = {
  comparisonData: objectOf(
    shape({
      clicked: bool,
      location: string,
      stats: shape({ year: number })
    })
  ),
  selectedDistricts: arrayOf(
    shape({
      clicked: bool,
      location: string,
      stats: shape({ year: number })
    })
  ),
  selectCard: func
};
