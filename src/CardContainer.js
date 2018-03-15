import React from 'react';
import Card from './Card';
import './CardContainer.css'

const CardContainer = ({ schools }) => {
  const schoolCards = schools.map( (school, index) => {
    console.log(school)
    return <Card
      {...school}
      key={school.location}/>
  })
  return (
    <div className="card-container">{schoolCards}</div>
  )
}

export default CardContainer;
