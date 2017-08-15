import React from "react";
import Controls from "./Controls";
import { DistrictCard } from "./DistrictCard";

export const DistrictContainer = props => {
  return (
    <div className="district-container">
      <DistrictCard foundData={props.foundData} />
    </div>
  );
};
