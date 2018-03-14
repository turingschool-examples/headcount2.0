import React from 'react';
import Card from './Card';
import './styles/cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({data, selectCard}) => {

  const cardInfo = data.map(district => {
    return (
      <Card location={district.location} 
            data={district.data} 
            key={district.location} 
            selectCard={selectCard}
      />)
  })
  
  return (
    <div className="card-container">
      {cardInfo}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired,
  selectCard: PropTypes.func
}