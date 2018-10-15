import React from 'react';
import Card from './Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = ({ data, checkComparison, compareData }) => {

  const cards = data.map((district, index) => {
    return <Card 
      district={district} 
      key={Math.random()} 
      checkComparison={checkComparison}
      compareData={compareData} />;
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