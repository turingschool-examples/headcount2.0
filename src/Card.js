import React from 'react';

const Card = ({ location, stats, average }) => {
    const statsList = Object.keys(stats).map((year, i) => {
        let statsColor = 'green';
        stats[year] > 0.5 ? statsColor : statsColor = 'red';
        return <li className={statsColor} key={i}>{year}: {stats[year]}</li>
    });

    return (
        <article className='Card'>
            <h2 className='Card__header'> {location}</h2>
            <ul className='Card__stats'>
                {statsList}
                <li>AVERAGE: {average}</li>
            </ul>
        </article>
    )
}

export default Card;