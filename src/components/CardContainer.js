import React, { Component } from 'react';
import Card from './Card';
import '../styles/CardContainer.css';


const CardContainer = (props) => {

  const dataArray = Object.keys(props.allDistrictData)
  const newCard = dataArray.map((location, index) => <Card data={ props.allDistrictData[location]} key={index} compareCards={props.compareCards}/>)
  
  return (
    <section className='container-wrap'>
      <h2>School Data:</h2>
      { newCard }
    </section>
  )
}

export default CardContainer