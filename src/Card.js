import React, { Component } from "react";
import "./Card.css";

const Card = ({ location, stats }) => {
  const years = Object.keys(stats);
  return (
    <div>
      <h1>{location}</h1>
      <p>{years.map(year => <p key={year}>{stats[year]}</p>)}</p>
    </div>
  );
};

export default Card;
