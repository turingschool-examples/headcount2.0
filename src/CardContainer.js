import React from 'react';
import Card from './Card';

const CardContainer = ({ cards }) => {
    const displayCards = cards.map((card, i) => (
        <Card {...card} key={i} />
    ));

    return (
        <div>
            <section>
                {displayCards}
            </section>
        </div>
    )
}

export default CardContainer;