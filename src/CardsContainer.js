import React from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = ({schoolData}) => {

  const listLocations = Object.keys(schoolData);
  const locationCards = listLocations.map((location, i) =>
    <Card 
      {...schoolData[location] } key={Date.now() + i}
    />)
  return (
    <div className = "cards-container">
      { locationCards }
    </div>
  )
}


export default CardsContainer;