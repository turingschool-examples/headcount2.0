import React from 'react';

const DistrictCard = (props) => {

  const districtAnnualData = Object.keys(props.districtData.data).map(annualData => {
    const data = props.districtData.data[annualData];
    return (
        <li>{annualData}: {data}</li>
    )
  })
  return (
    <div className="district-card">
      <h1>{props.districtData.location}</h1>
      <h3>Yearly Progress</h3>
    <ul> 
      {districtAnnualData}
    </ul>
    </div>
  )
}

export default DistrictCard;