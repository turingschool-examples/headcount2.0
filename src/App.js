import React, { Component } from 'react';
import DistrictRepository from './helper';
import { Cards } from './Cards';
import kinderData from '../data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.schools = new DistrictRepository(kinderData);
    this.state = {
      data: {}
    }
  }

  render() {
    return (
      <div>
      <div>Welcome To Headcount 2.0</div>
      <Cards data={ this.schools.data } />
      </div>
    );
  }
}

export default App;
