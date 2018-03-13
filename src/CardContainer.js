import React from 'react';
import {Card} from './Card';
import './styles/cardContainer.css';
import PropTypes from 'prop-types'

export const CardContainer = ({data}) => {

  const cardInfo = data.map(district => <Card location={district.location} data={district.data} key={district.location}/>)
  
  return (
    <div className="card-container">
      {cardInfo}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.array.isRequired
}