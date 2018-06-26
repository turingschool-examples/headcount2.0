import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'

const CardContainer = props => {
  return (
    props.matchingDistricts.map(district => {
      return <DistrictCard location={props.location} stats={props.stats}/>
      
    })

    )
}

export default CardContainer;