import React from "react";
import DistrictCard from "./DistrictCard";
import "./DistrictsContainer.css";
import PropTypes from "prop-types";

const DistrictsContainer = ({ schoolData }) => {
  let districtCard;
  if (schoolData.stats) {
    districtCard = Object.keys(schoolData.stats).map((district, index) => {
      return (
        <DistrictCard schoolData={schoolData.stats[district]} key={index} />
      );
    });
  }
  return <div className="district-container">{districtCard}</div>;
};

DistrictsContainer.propTypes = {
  schoolData: PropTypes.object.isRequired
};

export default DistrictsContainer;
