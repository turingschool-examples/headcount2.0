import React from 'react';
import Card from './Card';

const CardContainer = ({ cards, averages }) => {
    const displayCards = cards.map((card, i) => (
        <Card {...card} key={i} averages={averages} />
    ));

    let displayCompared = <p></p>

    if (averages.compared) {
        displayCompared = <p>COMPARED AVERAGES: {averages.compared}</p>
    }

    return (
        <div className='CardContainer'>
            <h1 className='CardContainer__header'>KINDERGARTNERS IN FULL DAY PROGRAM</h1>
            <section className='CardContainer__section'>
                {displayCards}
            </section>
            {displayCompared}
        </div>
    )
}

export default CardContainer;