import React from 'react';
import Card from './Card';

const CardContainer = ({ cards, averages }) => {
    const displayCards = cards.map((card, i) => (
        <Card {...card} key={i} />
    ));

    return (
        <div className='CardContainer'>
            <h1 className='CardContainer__header'>KINDERGARTNERS IN FULL DAY PROGRAM</h1>
            <section className='CardContainer__section'>
                {displayCards}
            </section>
            <p>{averages.compared}</p>
        </div>
    )
}

export default CardContainer;