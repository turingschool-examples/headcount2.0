import React, { Component } from 'react';
import Control from '../Control/Control';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolData: {},
      searchArray: [],
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let district = this.getCleanData(kinderData);
    this.setState({
      schoolData: district,
    })
  }

  getCleanData(schoolData) {
    return new DistrictRepository(schoolData).data
  }

  handleSearch(e) {
    let schoolsToSearch = Object.keys(this.state.schoolData);
    let array = schoolsToSearch.filter( schoolName => schoolName.includes(e.target.value.toUpperCase()));
    this.setState({
      searchArray: array,
    })
  }

  render() {
    return (
      <div>
        <Control handleSearch={this.handleSearch}/>
        <CardContainer schoolData={this.state.schoolData} />
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts