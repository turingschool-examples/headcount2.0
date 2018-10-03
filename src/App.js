import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      DistrictRepository: {}
    }
  }

  componentDidMount() {
    let repo = new DistrictRepository(kinderData)
    this.setState({
      DistrictRepository: repo.stats
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome To Headcount 2.0</h1>
        <Card />
      </div>
    );
  }
}

export default App;
