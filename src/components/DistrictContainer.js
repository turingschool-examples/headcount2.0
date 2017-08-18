import React from "react";
import DistrictCard from "./DistrictCard";
import "../styles/DistrictRepository.css";

const DistrictContainer = props => {
  return (
    <div className="district-container">
      <div className="selected-cards">
        {props.selected.length > 0
          ? props.selected.map(card =>
              <DistrictCard
                location={card}
                data={props.fullData[card]}
                getData={props.getData}
                key={Math.random()}
                findDistrict={props.findDistrict}
              />
            )
          : null}
      </div>
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
