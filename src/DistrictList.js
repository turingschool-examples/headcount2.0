import React from 'react';
import DistrictCard from './DistrictCard';

const DistrictList = ({ districts }) => {
  const districtCards = Object.keys(districts).map(district => {
    return <DistrictCard location={districts[district].location} stats={districts[district].stats}/> 
  })
  return(
    <div>
     {districtCards}
    </div>
  )
}



export default DistrictList;