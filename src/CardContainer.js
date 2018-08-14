import React from 'react';
import Card from './Card';

const CardContainer = ({ cards }) => {
    const displayCards = Object.keys(cards).map((card, i) => (
        <Card {...cards[card]} key={i} />
    ))

    return (
        <section>
            {displayCards}
        </section>
    )
}

export default CardContainer;