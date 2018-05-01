import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: (new DistrictRepository(data)).stats
    }
  }
  render() {
    return (
      <div>

        <h1>Welcome To Headcount 2.0</h1>
        <CardContainer repo={this.state.repo}/>

      </div>
    );
  }
}

export default App;
