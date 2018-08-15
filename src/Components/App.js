import React, { Component } from 'react';
import './App.css';
import CardCont from './CardCont';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

const districtRepo = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: districtRepo.stats,
      selectedCards: []
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
        </header>
        <CardCont data={ this.state.data } />
      </div>
    );
  }
}

export default App;
