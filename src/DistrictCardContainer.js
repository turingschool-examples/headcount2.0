import React from "react";

import { DistrictCard } from "./DistrictCard";
import "./CSS/DistrictCardContainer.css";

export const DistrictCardContainer = ({ districts, selectCard }) => {
  const districtCard = districts.map((district, i) => {
    return <DistrictCard key={i} {...district} selectCard={selectCard} />;
  });
  return <div className="district-card-container"> {districtCard} </div>;
};

// const { shape, string, objectOf, number, func, object } = PropTypes;

// DistrictCardContainer.propTypes = {
//   location: PropTypes.array.isRequired
// };
