import React from 'react';
import PropTypes from 'prop-types';

import DistrictCard from './DistrictCard';
import '../css/ComparisonContainer.css';

const ComparisonContainer = ({ selectedDistricts, toggleSelected }) => {
  let cardOne;
  let cardTwo;
  if (selectedDistricts[0]) {
    cardOne = (
      <DistrictCard {...selectedDistricts[0]} toggleSelected={toggleSelected} />
    );
  }
  if (selectedDistricts[1]) {
    cardTwo = (
      <DistrictCard {...selectedDistricts[1]} toggleSelected={toggleSelected} />
    );
  }
  return (
    <div className="comparison-container">
      {cardOne}
      {cardTwo}
    </div>
  );
};

ComparisonContainer.propTypes = {
  selectedDistricts: PropTypes.array.isRequired,
  toggleSelected: PropTypes.func.isRequired
};

export default ComparisonContainer;
