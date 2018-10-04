import React from "react";
import Card from "./Card";
import ComparedCard from "./ComparedCard";
import "./CompareCardContainer.css";

const CompareCardContainer = ({ comparedCards, comparedAvg }) => {
  return (
    <div className="compare-card-container">
      <Card key={0} {...comparedCards[0]} />
      <ComparedCard {...comparedAvg}  />
      <Card key={1} {...comparedCards[1]} />
    </div>
  );
};

export default CompareCardContainer;
