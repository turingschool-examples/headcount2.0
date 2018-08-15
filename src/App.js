import React, { Component } from 'react';
import DistrictRepository from './helper'
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer'

// const allDistricts = new DistrictRepository(kinderData)

class App extends Component {
  constructor(props) {
    super(props)
    this.allDistricts = new DistrictRepository(kinderData)
    this.state = {
      data: this.allDistricts.stats
    }

  }

  // componentDidMount() {
  //   const district = Object.keys(this.allDistricts.stats)
  //   this.setState({districtData: district})
  // }

  render() {
    return (
      <div className="headerContainer">
        <h1>HeadCount 2.0</h1>
        <CardContainer data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
