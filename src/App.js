import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import React, { Component } from 'react';
import './App.css';
import DistrictContainer from './DistrictContainer.js';
import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      district: {},
      data: {},
      searchResults: []
    }
  }

  componentDidMount = () => {
    const district = new DistrictRepository(kinderData);
    this.setState({ data: district.stats, district});
  }

  searchDistricts = (input) => {
    const searchResults = this.state.district.findAllMatches(input);
    this.setState({ searchResults });
  }

  componentDidUpdate() {

  }
  render() {
    return (
      <main>
        <Search searchDistricts={this.searchDistricts}/>
        <DistrictContainer data={this.state.data}/>
      </main>
    );
  }
}

export default App;
