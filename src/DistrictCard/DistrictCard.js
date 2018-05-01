import React from 'react';

const DistrictCard = (districtData) => {

  const districtAnnualData = Object.keys(districtData.districtData.data).map(annualData => {
    const year = Object.keys(annualData)
    return (
        <li>{year[0]}: {annualData[year[0]]}</li>
    )
  })
  return (
    <div className="district-card">
      <h1>{districtData.districtData.location}</h1>
      <h3>Yearly Progress</h3>
    <ul> 
      {districtAnnualData}
    </ul>
    </div>
  )
}

export default DistrictCard;