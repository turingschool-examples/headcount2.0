import React from "react";
import DistrictCard from "./DistrictCard";
import "../styles/DistrictRepository.css";

const DistrictContainer = props => {
  return (
    <div className="district-container">
      {props.foundData.map(place =>
        <DistrictCard
          location={place}
          data={props.fullData[place]}
          getData={props.getData}
          key={Math.random()}
          findDistrict={props.findDistrict}
        />
      )}
    </div>
  );
};

export default DistrictContainer;
