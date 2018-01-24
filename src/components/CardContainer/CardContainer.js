import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ({ districtData }) => {
  const renderedDistricts = Object.keys(districtData).map((district, key) => 
    <Card districtName={district}
          data={districtData[district].data}
          key={key}
    />
  )

  return(
    <div>
      {renderedDistricts}
    </div>
  )
}

export default CardContainer;