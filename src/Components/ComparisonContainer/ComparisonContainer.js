import React from 'react';
import './ComparisonContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';


const ComparisonContainer = ({ comparedDistricts, selectDistrict, compareDistrictAverages, findAverage }) => {
  const districtNames = Object.keys(comparedDistricts)
  const districtCards = districtNames.map(district => {
    return <DistrictCard 
              key={comparedDistricts[district].key}
              district={comparedDistricts[district]} 
              selectDistrict={selectDistrict}
            />;
  });

  if (districtNames.length === 2 ) {
    const comparison = compareDistrictAverages(districtNames[0], districtNames[1]);

    return (
      <div className='comparison-container'>
      { districtCards }
        <div className='comparison-card'>
          <h2>{districtNames[0]}:</h2>
          <p className='district-average'>{findAverage(districtNames[0])}</p>
          <h3 className='comparison-figure'>{comparison.compared}</h3>
          <p className='district-average'>{findAverage(districtNames[1])}</p>
          <h2>{districtNames[1]}:</h2>
        </div>
      </div>
    );

  }
  return (
    <div className="comparison-container">
      { districtCards }
    </div>
  );
}; 


ComparisonContainer.propTypes = {
  comparedDistricts: PropTypes.object.isRequired
};

export default ComparisonContainer;