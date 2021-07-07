// import React, { Component } from 'react';
import React from 'react'
import DataCard from './DataCard';
import PropTypes from 'prop-types';


const CardContainer = (props) => {
  const location = props.schoolCards.map(school => <DataCard school={school}/>)
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