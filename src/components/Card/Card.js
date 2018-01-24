import React from 'react';
import './Card.css';

const Card = ({ districtName, data, key }) => {
  const dataValues = Object.keys(data).map( year => {
  if (data[year] > 0.5) {
    return <li className="greater-than">{year} + ': ' + {data[year]}</li>
  } else {
    return <li>{year} + ': ' + {data[year]}</li>
  }
  })

  return(
    <article className='Card'>
      <h3>{districtName}</h3>
      <ul>
        {dataValues}
      </ul>
    </article>
  )
}

export default Card;