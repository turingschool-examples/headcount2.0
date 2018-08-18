import React from 'react';
import PropTypes from 'prop-types';

import DistrictCard from './DistrictCard';
import '../css/ComparisonContainer.css';
import ComparisonCard from './ComparisonCard';

const ComparisonContainer = ({
  selectedDistricts,
  toggleSelected,
  category
}) => {
  let cardOne;
  let cardTwo;
  let comparisonCard;

  if (selectedDistricts[0]) {
    cardOne = (
      <DistrictCard
        {...selectedDistricts[0]}
        toggleSelected={toggleSelected}
        category={category}
      />
    );
  }
  if (selectedDistricts[1]) {
    cardTwo = (
      <DistrictCard
        {...selectedDistricts[1]}
        toggleSelected={toggleSelected}
        category={category}
      />
    );
  }
  if (selectedDistricts.length > 1) {
    comparisonCard = (
      <ComparisonCard
        selectedDistricts={selectedDistricts}
        category={category}
      />
    );
  }

  return (
    <div className="comparison-container">
      {cardOne}
      {comparisonCard}
      {cardTwo}
    </div>
  );
};

ComparisonContainer.propTypes = {
  selectedDistricts: PropTypes.array.isRequired,
  toggleSelected: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
};

export default ComparisonContainer;
