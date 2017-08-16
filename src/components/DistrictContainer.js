import React from "react";
import Controls from "./Controls";
import { DistrictCard } from "./DistrictCard";
import "../styles/DistrictRepository.css";

export const DistrictContainer = ({
  location,
  fullData,
  foundData,
  getData
}) => {
  return (
    <div className="district-container">
      {foundData.map(place =>
        <DistrictCard
          location={location}
          data={fullData[place]}
          getData={getData}
        />
      )}
    </div>
  );
};
