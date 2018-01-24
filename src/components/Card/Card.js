import React from 'react';
import './Card.css';

const Card = ({ districtName, data, key }) => {
  const dataValues = Object.keys(data).map( year =>
    data[year] > 0.5 ? <li className="over">{year}: {data[year]}</li>
    :
    <li className="under">{year}: {data[year]}</li>
  )

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