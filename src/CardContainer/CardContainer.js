import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({districtsData}) => {
  const districtCards = Object.keys(districtsData).map((key, index) => {
    return (
      <Card key={index} district={districtsData[key]} />
    )
  });

  return(
    <div>
      {districtCards}
    </div>
  )
}

CardContainer.propTypes = {
  districtsData: PropTypes.object
}

export default CardContainer;

      