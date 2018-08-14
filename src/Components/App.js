import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../helper';
import kinderData from '../data/kindergartners_in_full_day_program';

const districtRepo = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: districtRepo.stats,
      selectedCards: []
    }
  }

  render() {
    return (
      <div>
        <header>Welcome To Headcount 2.0</h1>

      </div>
    );
  }
}

export default App;
