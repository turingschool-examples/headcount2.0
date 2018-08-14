import React from 'react';
import Card from './Card';

const CardContainer = ({ cards }) => {
    const cardNames = Object.keys(cards).map((card, i) => (
        <button key={i}>{card}</button>
    ));
    const displayCard = Object.keys(cards).map((card, i) => (
        <Card {...cards[card]} key={i} />
    ));

    return (
        <div>
            <aside>
                {cardNames}
            </aside>
            <section>
                {displayCard}
            </section>
        </div>
    )
}

export default CardContainer;