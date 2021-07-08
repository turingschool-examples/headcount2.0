import React from 'react';
import Card from './Card';

const CardContainer = ({cards}) => {
  
  const allCards = cards.map(card => <Card location={card.location} stats={card.stats}/>)
  return(
    <div className='card-container'>
     { allCards }
    </div>
  )
}

export default CardContainer;