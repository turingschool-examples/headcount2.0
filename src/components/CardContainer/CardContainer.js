import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';

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

export default CardContainer;