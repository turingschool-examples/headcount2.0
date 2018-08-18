import React from "react";

const ComparisonCard = ({ selectedCards, schoolData }) => {
  const firstDistrict = selectedCards[0].location;
  const secondDistrict = selectedCards[1].location;
  return (
    <div>
      <h3>{firstDistrict}</h3>
      <p>{schoolData.findAverage(firstDistrict)}</p>
      {/* <h3>
        {schoolData.compareDistrictAverages(firstDistrict, secondDistrict)}
      </h3> */}
      <h3>{secondDistrict}</h3>
      <p>{schoolData.findAverage(secondDistrict)}</p>
    </div>
  );
};

export default ComparisonCard;
