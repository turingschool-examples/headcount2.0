import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';


const ComparisonContainer = ({ comparedDistricts }) => {

  const districtNames = Object.keys(comparedDistricts)
  return (
    districtNames.map(district => {
      return <DistrictCard district={comparedDistricts[district]} />
    })
  )
}

ComparisonContainer.propTypes = {
  comparedDistricts: PropTypes.object.isRequired
}

export default ComparisonContainer;