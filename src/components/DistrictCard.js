import React from "react";
import "../css/DistrictCard.css";
import PropTypes from "prop-types";

const DistrictCard = ({ schoolData }) => {
  return (
    <div className="each-card">
      <h1>{schoolData.location}</h1>
      {Object.keys(schoolData.stats).map((year, index) => {
        const average = schoolData.stats[year];
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

DistrictCard.propTypes = {
  schoolData: PropTypes.object.isRequired
};

export default DistrictCard;
