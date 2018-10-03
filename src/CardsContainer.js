import React from 'react';
import Card from './Card'

const CardsContainer = ({schoolData}) => {

  const listLocations = Object.keys(schoolData);
  const locationCards = listLocations.map(location => 
    <Card {...schoolData[location] }/>)
  return (
    <div>
      { locationCards }
    </div>
  )
}


export default CardsContainer;