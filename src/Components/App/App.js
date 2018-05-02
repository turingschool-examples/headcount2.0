import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import data from '../../data/kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer.js'
import Search from '../Search/Search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: (new DistrictRepository(data)).stats,
      activeDistricts: []
    }
    // console.log(this.state.repo)
  }

//Just do stuff the value given
  handleSearch = (value) => {
    const repoHelper = new DistrictRepository(data)
    let filteredDistricts = repoHelper.findAllMatches(value)
    this.setState({activeDistricts: filteredDistricts})
  }

  render() {
    return (
      <div>

        <h1>Welcome To Headcount 2.0</h1>
        <Search handleSearch={this.handleSearch}/>
        <CardContainer repo={this.state.repo} 
                activeDistricts={this.state.activeDistricts}/>

      </div>
    );
  }
}

export default App;
