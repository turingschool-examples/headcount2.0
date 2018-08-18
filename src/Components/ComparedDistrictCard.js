import React from "react";
import "../CSS/ComparedDistrictCard.css";
import PropTypes from "prop-types";

export const ComparedDistrictCard = ({ location, stats, index }) => {
  return (
    <div className={"compared-district-card" + index}>
      <h1 className="compared-location">{location}</h1>
      {Object.keys(stats).map((year, i) => {
        const avg = stats[year];
        return (
          <section
            key={`avgStats ${i}`}
            className={avg < 0.5 ? "year-red" : "year-black"}
            key={i}
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

const { string, objectOf, func, number } = PropTypes;

ComparedDistrictCard.propTypes = {
  location: string,
  stats: objectOf(number),
  selectCard: func.isRequired
};
