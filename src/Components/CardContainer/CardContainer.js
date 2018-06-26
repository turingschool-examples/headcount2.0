import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({schoolStats}) => {
  const schoolCards = schoolStats.map((school, index) => {
    return <Card {...school} key={index} />
  })
  return (
    <div>
      {schoolCards}
    </div>
  )
}

export default CardContainer;