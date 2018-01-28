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
      data: this.district.findAllMatches(),
      selected: []
    }
  }

  filterCards = (searchValue) => {
    const foundItems = this.district.findAllMatches(searchValue);
    this.setState({
      data: foundItems
    })
  }

  handleClick = (e) => {
    const truth = this.state.selected 
    const selectedDistrict = this.district.findByName(e.target.id)
    selectedDistrict.style = 'selected'

    this.manageSelected(truth, selectedDistrict)
  }

  manageSelected = (truth, selectedDistrict) => {
    switch (truth.length) {
      case 2:
        truth.shift()
        truth.push(selectedDistrict)
        this.makeComparison(truth[0], truth[1])
        break;
      case 1:
        truth.unshift(selectedDistrict)
        this.makeComparison(truth[0], truth[1])
        break
      default:
        truth.unshift(selectedDistrict)
    }
    this.setState({
      selected: truth
    })
  }

  makeComparison = (dist1, dist2) => {
    console.log(this.district.compareDistrictAverages(dist1.location, dist2.location))

  }

  render() {
    return (
      <div className='App'>
        <header>
          <div className='top'>
            <img className='line' src={ require('./line.svg') } />
            <p className='welcome'>Welcome to </p>
            <img className='line' src={ require('./line.svg') } />
          </div> 
          <logo>
            <img className ='icon' src={ require('./icon.svg') } />
            <h1>Headcount 2.0</h1>
          </logo>  
          <p> A simulated data search app built in React </p>
        </header>  
        <SearchBar className='SearchBar' filterCards={this.filterCards} />
        <CardContainer {...this.state} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
