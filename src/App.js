import React, { Component } from 'react';
import DistrictRepository from './helper.js';
import data from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer.js';
import './App.css';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
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

  render() {
    return (
      <div>
          <h1> HeadCount 2.0</h1>
          <Search displaySearch={this.displaySearch}/>
          <CardContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
