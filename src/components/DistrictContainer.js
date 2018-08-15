import React from 'react';
import PropTypes from 'prop-types';
import DistrictCard from './DistrictCard';
import '../css/DistrictContainer.css';

const DistrictContainer = ({ districts, loading }) => {
  let districtCards;

  if (!loading) {
    districtCards = districts.map((district, i) => (
      <DistrictCard key={`${i}-${district.location}`} {...district} />
    ));
  }

  return <div className="district-container">{districtCards}</div>;
};

DistrictContainer.propTypes = {
  districts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default DistrictContainer;
