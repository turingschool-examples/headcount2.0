import React from "react";
import "./DistrictCard.css";

const DistrictCard = ({ districts }) => {
  return (
    <div className="each-card">
      <h1>{districts.location}</h1>
      {Object.keys(districts.stats).map((year, index) => {
        const average = districts.stats[year];
        return (
          <section
            className={average < 0.5 ? "below-five" : "above-five"}
            key={index}
          >
            {year}: {average}
          </section>
        );
      })}
    </div>
  );
};

export default DistrictCard;
