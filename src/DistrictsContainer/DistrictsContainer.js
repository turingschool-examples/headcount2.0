import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './DistrictsContainer.css';
import PropTypes from 'prop-types';

const DistrictContainer = ({districts}) => {
  const allDistrictCards = Object.keys(districts).map((district, index) => {
    return (
      <DistrictCard 
        key={`district${index}`}
        districtData={districts[district]}
      />  
    )
  })
  return (
    <div className="district-container">
      {allDistrictCards}
    </div>
  )
} 

DistrictContainer.propTypes = {
   districts: PropTypes.objectOf(PropTypes.object)
}

export default DistrictContainer