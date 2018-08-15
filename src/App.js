import React, { Component } from 'react';
import './App.css';
import DistrictList from './DistrictList'
import DistrictRepository from './helper'
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search'



class App extends Component {
  constructor() {
    super();

    this.state = {
      districts: new DistrictRepository(kinderData),
      searchedDistrict: [],
      cardsToCompare: []
    }
  }

  searchDistricts = (value) => {
    this.setState({
      searchedDistrict: this.state.districts.findAllMatches(value)
    })
  }

  addToCompare = (eventLocation) => {
    const foundCard = this.state.districts.findByName(eventLocation);
    if (this.state.cardsToCompare.length > 1 || this.state.cardsToCompare.includes(foundCard)) {
      return
    }
    this.setState({
      cardsToCompare: [...this.state.cardsToCompare, foundCard]
    })
  }
  
  render() {
    return (
      <React.Fragment> 
        <Search searchDistricts={ this.searchDistricts } /> 
        <DistrictList addToCompare={this.addToCompare} cardsToCompare={this.state.cardsToCompare} districts={this.state.districts.stats} searchedDistrict={this.state.searchedDistrict} />
      </React.Fragment>
    );
  }
}

export default App;
