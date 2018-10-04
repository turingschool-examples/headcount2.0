import React from "react";
import PropTypes from "prop-types";
import checkIcon from "./checked.svg";
import cancelIcon from "./cancel.svg";
import "./Card.css";

const Card = ({ location, stats }) => {
  const years = Object.keys(stats);
  const cardData = years.map(year => {
    return (
      <div>
        <p className={stats[year] > 0.5 ? "green" : "red"} key={year}>
          <img
            className="icon"
            src={stats[year] > 0.5 ? checkIcon : cancelIcon}
          />
          {`${year} : ${stats[year]}`}
        </p>
      </div>
    );
  });

  return (
    <div className="card">
      <h3 className="school-name">{location}</h3>
      {cardData}
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default Card;
