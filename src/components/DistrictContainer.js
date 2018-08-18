import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';
import '../css/DistrictContainer.css';

const DistrictContainer = ({ districts, toggleSelected, category }) => {
  let districtCards;

  districtCards = districts.map((district, i) => (
    <DistrictCard
      key={`${i}-${district.location}`}
      {...district}
      toggleSelected={toggleSelected}
      category={category}
    />
  ));

  return <div className="district-container">{districtCards}</div>;
};

DistrictContainer.propTypes = {
  districts: PropTypes.array.isRequired,
  toggleSelected: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
};

export default DistrictContainer;
