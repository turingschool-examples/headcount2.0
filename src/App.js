import React, { Component } from 'react';
import DistrictRepository from './helper'
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer'

let districtData = new DistrictRepository(kinderData)

// console.log(districtData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      districtData
    }
  }
  render() {
    return (
      <div>
        <h1>HeadCount 2.0</h1>
        <CardContainer districtData={this.state.districtData}/>
      </div>
    );
  }
}

export default App;
