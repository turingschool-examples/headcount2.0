import React from "react";
import DistrictCard from "./DistrictCard";
import "../css/DistrictsContainer.css";
import PropTypes from "prop-types";

const DistrictsContainer = ({ districts, selectCards }) => {
  const districtCard = districts.map((district, index) => (
    <DistrictCard {...district} key={index} selectCards={selectCards} />
  ));
  return <div className="district-container">{districtCard}</div>;
};

DistrictsContainer.propTypes = {
  districts: PropTypes.array,
  selectCards: PropTypes.func
};

export default DistrictsContainer;
