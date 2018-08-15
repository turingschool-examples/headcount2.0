import React from "react";
import PropTypes from "prop-types";
import { DistrictCard } from "./DistrictCard";
import "../CSS/DistrictCardContainer.css";

export const DistrictCardContainer = ({ districts, selectCard }) => {
  const districtCard = districts.map((district, i) => {
    return <DistrictCard key={i} {...district} selectCard={selectCard} />;
  });
  return <div className="district-card-container"> {districtCard} </div>;
};

const { shape, string, objectOf, number, func, object, array } = PropTypes;

// DistrictCardContainer.propTypes = {
//   districts: array.isRequired,
//   selectCard: PropTypes.func
// };
