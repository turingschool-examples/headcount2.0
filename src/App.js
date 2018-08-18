import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

import Search from './Search';
import DistrictRepository from './helper.js';
import { DistrictContainer } from './DistrictContainer.js';
import { ComparisonCard } from './ComparisonCard';

import logo from './images/headcount.png';
import './style/App.css';

const district = new DistrictRepository(kinderData);
class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedDistricts: [],
      comparisonData: undefined
    };
  }

  componentDidMount = () => {
    this.searchDistricts(undefined);
  }

  searchDistricts = input => {
    let districts = district.findAllMatches(input);
    districts.forEach(district => district.key = district.location);
    this.setState({ districts });
  }

  checkForMaxCards = location => {
    if (this.state.selectedDistricts.some(district => district.location === location) || this.state.selectedDistricts.length !== 2)
      this.selectDistrict(location);
  }

  selectDistrict = location => {
    let selectedCard = this.state.districts.find(district => district.location === location);
    if (!this.state.selectedDistricts.find(district => district.location === location)) {
      this.setState({ selectedDistricts : [...this.state.selectedDistricts, selectedCard]});
    } else {
      const selectedDistricts = this.state.selectedDistricts.filter(district => district.location !== location);
      this.setState({ selectedDistricts });
      this.setState({ comparisonData : undefined });
    }
    this.compareDistricts(location);
    this.changeSelectedCardClassName(location);
  }

  compareDistricts = (location) => {
    if (this.state.selectedDistricts.length === 1) {
      const comparisonData = district.compareDistrictAverages(this.state.selectedDistricts[0].location, location);
      this.setState({ comparisonData });
    }
  }

  changeSelectedCardClassName = (location) => {
    let districts = this.state.districts.map(district => {
      if (district.location === location) {
        district.selected = !district.selected;
      }
      return district;
    });
    this.setState({ districts });
  }

  render() {
    return (
      <main>
        <header>
          <img src={logo} alt="headcount 2.0 logo"/>
          <h1>headcount 2.0</h1>
        </header>
        <Search searchDistricts={this.searchDistricts}/>
        {this.state.selectedDistricts && <DistrictContainer 
          districts={this.state.selectedDistricts} 
          checkForMaxCards={this.checkForMaxCards}
        />}
        {this.state.selectedDistricts[1] && <ComparisonCard comparisonData={this.state.comparisonData} card1key={this.state.key}/>}
        <DistrictContainer 
          districts={this.state.districts}
          checkForMaxCards={this.checkForMaxCards}
        />
      </main>
    );
  }
}

export default App;
