import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './../helper'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictsContainer from './../DistrictsContainer/DistrictsContainer'


class App extends Component {
  constructor() {
    super();

    this.state = {
      districts: ''
    }
  }

  componentDidMount() {
    const districts = new DistrictRepository(kinderData).stats
    this.setState({ districts })
  }

  

  render() {
    return (
      <div>
        {this.state.districts ?
        <DistrictsContainer districts={this.state.districts} /> :
        <h1> hey </h1> 
        }
      </div>
    );
  }
}

export default App;
