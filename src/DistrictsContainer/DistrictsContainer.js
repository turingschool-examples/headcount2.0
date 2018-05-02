import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './DistrictsContainer.css'

const DistrictContainer = ({districts}) => {
  const allDistrictCards = Object.keys(districts).map(district => {
    return (
      <DistrictCard districtData={districts[district]}/> 
    )
  })
  return (
    <div className="district-container">
      {allDistrictCards}
    </div>
  )
} 

export default DistrictContainer