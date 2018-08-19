import React from "react";
import "../CSS/DistrictCard.css";
import PropTypes from "prop-types";

export const DistrictCard = ({
  location,
  stats,
  clicked,
  selectCard,
  counter
}) => {
  return (
    <div
      onClick={() => selectCard(location)}
      className={clicked ? "district-card-clicked" + counter : "district-card"}
    >
      <h1 className="district-location">{location}</h1>
      <header className={clicked ? "year-header-show" : "year-header-hide"}>
        Year
      </header>
      <header className={clicked ? "avg-header-show" : "avg-header-hide"}>
        Avg
      </header>
      {Object.keys(stats).map((year, index) => {
        const avg = stats[year];
        return (
          <section
            className={clicked ? "stats-show" : "stats-hide"}
            key={index}
          >
            <p className="year">
              {year}
              ......
              <span className={avg < 0.5 ? "avg-low" : "avg-high"}>{avg}</span>
            </p>
          </section>
        );
      })}
      <p className={clicked ? "show-msg" : "hide-msg"}>Click to Remove</p>
    </div>
  );
};

const { string, shape, number, bool, func } = PropTypes;

DistrictCard.propTypes = {
  location: string,
  stats: shape({ year: number }),
  clicked: bool,
  selectCard: func,
  counter: number
};
