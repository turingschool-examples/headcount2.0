import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import './App.css';
import DistrictContainer from './DistrictContainer.js';
import Search from './Search';
import { ComparisonCard } from './ComparisonCard';
import logo from './headcount.png'

const district = new DistrictRepository(kinderData);
class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedDistricts: [],
      comparisonData: undefined,
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
    this.setState({ selectedDistricts : [...this.state.selectedDistricts, selectedDistricts] });
    this.setState({key});  
  }

  render() {
    return (
      <main>
        <header>
          <img src={logo} />
          <h1>headcount 2.0</h1>
        </header>
        <Search searchDistricts={this.searchDistricts}/>
        <DistrictContainer 
          districts={this.state.selectedDistricts} 
        />
    {this.state.comparisonData && <ComparisonCard comparisonData={this.state.comparisonData} card1key={this.state.key}/>}
        <DistrictContainer 
          districts={this.state.districts}
          selectDistrict={this.selectDistrict}
        />
      </main>
    );
  }
}

export default App;
