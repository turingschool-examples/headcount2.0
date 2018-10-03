import React from "react";
import PropTypes from "prop-types";
import checkIcon from "./checked.svg";
import "./Card.css";

const Card = ({ location, stats }) => {
  const years = Object.keys(stats);
  const cardData = years.map(year => {
    if (stats[year] > 0.5) {
      return (
        <p className={"green"} key={year}>
        <img className="check-icon" src={checkIcon} />
          {` ${year} : ${stats[year]}`}
        </p>
      );
    } else {
      return (
        <p className={"red"} key={year}>
          {`${year} : ${stats[year]}`}
        </p>
      );
    }

    <p className={"green"} key={year}>
      {`${year} : ${stats[year]}`}
    </p>;
  });
  return (
    <div className="card">
      <h3 className="school-name">{location}</h3>
      <ul>{cardData}</ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default Card;
