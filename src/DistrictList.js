import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';

const DistrictList = ({ districts, searchedDistrict, addToCompare, cardsToCompare, comparedObject }) => {
  
  const districtCards = Object.keys(districts).map(district => {
    return <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare}/> 
  })

  const searchedCards = searchedDistrict.map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare}/>)

  const comparedCards = cardsToCompare.map(district => {
    return <DistrictCard location={district.location} stats={district.stats} addToCompare={addToCompare}/>
  })

  const comparedData = Object.keys(comparedObject).map(key => {
    return <p>{comparedObject[key]}</p>
  })

  

  if (Object.keys(comparedObject).length) {
    return(
      <div>
        <section>
        <div>{comparedCards[0]}</div>
        <div className="averages">{comparedData}</div>
        <div>{comparedCards[1]}</div>
        </section>

        <div>{districtCards}</div>
      </div>
    )
  }

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