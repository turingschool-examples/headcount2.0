import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './CardContainer.css';


const CardContainer = ( {displayData, dataSet} ) => {

  
  const cards = displayData.map(district => {
    return <Card 
            key={Date.now()}
            {...district} />
  })

  return(
    <div>
      <h3 className='cardContainerHeading'>{dataSet} data for each district is listed below when nothing is entered in the search field, otherwise, only districts that match the search criteria are listed.</h3>
      <section className='cardContainer-grid'>
        { cards }
      </section>
    </div>
  )
}

CardContainer.propTypes = {
  displayData: PropTypes.array.isRequired
}

export default CardContainer;