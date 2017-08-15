import React from "react";
import { DistrictContainer } from "./DistrictContainer";

export const DistrictCard = props => {
  if (props.foundData !== []) {
    let yearArray = [];
    let yearKeys;
    return (
      <div className="district-card">
        <h3>
          {props.foundData.location}
        </h3>
        <ul>
          {props.foundData.location}
        </ul>
      </div>
    );
  } else {
    return <div>YOOOO</div>;
  }
};
