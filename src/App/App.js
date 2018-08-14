import React, { Component } from 'react';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import { CardContainer } from '../CardContainer/CardContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: new DistrictRepository(kinderData)
    };
  }

  render() {
    return (
      <div>
        <CardContainer schoolData={this.state.data} />
      </div>
    );
  }
}

export default App;
