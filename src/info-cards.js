import React, { Component } from 'react';

import './info-cards.css';

// import OneCard from './one-card';



const InfoCards = ({ data }) => {

  const infoCards = Object.keys(data).map( (place, i) => {
    return (
      <div className='info-card' key={Date.now() + (i * 5)}>
        <h4>{place}</h4>
        { Object.keys(data[place]).map( (year, i) => {
          return <p key={Date.now() + (i * 10)}>{year}: {data[place][year]}</p>
        })}
      </div>
    )
  })  


  return (
    <div className='info-cards'>
      {infoCards}
    </div>
  )
}

export default InfoCards;