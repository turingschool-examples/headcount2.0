import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import ComparisonContainer from './ComparisonContainer';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSet: new DistrictRepository(kinderData),
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Search />
        <ComparisonContainer />
        <CardContainer />
      </div>
    );
  }
}

export default App;
