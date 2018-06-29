import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';

const CardContainer = ({ cards, cardAverage }) => {
  const cardsKeys = Object.keys(cards)
  
  const container = cardsKeys.map(location => {
  const districtToDisplay = cards[location]
  
                                return <Card title={location}
                                              value={location}
                                            content={districtToDisplay}
                                            cardAverage={cardAverage} 
                                        />})
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