import React, { Component } from 'react';
import './App.css';
import KinderData from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtArray: [],
    }
  }

  retrieveData = (userInput = '') =>{
    const district = new DistrictRepository(KinderData);
    const schools = district.findAllMatches(userInput);
    this.setState({ districtArray: schools})
  }

  // filterSchools = (userInput) => {

  //   this.setState({districtArray: userInput});
  // }
// Need a function that calls findAllMatches with
// the state from SearchBar

  componentDidMount() {
    this.retrieveData()
  }

  render() {
    return (
      <div>
        <SearchBar filterSchools={this.retrieveData}/>
        <CardContainer schools={this.state.districtArray}/>
      </div>
    );
  }
}

export default App;
