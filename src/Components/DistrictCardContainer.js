import React from "react";
import PropTypes from "prop-types";
import { DistrictCard } from "./DistrictCard";
import "../CSS/DistrictCardContainer.css";

export const DistrictCardContainer = ({ districts, selectCard }) => {
  let counter = 0;

  const districtCard = districts.map((district, i) => {
    district.clicked ? counter++ : false;
    return (
      <DistrictCard
        key={i}
        {...district}
        selectCard={selectCard}
        counter={counter}
      />
    );
  });
  return <div className="district-card-container"> {districtCard} </div>;
};

const { shape, string, objectOf, number, func, arrayOf, bool } = PropTypes;

DistrictCardContainer.propTypes = {
  districts: arrayOf(
    shape({
      clicked: bool.isRequired,
      location: string,
      stats: objectOf(number)
    })
  ),
  selectCard: func.isRequired
};
