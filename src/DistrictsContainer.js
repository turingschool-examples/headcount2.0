import React from "react";
import DistrictCard from "./DistrictCard";

const DistrictsContainer = ({ districts }) => {
  const districtCard = Object.keys(districts.stats).map((district, index) => {
    return <DistrictCard districts={districts.stats[district]} key={index} />;
  });
  return <div>{districtCard}</div>;
};

export default DistrictsContainer;
