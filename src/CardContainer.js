import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cards, averages, selectLocation }) => {
  const displayCards = cards.map( (card, index) => (
    <Card {...card} selectLocation={selectLocation} key={index} />
  ));

  let displayCompared = <p></p>;

  if (averages.compared >= 0) {
    displayCompared = 
      <p className='compared-average'> 
        COMPARED AVERAGES: {averages.compared}
      </p>;
  }

  return (
    <div className='CardContainer'>
      <h1 className='CardContainer__header'>
            KINDERGARTNERS IN FULL DAY PROGRAM
      </h1>
      <section className='CardContainer__section'>
        {displayCards}
      </section>
      {displayCompared}
    </div>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({ 
      average: PropTypes.number, 
      location: PropTypes.string, 
      stats: PropTypes.objectOf(PropTypes.number) 
    })
  ),
  averages: PropTypes.objectOf(PropTypes.number)
};