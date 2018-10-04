import React, { Component } from 'react';
import CardContainer from './CardContainer';
import Search from './Search';
import Compare from './Compare'
import '../css/App.css';

import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper'


class App extends Component {
  constructor() {
    super()
    this.state = {
      compare: [],
      query: '',
      data: new DistrictRepository(kinderData)
    }
  }

  compareDistricts = (districts) => {
    let currentDistricts = this.state.compare.map(district => district.name)
    if (this.state.compare.length <= 1 && !currentDistricts.includes(districts)) {
      const district = this.state.data.findByName(districts);
      const newDistrict = { name: district.location, data: district.stats }
      console.log(newDistrict)
      this.setState({ compare: [ newDistrict, ...this.state.compare ] })
    } 
  }

  filterDistricts = (query) => {
    this.setState({ query })
  }

  render() {
    const { query, compare, data } = this.state;
    return (
      <div>
        <Search
          displayAllCards={this.displayAllCards}
          filterDistricts={this.filterDistricts}
        />
        {
        this.state.compare.length > 0 &&
        <Compare
          compare={compare}
        />
        }
        <CardContainer 
          cards={data.findAllMatches(query)}
          compareDistricts={this.compareDistricts}
          compare={compare}
        />
      </div>
    );
  }
}

export default App;
