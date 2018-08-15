import React, { Component } from 'react';
import './App.css';
import DistrictList from './DistrictList'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search'
const districts = new DistrictRepository(kinderData)



class App extends Component {
  constructor() {
    super();

    this.state = {
      districts,
      searchedDistrict: []
    }
    console.log(districts)
  }

  searchDistricts = (event, value) => {
    event.preventDefault();
    const searchedDistrict = districts.findAllMatches(value);
    this.setState({
      searchedDistrict : districts.findAllMatches(value)
    })
  }

  render() {
    return (
      <React.Fragment> 
        <Search searchDistricts={ this.searchDistricts } /> 
        <DistrictList districts={this.state.districts.stats} searchedDistrict={this.state.searchedDistrict} />
      </React.Fragment>
    );
  }
}

export default App;
