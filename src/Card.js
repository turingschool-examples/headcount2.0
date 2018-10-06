import React from "react";
import PropTypes from "prop-types";
import checkIcon from "./images/checked.svg";
import cancelIcon from "./images/cancel.svg";
import "./Card.css";

const Card = ({ location, stats, display, handleCardClick }) => {
  const years = Object.keys(stats);
  const cardData = years.map(year => {
    return (
      <div key={year}>
        <p className={stats[year] > 0.5 ? "bold" : "light"}>
          <img
            className="icon"
            alt="check icon"
            src={stats[year] > 0.5 ? checkIcon : cancelIcon}
          />
          {`${year} : ${stats[year]}`}
        </p>
      </div>
    );
  });

  return (
    <section
      className={display ? "card" : "hide"}
      onClick={() => handleCardClick(location)}
    >
      <h3 className="school-name">{location}</h3>
      {cardData}
    </section>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  display: PropTypes.bool.isRequired,
  handleCardClick: PropTypes.func
};

export default Card;
