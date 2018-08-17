import React from "react";
import DistrictCard from "./DistrictCard";
import "../css/DistrictsContainer.css";
import PropTypes from "prop-types";

const DistrictsContainer = ({ schoolData }) => {
  const districtCard = schoolData.map((district, index) => (
    <DistrictCard {...district} key={index} />
  ));
  return <div className="district-container">{districtCard}</div>;
};

DistrictsContainer.propTypes = {
  schoolData: PropTypes.array
};

export default DistrictsContainer;
