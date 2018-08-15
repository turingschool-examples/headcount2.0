import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';

const DistrictList = ({ districts, searchedDistrict }) => {
  const districtCards = Object.keys(districts).map(district => {
    return <DistrictCard location={districts[district].location} stats={districts[district].stats} /> 
  })

  const districtCard = <DistrictCard location={searchedDistrict[0]} stats={searchedDistrict[1]} />

  if (searchedDistrict.length) {
    return(
      <div>
        {districtCard}
      </div>
    )
  }

  return(
    <div>
     {districtCards}
    </div>
  )
}



export default DistrictList;