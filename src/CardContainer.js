import React from 'react';
import Card from './Card';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = (props) => {

  const cards = props.data.map(district => {
    return <Card 
      district={district} 
      key={Math.random()} 
      checkComparison={props.checkComparison} />;
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