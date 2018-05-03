import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';
import Search from '../Search/Search.js';
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';
const repoHelper = new DistrictRepository(data);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: repoHelper.findAllMatches()
    };
  }

  updateRepoInState = (value) => {
    let filteredDistricts = repoHelper.findAllMatches(value);
    this.setState({ repo: filteredDistricts });
  }

  render() {
    return (
      <div>
        <h1 className="header">Welcome To Headcount 2.0</h1>
        <Search updateRepoInState={ this.updateRepoInState } />
        <CardContainer repo={ this.state.repo } />
      </div>
    );
  }

}

export default App;
