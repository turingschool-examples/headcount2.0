import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';

const CardContainer = ({ matchingDistricts }) => {

  const districtNames = Object.keys(matchingDistricts)
  return (
    districtNames.map(district => {
      return <DistrictCard district={matchingDistricts[district]}/>
    })
  )
}

CardContainer.propTypes = {
  matchingDistricts: PropTypes.object.isRequired
}

export default CardContainer;