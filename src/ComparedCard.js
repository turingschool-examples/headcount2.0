import React from 'react';


const ComparedCard = (props) => {
    let keys = Object.keys(props.cardInfo);
    let values = Object.values(props.cardInfo);
    const leftArrow = '<----';
    const rightArrow = '---->';
    return (
        <div className ='card compared-card'> 
            <div> {keys[0]} : {values[0]} </div>
            <div>  {leftArrow} {values[1]} {rightArrow} </div>
            <div> {keys[1]} : {values[2]}</div>
        </div>
    )
}

export default ComparedCard;