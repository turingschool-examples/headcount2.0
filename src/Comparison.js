import React from "react";
import SchoolCard from "./SchoolCard";
import CompareCard from "./CompareCard";

const Comparison = ({ cardData, findAverage, clickedCard, districtRatio }) => {
  // console.log(cardData);

  const schoolCards = cardData.map((school, i) =>
    <SchoolCard
      data={school}
      key={i}
      findAverage={findAverage}
      clickedCard={clickedCard}
    />
  );

  return (
    <div className="compare-cards">
      {schoolCards}
      <CompareCard cardData={cardData} districtRatio={districtRatio} />
    </div>
  );
};

export default Comparison;
