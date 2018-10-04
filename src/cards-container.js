import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InfoCard from './info-card';
import './cards-container.css';

const CardsContainer = (props) => {

  const infoCards = props.data.map( (place, i) => {
    return(
      <InfoCard key={Date.now() + (i * 23)} data={place} />
    )
  })

    return(
      <div className='cards-container'>
        { infoCards }
      </div>

    )
}

CardsContainer.propTypes = {
  data: PropTypes.array
}

export default CardsContainer
