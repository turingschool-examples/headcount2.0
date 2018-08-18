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

  handleClick = location => this.checkForMaxCards(location) ? this.selectDistrict(location) : undefined;

  checkForMaxCards = location => {
    const { selectedDistricts } = this.state;
    if (selectedDistricts.some(district => district.location === location) || selectedDistricts.length !== 2)
      return true;
  }

  selectDistrict = location => {
    const { selectedDistricts, districts } = this.state;
    let selectedCard = districts.find(district => district.location === location);
    if (!selectedDistricts.find(district => district.location === location)) {
      this.setState({ selectedDistricts : [...selectedDistricts, selectedCard]});
    } else {
      const selectedDistricts = this.state.selectedDistricts.filter(district => district.location !== location);
      this.setState({ selectedDistricts });
      this.setState({ comparisonData : undefined });
    }
    this.compareDistricts(location);
    this.changeSelectedCardClassName(location);
  }

  compareDistricts = (location) => {
    const { selectedDistricts } = this.state;
    if (selectedDistricts.length === 1) {
      const comparisonData = district.compareDistrictAverages(selectedDistricts[0].location, location);
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
    const { selectedDistricts, comparisonData, districts } = this.state;
    return (
      <main>
        <header>
          <img src={logo} alt="headcount 2.0 logo"/>
          <h1>headcount 2.0</h1>
        </header>
        <Search searchDistricts={this.searchDistricts}/>
        {selectedDistricts && <DistrictContainer 
          districts={selectedDistricts} 
          handleClick={this.handleClick}
        />}
        {selectedDistricts[1] && <ComparisonCard comparisonData={comparisonData}/>}
        <DistrictContainer 
          districts={districts}
          handleClick={this.handleClick}
        />
      </main>
    );
  }
}

export default App;
