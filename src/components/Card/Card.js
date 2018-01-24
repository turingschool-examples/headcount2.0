import React from 'react'
import './Card.css';

const Card = (props) => {
  const { location, data } = props.schoolData;
  const dataList = Object.keys(data)
    .map((year, index) => {
      let average;
      data[year] >= 0.5 ? average = 'high' : average = 'low';
      return <li key={index} className={average} >{year}: {data[year]}</li>
    })

  return (
    <article className='Card'>
      <h3>{location}</h3>
      <ul>
        { dataList }
      </ul>
    </article>
  )
}

export default Card;