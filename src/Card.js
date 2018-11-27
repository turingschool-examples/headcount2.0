import React from 'react';

const Card = (props) => {
    const stats = Object.keys(props.cardInfo.stats).map(currStat => {
        return <li> 
        {currStat}: {props.cardInfo.stats[currStat]} 
        </li>
    });
    return (
        <div> 
            <h1> {props.cardInfo.location} </h1>
            <ul> {stats} </ul>
        </div>
    );
}

export default Card;