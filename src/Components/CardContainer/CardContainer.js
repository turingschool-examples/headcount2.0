import React from 'react';
import Card from '../Card/Card'
import './card-container.css'

const CardContainer = ({schoolStats}) => {
  const schoolCards = schoolStats.map((school, index) => {
    return <Card {...school} key={index} />
  })
  return (
    <div className="card-container">
      {schoolCards}
    </div>
  )
}

export default CardContainer;