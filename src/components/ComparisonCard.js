import React from "react";

const ComparisonCard = ({ selectedDistrict }) => {
  const firstDistrict = selectedDistrict[0].location;
  const secondDistrict = selectedDistrict[1].location;
  return (
    <div>
      {/* <h3>{firstDistrict}</h3>
      <p>{comparedData.findAvg(firstDistrict)}</p>
      <h3>
        {comparedData.compareDistricAverages(firstDistrict, secondDistrict)}
      </h3>
      <h3>{secondDistrict}</h3>
      <p>{comparedData.findAvg(secondDistrict)}</p> */}
    </div>
  );
};

export default ComparisonCard;
