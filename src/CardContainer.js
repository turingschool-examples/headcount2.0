// import React, { Component } from 'react';
import React from 'react'
import DataCard from './DataCard';


const CardContainer = (props) => {
  console.log(props)
  const location = props.schoolCards.map(school => <DataCard school={school}/>)
   return(
    <div className="cardContainer">
      { location }
    </div>
  )
}


export default CardContainer;