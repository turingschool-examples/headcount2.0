import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import data from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer.js';
import './styles/App.css';
import Search from './Search.js';
import CompareCardContainer from './CompareCardContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      compareCard1: null,
      compareCard2: null
    }
  }

  componentDidMount() {
    const district = new DistrictRepository(data);
    this.setState({
      data: district.stats
    });
  }

  displaySearch = (searchValue) => {
    const district = new DistrictRepository(data);
    const searchedSchoolsArr = district.findAllMatches(searchValue);
    let searchedSchoolsObj = searchedSchoolsArr.reduce((acc, currSchool) => {
      acc[currSchool] = district.stats[currSchool];
      return acc;
    },{});
    this.setState({
      data: searchedSchoolsObj
    })
  }

  displaySelected = (card) => {
    const district = new DistrictRepository(data);
    const comparedCard = district.findByName(card.location);
    this.setState({compareCard1: comparedCard});
  }

  render() {
    return (
      <div className = "App">
          <h1 className="header"> 
          HeadCount 2.0
          </h1>
          <Search 
          displaySearch={this.displaySearch}
          />
          <CompareCardContainer 
          // appState = {this.state}
          compareCard1 = {this.state.compareCard1}
          />
          <CardContainer 
          data={this.state.data} 
          displaySelected={this.displaySelected} 
          />
      </div>
    );
  }
}

export default App;
