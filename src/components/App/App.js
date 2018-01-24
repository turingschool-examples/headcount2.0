import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../searchbar/SearchBar'


const district = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
    this.state = {data: district.findAllMatches()}
  }

  // filterCards = (searchValue) => {
  //   const filteredDistricts = 
  // }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <SearchBar />
        <CardContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
