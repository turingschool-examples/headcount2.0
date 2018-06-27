import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'

const CardContainer = ({ matchingDistricts }) => {
  const districtNames = Object.keys(matchingDistricts)
  return (
    districtNames.map(district => {
      return <DistrictCard district={matchingDistricts[district]}/>
    })

    )
}

export default CardContainer;