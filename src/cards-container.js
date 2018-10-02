import React, { Component } from 'react';

import InfoCards from './info-cards';

class CardsContainer extends Component {

  render() {
    return(
      <div className='cards-container'>
      
        <InfoCards />
      </div>

    )
  }
}

export default CardsContainer;