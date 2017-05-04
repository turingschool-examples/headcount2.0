import React, { Component } from 'react';
import DistrictRepository from './helper';
import { Cards } from './Cards';
import kinderData from '../data/kindergartners_in_full_day_program';
import { Search } from './Search';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.schools = new DistrictRepository(kinderData);
    let schoolData = this.schools.data
    this.state = {
      data: schoolData
    }
  }

  handleSelect(event) {
    if (document.querySelectorAll('.clicked').length < 2) {
      event.target.closest('.card').classList.toggle('clicked');
    } else {
      event.target.closest('.card').classList.remove('clicked');
    }
  }

  handleSearch(input) {
    let sortedData = this.schools.findAllMatches(input);
    this.setState({data: sortedData})
 }

  render() {
    return (
      <div>
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <Search handleSearch={this.handleSearch.bind(this)} />
        </header>
        <Cards data={ this.state.data }
               onClick={ this.handleSelect.bind(this) } />
      </div>
    );
  }
}
