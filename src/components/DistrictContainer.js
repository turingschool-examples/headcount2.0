import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';

const DistrictContainer = ({ category }) => {
  let districts;

  if (category.stats) {
    districts = Object.keys(category.stats).map(districtKey => (
      <DistrictCard
        key={category.stats[districtKey].location}
        {...category.stats[districtKey]}
      />
    ));
  }

  return <div className="district-container">{districts}</div>;
};

DistrictContainer.propTypes = {
  category: PropTypes.object.isRequired
};

export default DistrictContainer;
