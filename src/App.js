import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from "./helper.js"

const districts = new DistrictRepository(kinderData)


class App extends Component {
  constructor() {
    super();
    this.state = {
      districts
    }
  }
  render() {
    return (
      <div className="App">
        <CardContainer districts={this.state.districts} />
      </div>
    );
  }
}

export default App;
