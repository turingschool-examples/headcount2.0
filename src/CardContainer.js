import React from 'react';
import Card from './Card';

const CardContainer = ({ schools }) => {
  const schoolCards = schools.map( (school) => {
    console.log(school)
    return <Card 
      {...school}
      key={school.location}/>
  })
  return (
    <div>{schoolCards}</div>
  )
}

export default CardContainer;
