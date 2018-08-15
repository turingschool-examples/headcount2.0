import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';

const DistrictList = ({ districts, searchedDistrict, addToCompare, cardsToCompare }) => {
  
  const districtCards = Object.keys(districts).map(district => {
    return <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare}/> 
  })

  const searchedCards = searchedDistrict.map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} />)

  const comparedCards = cardsToCompare.map(district => {
    return <DistrictCard location={district.location} stats={district.stats} />
  })

  if (searchedDistrict.length) {
    return(
      <div>
        {comparedCards}
        <div>
          {searchedCards}
        </div>
      </div>
    )
  }

  return(
    <div>
      {comparedCards}
        <div>
          {districtCards}
        </div>
    </div>
  )
}



export default DistrictList;