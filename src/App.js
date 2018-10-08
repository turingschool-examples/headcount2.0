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
    const selectedDistrict = {location: location, stats: stats};
    const selectedLocations = this.state.selectedDistricts.map(district => {
      return district.location; 
    });

    if (!selectedLocations.includes(location) && selectedLocations.length < 2) {
      this.setState({
        selectedDistricts: [...this.state.selectedDistricts, selectedDistrict]
      });
    }
  }

  removeSelectedDistrict = (location) => {
    let selectedDistricts = this.state.selectedDistricts.filter(district => {
      return district.location !== location; 
    });

    this.setState({ selectedDistricts });
  }

  render() {
    let comparison;

    if (this.state.selectedDistricts.length > 0) {
      comparison = 
        <Comparison 
          selectedDistricts={this.state.selectedDistricts}
          removeSelectedDistrict={this.removeSelectedDistrict}/>;
    }
            
    return (
      <div>
        <Header search={this.search}/>
        { comparison }
        <CardContainer 
          districts={this.state.districts}
          addSelectedDistrict={this.addSelectedDistrict}/>
      </div>
    );
  }
}

export default App;