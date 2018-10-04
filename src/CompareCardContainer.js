import React from "react";
import Card from "./Card";
import ComparedCard from "./ComparedCard";
import BlankCard from './BlankCard'
import PropTypes from "prop-types";
import "./CompareCardContainer.css";

const CompareCardContainer = ({ comparedCards, comparedAvg }) => {
  if (
    !Object.keys(comparedCards[0]).length ||
    !Object.keys(comparedCards[1]).length
  ) {
    return (
      <div className="compare-card-container">
        <BlankCard />
        <ComparedCard {...comparedAvg} />
        <BlankCard />
      </div>
    );
  } else {
    return (
      <div className="compare-card-container">
        <Card key={0} {...comparedCards[0]} />
        <ComparedCard {...comparedAvg} />
        <Card key={1} {...comparedCards[1]} />
      </div>
    );
  }
};
export default CompareCardContainer;

CompareCardContainer.propTypes = {
  comparedCards: PropTypes.array.isRequired,
  comparedAvg: PropTypes.object.isRequired
};
