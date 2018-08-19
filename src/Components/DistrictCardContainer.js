import React from "react";
import PropTypes from "prop-types";
import { DistrictCard } from "./DistrictCard";
import "../CSS/DistrictCardContainer.css";

export const DistrictCardContainer = ({ districts, selectCard }) => {
  let counter = 0;

  const districtCard = districts.map((district, index) => {
    if (district.clicked) {
      counter++;
    }
    return (
      <DistrictCard
        key={index}
        {...district}
        selectCard={selectCard}
        counter={counter}
      />
    );
  });
  return <div className="district-card-container"> {districtCard} </div>;
};

const { shape, string, number, func, arrayOf, bool } = PropTypes;

DistrictCardContainer.propTypes = {
  districts: arrayOf(
    shape({
      clicked: bool,
      location: string,
      stats: shape({ year: number })
    })
  ),
  selectCard: func
};
