import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import CardContainer from './CardContainer.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor() {
    super()
    const districts = new DistrictRepository(kinderData)
    this.state = {
      schools: Object.keys(districts.stats),
      status: Object.keys(Object.values(districts.stats)),
      cards: districts.stats
    }
  }

updateDistricts = (event) => {
  event.preventDefault();
  console.log('yaaayyy it\'s working')
}

  render() {
    return (
      <div className="App">Welcome To Headcount 2.0
        <SearchForm updateDistricts={this.updateDistricts}/>
        {/* <ComparisonContainer /> */}
        <CardContainer title={this.state.schools} content={this.state.status}/>
      </div>
    );
  }
}

export default App;
