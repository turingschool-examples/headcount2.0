import React from 'react';
import Card from './Card.js';
import ComparedCard from './ComparedCard.js';

const CompareCardContainer = ({compareCard1, compareCard2, compareCards}) => {
    let card1;
    let card2;
    let middleCard;
    
    if(compareCard1 !== null) {
        card1 = <Card cardInfo={compareCard1} 
        className="compared-card" 
        compareCard1={compareCard1.location} 
       />
    }
    if (compareCard2 !== null) {
        card2 = <Card cardInfo={compareCard2} 
        className="compared-card" 
        compareCard1={compareCard1.location} 
        compareCard2={compareCard2.location} 
       />
    }

    if (compareCard1 !== null && compareCard2 !== null) {
        let middleCardObj = compareCards(compareCard1.location, compareCard2.location);
        middleCard = <ComparedCard cardInfo={middleCardObj} />
    }


    return (
        <div className="compared-card-container">
            {card1}
            {middleCard}
            {card2}
        </div>
    )
}

export default CompareCardContainer;