import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData }) => {
  const renderedDistricts = Object.keys(districtData).map((district, key) => 
    <Card districtName={district}
          data={districtData[district].data}
          key={key}
    />
  )

  return(
    <div className='CardContainer'>
      {renderedDistricts}
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.shape({
    districtName: PropTypes.string,
    data: PropTypes.object,
    key: PropTypes.number
  }).isRequired
}

export default CardContainer;