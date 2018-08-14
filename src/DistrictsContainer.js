import React from "react";
import DistrictCard from "./DistrictCard";
import "./DistrictsContainer.css";

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

export default DistrictsContainer;
