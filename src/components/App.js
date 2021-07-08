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
    if (currentDistricts.includes(districts)) {
      let newCompare = this.state.compare.filter(district => !district.name.includes(districts))
      this.setState({ compare: newCompare })
    } else if (this.state.compare.length <= 1 && !currentDistricts.includes(districts)) {
        const district = this.state.data.findByName(districts);
        const newDistrict = { name: district.location, data: district.stats }
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
        {
          this.state.compare.length > 0 &&
          <Compare
          compare={compare}
          />
        }
        <Search
          displayAllCards={this.displayAllCards}
          filterDistricts={this.filterDistricts}
        />
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
