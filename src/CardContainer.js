import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';

const CardContainer = ({data}) => {
    
    const cards = Object.keys(data).map((currCard) => {
        return <Card cardInfo={data[currCard]} />
    })
    return (
        <div className = "card-container">
            {cards}
        </div>
        )
    }

export default CardContainer;