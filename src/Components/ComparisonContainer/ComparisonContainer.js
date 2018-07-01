import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';


const ComparisonContainer = ({ comparedDistricts, selectDistrict }) => {
  const districtNames = Object.keys(comparedDistricts)
  const districtCards = districtNames.map(district => {
    return <DistrictCard 
              key={comparedDistricts[district].key}
              district={comparedDistricts[district]} 
              selectDistrict={selectDistrict}
            />
  })

  return (
    <div className="comparison-container">
      { districtCards }
    </div>
  )
} 


ComparisonContainer.propTypes = {
  comparedDistricts: PropTypes.object.isRequired
}

export default ComparisonContainer;