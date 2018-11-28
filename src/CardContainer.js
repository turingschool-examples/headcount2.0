import React from 'react';
import Card from './Card.js';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((currCard) => {
    return <Card cardInfo={props.data[currCard]} />

  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default CardContainer;