import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';


const ComparisonContainer = ({ comparedDistricts, selectDistrict, compareDistrictAverages }) => {
  const districtNames = Object.keys(comparedDistricts)
  const districtCards = districtNames.map(district => {
    return <DistrictCard 
              key={comparedDistricts[district].key}
              district={comparedDistricts[district]} 
              selectDistrict={selectDistrict}
            />
  })

  if (districtNames.length === 2 ) {
    const comparison = compareDistrictAverages(districtNames[0], districtNames[1]);

    return (
      <div>
      { districtCards }
        <div className="comparison-card">
          <h2>{districtNames[0]}</h2>
          <h3>{comparison.compared}</h3>
          <h2>{districtNames[1]}</h2>
        </div>
      </div>
    )

  }
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