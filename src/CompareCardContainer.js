import React from "react";
import Card from "./Card";
import ComparedCard from "./ComparedCard";
import BlankCard from "./BlankCard";
import PropTypes from "prop-types";
import "./CompareCardContainer.css";

const CompareCardContainer = ({ comparedCards, comparedAvg }) => {
  const preparedCards = comparedCards.map(card => {
    return Object.keys(card).length 
      ?  <Card key={card.location} {...card} />
      :  <BlankCard />
  });

  return (
    <div className="compare-card-container">
      {preparedCards[0]}
      <ComparedCard {...comparedAvg} />
      {preparedCards[1]}
    </div>
  );
}

export default CompareCardContainer;

CompareCardContainer.propTypes = {
  comparedCards: PropTypes.array.isRequired,
  comparedAvg: PropTypes.object.isRequired
};
