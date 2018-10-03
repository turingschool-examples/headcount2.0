import React, { Component } from 'react';

import InfoCard from './info-card';
import './cards-container.css';

const CardsContainer = (props) => {

  const infoCards = props.data.map( place => <InfoCard data={place} />)

    return(
      <div className='cards-container'>
        { infoCards }
      </div>

    )
}

export default CardsContainer
        // <InfoCards />