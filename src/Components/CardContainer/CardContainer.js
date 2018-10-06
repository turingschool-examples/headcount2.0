import React from 'react';
import Card from '../Card/Card';
import './cardcontainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({stats} = {}) => {

  const arrayOfDistricts = Object.keys(stats);

  const mappedCards = arrayOfDistricts.map((stat, index)=> <Card {...stats[stat]} key={index}/>)
  return(
    <div className="card-container">
    {mappedCards}
    </div>
  )
}

CardContainer.propTypes = {
  stats: PropTypes.object
}

export default CardContainer;
