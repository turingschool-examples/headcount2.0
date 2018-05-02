import React from 'react';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types'
import './CardContainer.css';

const CardContainer = ( {repo} ) => {
 
  const cardList = repo.map((district, index) => {
    let title = Object.keys(district)[0];
    let listOfData = Object.values(district)[0];

    return <Card title={title}
                 listOfData={listOfData} 
                 key={`Card${index}`}/>

  })
  return (
      <div className="card-container">
       { cardList }
      </div>
    )
}

CardContainer.propTypes = {
  repo: PropTypes.array.isRequired
}

export default CardContainer; 