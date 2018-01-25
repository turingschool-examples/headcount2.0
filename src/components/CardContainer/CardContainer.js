import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData, selectCard, key, clicked }) => {
 
  const renderedDistricts = Object.keys(districtData).map((district, key) => 
    <Card districtName={district}
          data={districtData[district].data}
          id={district}
          selectCard={selectCard}
          clicked={clicked}
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