import React from "react";
import ComparedCard from "./ComparedCard";

const CompareCardContainer = ({comparedCards}) => {
  return (
    <div className="compare-card-container">
      <ComparedCard />
      <ComparedCard />
    </div>
  );
};

export default CompareCardContainer;



// const schoolList = Object.keys(cards);
// const allCards = schoolList.map(school => (
//   <Card key={school} {...cards[school]} handleCardClick={handleCardClick} />
// ));

//return <div className="card-container">{allCards}</div>;