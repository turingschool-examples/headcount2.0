import React from 'react';

const Card = ({ location, stats }) => {
    const statsList = Object.keys(stats).map((year, i) => (
        <li key={i}>{year}: {stats[year]}</li>
    ));

    return (
        <article>
            <h2>{location}</h2>
            <ul>{statsList}</ul>
        </article>
    )
}

export default Card;