import React from "react";
import "../css/DistrictCard.css";
import PropTypes from "prop-types";

const DistrictCard = ({ location, stats }) => {
  const districtYears = Object.keys(stats).map((year, index) => {
    const avg = stats[year];
    return (
      <article className={avg < 0.5 ? "below-five" : "above-five"} key={index}>
        {[year]}: {avg}
      </article>
    );
  });
  return (
    <div className="each-card">
      <h1>{location}</h1>
      <section>{districtYears}</section>
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object
};

export default DistrictCard;
