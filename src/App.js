import React, { Component } from 'react';

import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program';
import CardContainer from './CardContainer';

class App extends Component {
  constructor() {
    super()
    this.district = new DistrictRepository(kinderData);
    this.state = {
      cards: this.district.stats
    }
  }

  render() {
    return (
      <div>
        <h1>KINDERGARTNERS IN FULL DAY PROGRAM</h1>
        <CardContainer cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
