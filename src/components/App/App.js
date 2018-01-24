import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import districtRepository from '../../helper.js';
const district = new districtRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      districtData: district.data
    }
  }


  render() {
    return (
      <div className="App">
        <CardContainer districtData={this.state.districtData} />
      </div>
    );
  }
}

export default App;
