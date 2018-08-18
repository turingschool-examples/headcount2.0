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
      cardsToCompare: [],
      comparedObject: {}
    }
  }

  searchDistricts = (value) => {
    this.setState({
      searchedDistrict: this.state.districts.findAllMatches(value)
    })
  }

  addToCompare = (eventLocation) => {
    const foundCard = this.state.districts.findByName(eventLocation);
    if (this.state.cardsToCompare.length > 1) {
      this.compareAddedDistricts();
      return
    }
    if(this.state.cardsToCompare.includes(foundCard) && this.state.cardsToCompare.length >= 1) {
      return
    }
    this.setState({
      cardsToCompare: [...this.state.cardsToCompare, foundCard]
    })
  }
  
  compareAddedDistricts = () => {
    if (this.state.cardsToCompare.length >= 1) {
      const comparedObject = this.state.districts.compareDistrictAverages(this.state.cardsToCompare[0].location, this.state.cardsToCompare[1].location)
      this.setState({
        comparedObject: comparedObject
      })
    }
  }
  
  render() {
    return (
      <React.Fragment> 
        <Search searchDistricts={ this.searchDistricts } /> 
        <DistrictList addToCompare={this.addToCompare} cardsToCompare={this.state.cardsToCompare} districts={this.state.districts.stats} searchedDistrict={this.state.searchedDistrict} comparedObject={this.state.comparedObject}/>
      </React.Fragment>
    );
  }
}

export default App;
