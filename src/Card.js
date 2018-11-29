import React from 'react';
import './styles/Card.css';


const Card = (props) => {
    const stats = Object.keys(props.cardInfo.stats).map(currStat => {
        let classString = 'low';
        if (props.cardInfo.stats[currStat] > 0.5) {
            classString = 'high'; 
        }
        return (<li 
        className={classString} 
        
        >
            <span className='year'>
            {currStat}
            </span>
            <span className='percentage'>
            {props.cardInfo.stats[currStat]} 
            </span>
        </li> )
    });

    return (
        <div className="card" key={props.cardInfo.id} 
        onClick={() => props.displaySelected(props.cardInfo)}
        > 
            <h1> {props.cardInfo.location} </h1>
                <p> 
                    <h3> year </h3>
                    <h3> % enrollment </h3>
                </p>
            <ul> {stats} </ul>
        </div>
    );
}

export default Card;