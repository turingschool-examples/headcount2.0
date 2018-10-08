import React from "react";
import checkIcon from "../../images/checked.svg";
import cancelIcon from "../../images/cancel.svg";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ location, stats, display, clicked, handleCardClick }) => {
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

  let borderToggle;
  clicked !== false
    ? (borderToggle = "lightskyblue")
    : (borderToggle = "black");

  return (
    <section
      style={{ border: `solid 4px ${borderToggle}` }}
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
  handleCardClick: PropTypes.func.isRequired,
  clicked: PropTypes.oneOfType([PropTypes.bool.isRequired, PropTypes.number])
};

export default Card;
