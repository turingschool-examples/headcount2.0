import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer';
import DistrictRepository from './helper';
import KinderData from './data/kindergartners_in_full_day_program.js';
import DistrictSearch from './DistrictSearch.js';
import CompareContainer from './CompareContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      display: [],
      avgCard: {}
    };

  }

  componentDidMount = () => {
    const district = new DistrictRepository(KinderData);
    const districtData = district.findAllMatches();
    this.setState(
      {data: districtData}
    );
  }

  handleSearch = (searchString) => {
    const district = new DistrictRepository(KinderData);
    const districtSearch = district.findAllMatches(searchString);
    // let spread = {...districtSearch}

    this.setState(
      {data: districtSearch}
    );
  }

  handleCompare = (card) => {
    const district = new DistrictRepository(KinderData);
    let avgData = {};
    const { data, display } = this.state;
    let schoolToCompare = data.find(school => {
      return school.location === card;
    });
    display.push(schoolToCompare);
    
    if (display.length > 2) {
      display.shift();
    }
    if (display.length === 2) {
      avgData = district.compareDistrictAverages(
        display[0].location, 
        display[1].location);
    }
    this.setState(
      {
        display : display, 
        avgCard: avgData}
    );

  }

  render() {
    const { data, display, avgCard } = this.state;
    return (
      <div className="app">
        <DistrictSearch handleSubmit={this.handleSearch} />
        <CompareContainer  
          display={ display } 
          handleCompare={this.handleCompare} 
          avgCard={ avgCard } />
        <CardContainer data={ data } handleCompare={this.handleCompare} />
      </div>
    );
  }
}

export default App;
