import React from "react";
// import { DistrictContainer } from './DistrictContainer';
import "../styles/DistrictRepository.css";

const DistrictCard = ({ location, data, getData, findDistrict }) => {
  const stylez = {
    color: "white",
    backgroundColor: "green"
  };
  const underFive = {
    color: "white",
    backgroundColor: "red"
  };

  return (
    <div className="card" onClick={findDistrict}>
      <h3>
        {location}
      </h3>
      <ul className="card-list">
        {data.map((year, i) => {
          year.Data =
            typeof year.Data === "number"
              ? parseFloat(year.Data.toFixed(3))
              : 0;

          return (
            <li key={i} style={year.Data < 0.5 ? underFive : stylez}>
              {`${year.TimeFrame}: ${year.Data}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DistrictCard;
