import React from "react";
import DistrictRepository from "./helper";
import kindergarners from "./data/kindergartners_in_full_day_program";
import { DistrictCard } from "./DistrictCard";
import "./CSS/DistrictCardContainer.css";

this.districtRepository = new DistrictRepository(kindergarners);

export const DistrictCardContainer = ({ districts }) => {
  console.log(districts);
  const districtCard = districts.map((district, i) => {
    return <DistrictCard key={i} {...district} />;
  });
  return <div className="district-card-container"> {districtCard} </div>;
};
