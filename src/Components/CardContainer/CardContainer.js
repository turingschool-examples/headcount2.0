import React from 'react';
import Card from '../Card/Card'

const CardContainer = ({schoolStats}) => {
  const schoolCards = schoolStats.map(school => {
    return <Card {...school} />
  })
  return (
    <div>
      {schoolCards}
    </div>
  )
}

export default CardContainer;