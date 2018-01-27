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
      selected: [],
      compared: []
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
    const compared = Object.entries(this.district.compareDistrictAverages(dist1.location, dist2.location))
    this.setState({
      compared
    })
  }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <SearchBar filterCards={this.filterCards} />
        <CardContainer {...this.state} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
