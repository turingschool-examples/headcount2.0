import React from "react";
import ComparedCard from "./ComparedCard";
import ComparisonCard from "./ComparisonCard";
import BlankCard from "./BlankCard";
import PropTypes from "prop-types";
import "./CompareCardContainer.css";

const CompareCardContainer = ({
  comparedCards,
  comparedAvg,
  handleCardClick
}) => {
  const preparedCards = comparedCards.map(card => {
    return Object.keys(card).length ? (
      <ComparedCard
        key={card.location}
        {...card}
        handleCardClick={handleCardClick}
      />
    ) : (
      <BlankCard />
    );
  });

  return (
    <div className="compare-card-container">
      {preparedCards[0]}
      <ComparisonCard {...comparedAvg} />
      {preparedCards[1]}
    </div>
  );
};

export default CompareCardContainer;

CompareCardContainer.propTypes = {
  comparedCards: PropTypes.array.isRequired,
  comparedAvg: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired
};
