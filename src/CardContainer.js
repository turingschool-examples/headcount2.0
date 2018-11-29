import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';

const CardContainer = ({data, displaySelected}) => {
    
    const cards = Object.keys(data).map((currCard) => {
        return <Card 
        cardInfo={data[currCard]} 
        key={currCard.id} 
        displaySelected={displaySelected}/>
    })
    return (
        <div className = "card-container">
            {cards}
        </div>
        )
    }

export default CardContainer;