import React, { Component } from 'react';
import './App.css';
import DistrictList from './DistrictList'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';
const districts = new DistrictRepository(kinderData)



class App extends Component {
  constructor() {
    super();

    this.state = {
      districts,
    }
  }

  render() {
    return (
      <React.Fragment> 
        <DistrictList districts={this.state.districts.stats}/>
      </React.Fragment>
    );
  }
}

export default App;
