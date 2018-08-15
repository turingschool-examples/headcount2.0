import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';

const DistrictList = ({ districts, searchedDistrict }) => {
  
  const districtCards = Object.keys(districts).map(district => {
    return <DistrictCard location={districts[district].location} stats={districts[district].stats} /> 
  })

  const searchedCards = searchedDistrict.map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} />)

  if (searchedDistrict.length) {
    return(
      <div>
        {searchedCards}
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