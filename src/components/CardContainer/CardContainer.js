import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData, selectCard }) => {
  const renderedDistricts = Object.keys(districtData).map((district, key) => 
    <Card districtName={district}
          data={districtData[district].data}
          key={district}
          selectCard={selectCard}
    />
  )

  return(
    <div className='CardContainer'>
      {renderedDistricts}
    </div>
  )
}

CardContainer.propTypes = {
  districtData: PropTypes.object.isRequired
}

export default CardContainer;