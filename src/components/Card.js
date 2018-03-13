import React from 'react';
import '../styles/Card.css';

const Card = ({ info }) => {
  const { location, data } = info
  const year = Object.keys(data).map((year, idx) => {
    return data[year] > 0.5 ? <li className="over-fifty" key={idx}>{year} : {data[year]}</li> : <li className="under-fifty" key={idx}>{year} : {data[year]}</li>
  })

  return (
    <article>
      <h2>{location}</h2>
      <ul>
        {year}
      </ul>
    </article>
  )
}

export default Card