import React from 'react';
import Card from './Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ data, checkComparison }) => {

  const cards = data.map(district => {
    return <Card 
      district={district} 
      key={Math.random()} 
      checkComparison={checkComparison} />;
  });
  
  return (
    <div className='card-container'>
      {cards}
    </div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.array,
  checkComparison: PropTypes.func
};

export default CardContainer;