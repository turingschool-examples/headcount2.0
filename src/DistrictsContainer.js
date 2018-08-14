import React from "react";
import { DistrictCard } from "./DistrictCard";
import DistrictRepository from "./helper";
import kinderData from "./data/kindergartners_in_full_day_program";

const DistrictsContainer = ({ districts }) => {
  const districtCard = districts.map((district, index) => {
    return <DistrictCard {...district} key={index} />;
  });
  return <div>{districtCard}</div>;
};

export default DistrictsContainer;
