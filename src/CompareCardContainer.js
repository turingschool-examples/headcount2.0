import React from "react";
import Card from "./Card";

const CompareCardContainer = ({comparedCards}) => {
  console.log(comparedCards[0])
  return (
    <div className="compare-card-container">
      <Card key={0} {...comparedCards[0]}/>
      <Card key={1} {...comparedCards[1]}/>
    </div>
  );
};

export default CompareCardContainer;