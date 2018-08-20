import React from "react";
import PropTypes from "prop-types";

const ComparisonCard = ({ selectedCards, schoolData }) => {
  const firstDistrict = selectedCards[0].location;
  const secondDistrict = selectedCards[1].location;
  return (
    <div>
      <h3>{firstDistrict}</h3>
      <p>{schoolData.findAverage(firstDistrict)}</p>
      <h3>
        {
          schoolData.compareDistrictAverages(firstDistrict, secondDistrict)
            .compared
        }
      </h3>
      <h3>{secondDistrict}</h3>
      <p>{schoolData.findAverage(secondDistrict)}</p>
    </div>
  );
};

ComparisonCard.propTypes = {
  selectedCards: PropTypes.array,
  schoolData: PropTypes.object
};

export default ComparisonCard;
