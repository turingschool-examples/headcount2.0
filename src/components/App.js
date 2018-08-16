import React, { Component } from 'react';

import '../css/App.css';
import kinderGartenData from '../data/kindergartners_in_full_day_program';
import DistrictRepository from '../helper';
import DistrictContainer from './DistrictContainer';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: {},
      districts: [],
      loading: true,
      selectedDistricts: []
    };
  }

  componentDidMount() {
    this.populateDistrictData(kinderGartenData);
  }

  populateDistrictData = data => {
    const category = new DistrictRepository(data);
    const districts = category.findAllMatches();
    this.setState({
      category,
      districts
    });
  };

  filterCards = string => {
    const category = new DistrictRepository(kinderGartenData);
    const districts = category.findAllMatches(string);
    this.setState({
      districts
    });
  };

  addSelected = location => {
    const district = this.state.districts.find(
      district => district.location === location
    );
    const selectedDistricts = [...this.state.selectedDistricts, district];
    this.setState({
      selectedDistricts
    });
  };

  render() {
    return (
      <div className="app">
        <div className="container">
          <h1>Welcome To Headcount 2.0</h1>
          <Search filterCards={this.filterCards} />
          <DistrictContainer
            districts={this.state.districts}
            addSelected={this.addSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
