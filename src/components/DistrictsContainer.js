import React from "react";
import DistrictCard from "./DistrictCard";
import "../css/DistrictsContainer.css";
import PropTypes from "prop-types";

const DistrictsContainer = ({ schoolData, selectCards }) => {
  const districtCard = schoolData.map((district, index) => (
    <DistrictCard {...district} key={index} selectCards={selectCards} />
  ));
  return <div className="district-container">{districtCard}</div>;
};

DistrictsContainer.propTypes = {
  schoolData: PropTypes.array
};

export default DistrictsContainer;
