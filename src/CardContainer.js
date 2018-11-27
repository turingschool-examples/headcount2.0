import React from 'react';
import Card from './Card.js';

const CardContainer = ({data}) => {
    
    const cards = Object.keys(data).map((currCard) => {
        return <Card  cardInfo={data[currCard]} />
    })
    return (
        <div>
            {cards}
        </div>
        )
    }
    
export default CardContainer;