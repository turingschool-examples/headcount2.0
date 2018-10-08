import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './CardsContainer.css';


const CardsContainer = ({schoolData, highLightCard}) => {

  const listLocations = Object.keys(schoolData);
  const locationCards = listLocations.map((location, i) =>
    <Card 
      {...schoolData[location] } 
      key={Date.now() + i}
      highLightCard={highLightCard}
    />)
  return (
    <div className = "cards-container">
      { locationCards }
    </div>
  )
}

CardsContainer.propTypes = {
  schoolData: PropTypes.array
}


export default CardsContainer;