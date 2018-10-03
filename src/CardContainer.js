import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

const CardContainer = ({ cards }) => {
  const schoolList = Object.keys(cards);
  const allCards = schoolList.map(school => (
    <Card key={school} {...cards[school]} />
  ));

  return <div>{allCards}</div>;
};

CardContainer.propTypes = {
  cards: PropTypes.object.isRequired
};

export default CardContainer;
