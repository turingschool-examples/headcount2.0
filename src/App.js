import React, { Component } from 'react';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import kinderdata from './data/kindergartners_in_full_day_program';
import './App.css';
const districts = new DistrictRepository(kinderdata);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts
    };
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
