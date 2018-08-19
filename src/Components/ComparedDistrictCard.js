import React from "react";
import "../CSS/ComparedDistrictCard.css";
import PropTypes from "prop-types";

export const ComparedDistrictCard = ({ location, stats, index }) => {
  return (
    <div className={"compared-district-card" + index}>
      <h1 className="compared-location">{location}</h1>
      {Object.keys(stats).map((year, index) => {
        const avg = stats[year];
        return (
          <section
            key={`avgStats ${index}`}
            className={avg < 0.5 ? "year-red" : "year-black"}
          >
            {year}
            <span className={avg < 0.5 ? "year-red" : "year-black"}>
              ....
              {avg}
            </span>
          </section>
        );
      })}
      <p />
    </div>
  );
};

const { string, func, number, shape } = PropTypes;

ComparedDistrictCard.propTypes = {
  location: string,
  stats: shape({ year: number }),
  selectCard: func,
  index: number
};
