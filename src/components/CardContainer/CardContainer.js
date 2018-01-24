import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

function CardContainer(props) {
  let allCities = props.data.findAllMatches().map( (city) => {
    return <Card {...city} />
  })

  return (
    <div className='card-container'>
      {allCities}
    </div>

  )
}

export default CardContainer;