import React from "react";

const DistrictCard = ({ districts }) => {
  return (
    <div>
      <h1>{districts.location}</h1>
      {Object.keys(districts.stats).map((year, index) => {
        return (
          <section key={index}>
            {year}: {districts.stats[year]}
          </section>
        );
      })}
    </div>
  );
};

export default DistrictCard;
