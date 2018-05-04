import React, { Component } from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import './CompareDistricts.css'

const CompareDistricts = (props) => {
  const firstCard =  (props.selectedDistricts[0] &&
    <DistrictCard districtData={props.selectedDistricts[0]} />
  )
  const secondCard =  (props.selectedDistricts[1] &&
    <DistrictCard districtData={props.selectedDistricts[1]} />
  )

  return (
    <div className='districts-compare'>
      {firstCard}
      {secondCard}
    </div>
  )
}


export default CompareDistricts


