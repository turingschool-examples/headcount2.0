import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';
import '../css/DistrictContainer.css';

const DistrictContainer = ({ districts, toggleSelected }) => {
  let districtCards;

  districtCards = districts.map((district, i) => (
    <DistrictCard
      key={`${i}-${district.location}`}
      {...district}
      toggleSelected={toggleSelected}
    />
  ));

  return <div className="district-container">{districtCards}</div>;
};

DistrictContainer.propTypes = {
  districts: PropTypes.array.isRequired,
  toggleSelected: PropTypes.func.isRequired
};

export default DistrictContainer;
