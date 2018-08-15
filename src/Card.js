import React from 'react';

const Card = ({ location, stats }) => {
    const statsList = Object.keys(stats).map((year, i) => {
        let statsColor = 'green';
        stats[year] > 0.5 ? statsColor : statsColor = 'red';
        return <li className={statsColor} key={i}>{year}: {stats[year]}</li>
    });

    return (
        <article className='Card'>
            <h2 className='Card__header'> {location}</h2>
            <ul className='Card__stats'>{statsList}</ul>
        </article>
    )
}

export default Card;