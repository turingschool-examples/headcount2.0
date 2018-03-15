import React from 'react';
import Card from './Card';

const CardContainer = ({ schools }) => {
  // const schools = Object.keys(districts)
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
