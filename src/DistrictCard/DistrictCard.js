import React from 'react';
import './DistrictCard.css';

const DistrictCard = (props) => {

  const districtAnnualData = Object.keys(props.districtData.data).map(annualData => {
    const data = props.districtData.data[annualData];
    return (
        <li>{annualData}: {data}</li>
    )
  })
  return (
    <div className="district-card">
      <h1 className="district-name">{props.districtData.location}</h1>
      <h3>Yearly Progress</h3>
    <ul className="district-data"> 
      {districtAnnualData}
    </ul>
    </div>
  )
}

export default DistrictCard;