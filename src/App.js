import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    // const district = new DistrictRepository(kinderData);
  }
 
  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
