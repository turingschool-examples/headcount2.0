import React, { Component } from 'react';

import InfoCards from './info-cards';


class CardsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      compareCard1: {},
      compareCard2: {}
    }
  }

  render() {
    return(
      <div className='cards-container'>
        <InfoCards data={this.props.data}/>
      </div>

    )
  }
}

export default CardsContainer;
        // <Compairison compareCards={this.state}/>