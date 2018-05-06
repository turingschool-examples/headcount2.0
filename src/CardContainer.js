import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

const CardContainer = ({ schoolData, schoolNames, updateComparedSchools }) => {

  const cards = schoolNames.map((schoolName, index) => {
    const cardData = schoolData[schoolName];
    return <Card 
      cardData={cardData} 
      key={index} 
      updateComparedSchools={updateComparedSchools}
    />;
  });
  return cards;
};

export default CardContainer;