// import React, { Component } from 'react';
import React from 'react'
import DataCard from './DataCard';
import PropTypes from 'prop-types';


const CardContainer = ({schoolCards, compareTwoCards}) => {
  const location = schoolCards.map(school => <DataCard compareTwoCards={compareTwoCards} school={school}/>)
  console.log('location', location)
   return(
    <div className="cardContainer">
      { location }
    </div>
  )
}

CardContainer.propTypes = {
  props: PropTypes.object
}

export default CardContainer;