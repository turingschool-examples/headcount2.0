import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ location, stats }) => {
  const years = Object.keys(stats);
  return (
    <div className="card">
      <h3 className="school-name">{location}</h3>
      <ul>
        {years.map(year => (
          <p className={stats[year] > 0.5 ? "green" : "red"} key={year}>
            {`${year} : ${stats[year]}`}
          </p>
        ))}
      </ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default Card;
