import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ( {displayData} ) => {

  const cards = displayData.map(district => {
    return <Card 
            key={Date.now()} 
            district={district} />
  })

  return(
    <div>
      <h3>Data for Each District Contained Here</h3>
      <section>
        { cards }
      </section>
    </div>
  )
}

CardContainer.propTypes = {
  displaData: PropTypes.array.isRequired
}

export default CardContainer;