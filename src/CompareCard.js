import React from "react";
import "./CompareCard.css";

const CompareCard = ({ cardData, districtRatio }) => {
  console.log(cardData);
  if (cardData.length === 2) {
    const { Location, Average } = cardData[0];
    // const { Location2, Average2 } = cardData[1];

    const Location2 = cardData[1].Location;
    const Average2 = cardData[1].Average;
    const ratio = districtRatio(Average, Average2);
    console.log(ratio);

    return (
      <div className="compare-card">
        <h3>
          {Location}
        </h3>
        <h4>
          {Average}
        </h4>
        <h4>
          {ratio}
        </h4>
        <h3>
          {Location2}
        </h3>
        <h4>
          {Average2}
        </h4>
      </div>
    );
  }
  return <div />;
};

export default CompareCard;
