import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';

const CardContainer = (props) => {

  const districtCards = Object.keys(props).map((key, index) => {
    return (
      <Card key={index} district={props[key]} />
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

      