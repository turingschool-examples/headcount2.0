import React from 'react';
import './Card.css';

const Card = ({ districtName, data, key }) => {
  const dataValues = Object.keys(data).map( year => year + ': ' + data[year] )

  return(
    <article className='Card'>
      <h3>{districtName}</h3>
      {dataValues.map(value => <p>{value}</p>)}
    </article>
  )
}

export default Card;