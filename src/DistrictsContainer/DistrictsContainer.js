import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard'

const DistrictContainer = ({districts}) => {
  const allDistrictCards = Object.keys(districts).map(district => {
    return (
      <DistrictCard districtData={districts[district]}/> 
    )
  })
  return (
    <div>
      {allDistrictCards}
    </div>
  )
} 

export default DistrictContainer