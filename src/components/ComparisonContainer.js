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
  let hiddenCard;

  const selectedCards = selectedDistricts.length > 0;

  if (selectedDistricts[0]) {
    hiddenCard = (
      <div style={{ opacity: 0 }}>
        <DistrictCard
          {...selectedDistricts[0]}
          toggleSelected={toggleSelected}
          category={category}
          selectedCards={selectedCards}
        />
      </div>
    );
    cardOne = (
      <DistrictCard
        {...selectedDistricts[0]}
        toggleSelected={toggleSelected}
        category={category}
        selectedCards={selectedCards}
      />
    );
  }
  if (selectedDistricts[1]) {
    cardTwo = (
      <DistrictCard
        {...selectedDistricts[1]}
        toggleSelected={toggleSelected}
        category={category}
        selectedCards={selectedCards}
      />
    );
    comparisonCard = (
      <ComparisonCard
        selectedDistricts={selectedDistricts}
        category={category}
        selectedCards={selectedCards}
      />
    );
  }

  return (
    <div className="comparison-container">
      {hiddenCard}
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
