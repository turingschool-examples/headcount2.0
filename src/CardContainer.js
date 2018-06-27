import React from 'react';
import Card from './Card.js';

const CardContainer = (cards) => {
  const container = cards.map(card => <Card {...card}
                                            key={card.id}
                                      />)
  return(
    <main>
      {container}
    </main>
  )

}


export default CardContainer;