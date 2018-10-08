import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";
import "./CardContainer.css";

const CardContainer = ({ cards, handleCardClick }) => {
  const schoolList = Object.keys(cards);
  const allCards = schoolList.map(school => (
    <Card 
      key={school} 
      {...cards[school]} 
      handleCardClick={handleCardClick} />
  ));
  return <div className="card-container">{allCards}</div>;
};

CardContainer.propTypes = {
  cards: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired
};

export default CardContainer;
