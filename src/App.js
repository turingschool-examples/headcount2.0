import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {

  render() {
    let districtData = new DistrictRepository(kinderData)
    console.log(districtData.cleanData(kinderData))
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
