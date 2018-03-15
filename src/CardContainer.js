import React from 'react';
import Card from './Card';
import './styles/cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({data, selectCard, deselectCard, selectedCards}) => {

  const cardInfo = data.map(district => {
    let result = 'card';
    
    selectedCards.forEach(card =>  {
       if( district.location === card.location) {
        result = 'card clicked'
      } 
    })


    return (
      <Card location={district.location} 
            data={district.data} 
            key={district.location} 
            selectCard={selectCard}
            deselectCard={deselectCard}
            className={result}
      />)
  })
  
  return (
    <div className="card-container">
      {cardInfo}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array,
  selectCard: PropTypes.func,
  deselectCard: PropTypes.func,
  selectedCards: PropTypes.array
}