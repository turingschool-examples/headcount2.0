import React from "react";
import PropTypes from "prop-types";
import checkIcon from "./images/checked.svg";
import cancelIcon from "./images/cancel.svg";
import "./ComparedCard.css";

const ComparedCard = ({ location, stats, handleCardClick }) => {
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
    <section className="compared-card" onClick={() => handleCardClick(location)}>
      <h3 className="school-name">{location}</h3>
      {cardData}
    </section>
  );
};

ComparedCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired,
};

export default ComparedCard;