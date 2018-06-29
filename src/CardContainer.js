import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({ cards }) => {
  const cardsKeys = Object.keys(cards)
  
  const container = cardsKeys.map(location => {
  const districtToDisplay = cards[location]
  
                                return <Card title={location}
                                            content={districtToDisplay}/>})
  return(
    <div className="Container">
    {container}
    </div>
  )
}

CardContainer.propTypes = {
  cards: PropTypes.object
}

export default CardContainer;