import React from 'react';
import Card from '../Card/Card'
import './card-container.css'
import PropTypes from 'prop-types';

const CardContainer = ({schoolStats, searchResults}) => {
  let schoolCards;
  if (searchResults.length) {
    schoolCards = searchResults.map((school, index) => {
      return <Card {...school} key={index} />
    })
  } else {
    schoolCards = schoolStats.map((school, index) => {
      return <Card {...school} key={index} />
    })
  }
  return (
    <div className="card-container">
      {schoolCards}
    </div>
  )
}

CardContainer.propTypes = {
  schoolStats: PropTypes.arrayOf(PropTypes.object)
}

export default CardContainer;