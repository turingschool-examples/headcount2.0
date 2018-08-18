import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const CardContainer = ({ cards, averages, selectLocation, revealHelperInfo }) => {
  const displayCards = cards.map( (card, index) => (
    <Card {...card} selectLocation={selectLocation} key={index} />
  ));

  let displayCompared = <p></p>;

  if (averages.compared >= 0) {
    displayCompared = 
      <div className='compared-average'>
        <p> 
          COMPARED AVERAGES: <span className='compared-average__num'>
            {averages.compared}
          </span>
        </p>
      </div>;
  }

  return (
    <div className='CardContainer'>
      <button className='CardContainer__btn'
      onClick={ () => revealHelperInfo() }>?</button>
      <div className='CardContainer__info' type="hidden">
        <p>
          Compare district stats by clicking on two districts from the list on the left. 
          To change districts click on the districts in the list on the left or remove 
          them individually by clicking on the district card itself.
        </p>
        <button onClick={ () => revealHelperInfo() }>X</button>
      </div>
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
  averages: PropTypes.objectOf(PropTypes.number),
  selectLocation: PropTypes.func
};