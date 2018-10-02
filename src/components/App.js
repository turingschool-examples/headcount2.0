import React, { Component } from 'react'; 

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'

import CardContainer from './CardContainer'

import '../css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: new DistrictRepository(kinderData)
    }
  }

  render() {

    return (
      <main className="app">
        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer data={this.state.data} />
      </main>
    );
  }
}



export default App;
