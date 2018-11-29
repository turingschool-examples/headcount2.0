import React from 'react';
import Card from './Card.js';

const CompareCardContainer = ({compareCard1}) => {
    let card1;
    if(compareCard1 !== null) {
        card1 = <Card cardInfo={compareCard1} />
    }
    return (
        <div>
            {card1}
        </div>
    )
}

export default CompareCardContainer;