import React, { Component } from 'react';
import kinderData from './helper/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    let cards = new DistrictRepository
    let data = this.findAllMatches
    this.setState({ data })
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0</div>
    );
  }
}

export default App;
