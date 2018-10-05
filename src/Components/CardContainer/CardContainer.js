import React from 'react';
import Card from '../Card/Card';
import './cardcontainer.css'

const CardContainer = ({stats}) =>{

  const arrayOfDistricts = Object.keys(stats);

  const mappedCards = arrayOfDistricts.map(stat=> <Card {...stats[stat]} key={Date.now()}/>)
  console.log(mappedCards)
  return(
    <div className="card-container">
    {mappedCards}
    </div>
  )
}

export default CardContainer;
