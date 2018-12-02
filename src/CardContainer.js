import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((currCard) => {
    return <Card cardInfo={props.data[currCard]} displaySelected={props.displaySelected} compareCard1={props.compareCard1} compareCard2={props.compareCard2} />

  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object
}

export default CardContainer;