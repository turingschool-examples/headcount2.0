import React from 'react';
import Card from '../Card/Card';

function CardContainer(props) {
  let allCities = props.data.findAllMatches().map( (city) => {
    return <Card {...city} />
  })

  return (
    <div>
      <div>Hi</div>
      {allCities}
    </div>

  )
}

export default CardContainer;