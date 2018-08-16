import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';
import '../css/DistrictContainer.css';

const DistrictContainer = ({ districts, addSelected }) => {
  let districtCards;

  districtCards = districts.map((district, i) => (
    <DistrictCard
      key={`${i}-${district.location}`}
      {...district}
      addSelected={addSelected}
    />
  ));

  return <div className="district-container">{districtCards}</div>;
};

DistrictContainer.propTypes = {
  districts: PropTypes.array.isRequired,
  addSelected: PropTypes.func.isRequired
};

export default DistrictContainer;
