import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import Header from './Header';
import Comparison from './Comparison';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      districts: [],
      selectedDistricts: []
    };
  }

  componentDidMount = () => {
    const districts = new DistrictRepository(kinderData);
    const districtData = districts.findAllMatches();

    this.setState({
      districts: districtData
    });
  }

  search = (query) => {
    const districts = new DistrictRepository(kinderData);
    const filteredData = districts.findAllMatches(query);

    this.setState({
      districts: filteredData
    });
  }

  addSelectedDistrict = (location, stats) => {
    const selectedDistrict = {location: location, stats: stats}
    const selectedLocations = this.state.selectedDistricts.map(district => district.location)

    if (!selectedLocations.includes(location) && selectedLocations.length < 2) {
    this.setState({
      selectedDistricts: [...this.state.selectedDistricts, selectedDistrict]
      })
    }
  }

  // removeSelectedDistrict = () => {
  // }

  render() {
    return (
      <div>
        <Header search={this.search}/>
        <Comparison />
        <CardContainer districts={this.state.districts}
          addSelectedDistrict={this.addSelectedDistrict}/>
      </div>
    );
  }
}

export default App;