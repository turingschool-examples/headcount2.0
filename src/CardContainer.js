import React from 'react';
import Card from './Card';

const CardContainer = ({ cards, averages }) => {
  const displayCards = cards.map((card, index) => (
    <Card {...card} key={index} />
  ));

  let displayCompared = <p></p>;

  if (averages.compared >= 0) {
    displayCompared = <p className='compared-average'>
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