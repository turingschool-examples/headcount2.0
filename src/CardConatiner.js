import React from 'react';
import Card from './Card.js';

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((currCard) => {
    return <Card cardInfo={props.data[currCard]} />

  })

  return(
    <div>
      { cards }
    </div>
  )
}

export default CardContainer;