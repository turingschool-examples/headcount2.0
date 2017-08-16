import React from "react";
import { DistrictContainer } from "./DistrictContainer";
import "../styles/DistrictRepository.css";

export const DistrictCard = ({ location, data, getData }) => {
  return (
    <div className="card">
      <h3>
        {location}
      </h3>
      <ul className="card-list">
        {data.map(year => {
          return (
            <li>
              {`${year.TimeFrame}: ${year.Data}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
