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
      <div className='App'>
      <header>
        <h3>Welcome To </h3>
        <h1>Headcount 2.0</h1>
        <SearchBar className='SearchBar' filterCards={this.filterCards} />
      </header>  
        <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
