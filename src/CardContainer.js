import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

const CardContainer = ({ schoolData, schoolNames }) => {

  const cards = schoolNames.map((schoolName, index) => {
    const cardData = schoolData[schoolName];
    return <Card cardData={cardData} key={index} />;
  });
  return cards;
};

export default CardContainer;