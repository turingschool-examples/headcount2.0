import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ( {displayData} ) => {

  const cards = displayData.map(district => {
    return <Card 
            key={Date.now()} 
            {...district} />
  })

  return(
    <div className='cardContainerHeading'>
      <h3>Data for Each District Contained Here</h3>
      <section className='cardContainer-grid'>
        { cards }
      </section>
    </div>
  )
}

CardContainer.propTypes = {
  displaData: PropTypes.array.isRequired
}

export default CardContainer;