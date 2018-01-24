import React, { Component } from 'react';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../kindergartners_in_full_day_program.js';
import CardContainer from '../CardContainer/CardContainer';
import SearchBar from '../searchbar/SearchBar';

class App extends Component {
  constructor() {
    super();
    
    this.district = new DistrictRepository(kinderData)

    this.state = {
      data: this.district.findAllMatches()
    }
  }

  filterCards = (searchValue) => {
    const foundItems = this.district.findAllMatches(searchValue);
    this.setState({
      data: foundItems
    })
  }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <SearchBar filterCards={this.filterCards} />
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
