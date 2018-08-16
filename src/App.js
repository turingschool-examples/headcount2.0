import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import './App.css';
import DistrictContainer from './DistrictContainer.js';
import Search from './Search';

const district = new DistrictRepository(kinderData);
class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: [],
      selectedDistricts: []
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

  selectDistrict = key => {
    let selectedDistricts = district.findByName(key);
    if (this.state.selectedDistricts.length > 1) {
      this.setState({selectedDistricts : this.state.selectedDistricts.shift()})
    }
    this.setState({ selectedDistricts : [...this.state.selectedDistricts, selectedDistricts] });
  }

  render() {
    return (
      <main>
        <Search searchDistricts={this.searchDistricts}/>
        <DistrictContainer 
          districts={this.state.selectedDistricts} 
        />
        <DistrictContainer 
          districts={this.state.districts}
          selectDistrict={this.selectDistrict}
        />
      </main>
    );
  }
}

export default App;
