import React from 'react';
import Card from './Card.js';
import './styles/CardContainer.css';

const CardContainer = ({data, displaySelected, compareCard1, compareCard2}) => {
    const cards = Object.keys(data).map((currCard) => {
        let className = 'card';
        if (compareCard1 && data[currCard].location === compareCard1.location) {
            className = 'card selected';   
        } 
        if (compareCard2 && data[currCard].location === compareCard2.location) {
                className = 'card selected';
        }
        
        return <Card 
        compareCard1 = {compareCard1}
        compareCard2 = {compareCard2}
        cardInfo={data[currCard]} 
        key={currCard.id} 
        displaySelected={displaySelected} 
        selected = {className}/>
    })
    return (
        <div className = "card-container">
            {cards}
        </div>
        )
    }

export default CardContainer;