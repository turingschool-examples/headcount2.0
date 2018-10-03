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
      cards: [],
      compare: [],
      query: '',
      data: new DistrictRepository(kinderData)
    }
  }

  componentDidMount() {
    // this.displayAllCards();
  }

  

  filterDistricts = (query) => {
    this.setState({ query })
  }

  render() {
    return (
      <div>
        <Search
          displayAllCards={this.displayAllCards}
          filterDistricts={this.filterDistricts}
        />
        <Compare/>
        <CardContainer 
        cards={this.state.data.findAllMatches(this.state.query)}
        />
      </div>
    );
  }
}

export default App;
