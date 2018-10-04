import React from 'react';
import Card from './Card';

const CardContainer = ({cards, compare, compareDistricts}) => {
  const allCards = cards.map((card, index) => 
    (<Card key={Date.now() + index} 
    location={card.location} 
    stats={card.stats} 
    compare={compare} 
    compareDistricts={compareDistricts}
    />)
  )

  return(
    <div className='card-container'>
     { allCards }
    </div>
  )
}

export default CardContainer;