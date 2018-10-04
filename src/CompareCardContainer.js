import React from "react";
import Card from "./Card";
import "./CompareCardContainer.css";

const CompareCardContainer = ({comparedCards, comparedAvg}) => {
  
  return (
    <div className="compare-card-container">
      <Card key={0} {...comparedCards[0]}/>
      <section className="card-comparison">
        <h3>average: {comparedAvg[comparedCards[0].location]}</h3>
        <h3>average: {comparedAvg[comparedCards[1].location]}</h3>
        <h3>compared average: {comparedAvg.compared}</h3>
      </section>
      <Card key={1} {...comparedCards[1]}/>
    </div>
  );
};

export default CompareCardContainer;