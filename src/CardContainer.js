import React from 'react';
import SchoolCard from './SchoolCard'

const CardContainer = ({cards}) => {
  const schoolCards = Object.keys(cards).map(card => <SchoolCard location={card} data={cards[card]} />
  // console.log(cards)
  )
  return(
    <div>
      {schoolCards}
    </div>
  )
}


export default CardContainer;