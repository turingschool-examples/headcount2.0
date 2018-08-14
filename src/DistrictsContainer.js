import React from "react";
import DistrictCard from "./DistrictCard";
import "./DistrictsContainer.css";

const DistrictsContainer = ({ districts }) => {
  const districtCard = Object.keys(districts.stats).map((district, index) => {
    return <DistrictCard districts={districts.stats[district]} key={index} />;
  });
  return <div className="district-container">{districtCard}</div>;
};

export default DistrictsContainer;
