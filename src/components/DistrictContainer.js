import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';
import '../css/DistrictContainer.css';

const DistrictContainer = ({ districts }) => {
  let districtCards;

  districtCards = districts.map((district, i) => (
    <DistrictCard key={`${i}-${district.location}`} {...district} />
  ));

  return <div className="district-container">{districtCards}</div>;
};

DistrictContainer.propTypes = {
  districts: PropTypes.array.isRequired
};

export default DistrictContainer;
