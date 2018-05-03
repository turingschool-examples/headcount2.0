import React, { Component } from 'react';
import Card from './Card';

const CardContainer = ({schoolObj}) => {
  const keys = Object.keys(schoolObj);
  const cards = keys.map((key, index) => {
    return <Card data={schoolObj[key]}/>
  })
 return cards;

}

export default CardContainer;