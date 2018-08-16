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
      districts: []
    };
  }

  componentDidMount = () => {
    this.searchDistricts(undefined);
    console.log(this.state.districts);
  }

  searchDistricts = (input) => {
    let districts = district.findAllMatches(input);
    districts.forEach(district => district.key = district.location);
    this.setState({ districts });
  }

  render() {
    return (
      <main>
        <Search searchDistricts={this.searchDistricts}/>
        <DistrictContainer districts={this.state.districts}/>
      </main>
    );
  }
}

export default App;
