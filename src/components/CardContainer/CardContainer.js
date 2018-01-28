import React from 'react';
import Card from '../Card/Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ districtData, selectCard, comparedCards }) => {
  const clicked = (district) => {
    const match = comparedCards.find( card => {
      return card.location === district.location;
    });
    return match ? "clicked" : "";
  };

  const renderedDistricts = Object.keys(districtData).map((district, key) => 
    <Card 
      clicked ={ clicked(districtData[district]) }
      districtName={district}
      data={districtData[district].data}
      id={district}
      selectCard={selectCard}
      key={key}
    />
  );

  return (
    <div className='CardContainer'>
      {renderedDistricts}
    </div>
  );
};

CardContainer.propTypes = {
  districtData: PropTypes.object.isRequired,
  selectCard: PropTypes.func.isRequired,
  comparedCards: PropTypes.array.isRequired
};

export default CardContainer;