import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({stats}) =>{

  const arrayOfDistricts = Object.keys(stats);

  const mappedCards = arrayOfDistricts.map(stat=> <Card {...stats[stat]} key={Date.now()}/>)
  console.log(mappedCards)
  return(
    <div>
    {mappedCards}
    </div>
  )
}

export default CardContainer;
