import React from 'react';
import './CardContainer.css';
import DistrictCard from '../DistrictCard/DistrictCard'
import PropTypes from 'prop-types';


const CardContainer = ({ matchingDistricts, selectDistrict }) => {
  const districtNames = Object.keys(matchingDistricts);
  const districtCards = districtNames.map(district => {
    return <DistrictCard 
              key={matchingDistricts[district].key}
              district={matchingDistricts[district]} 
              selectDistrict={selectDistrict}
            />;
  });

  return (
    <div className="card-container">
      { districtCards }
    </div>
  );
}; 


CardContainer.propTypes = {
  matchingDistricts: PropTypes.object.isRequired
};

export default CardContainer;