import React, { Component } from 'react';
import Control from '../Control/Control';
import CardContainer from '../CardContainer/CardContainer';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolData: {},
      searchResults: [],
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
    let searchResults = schoolsToSearch.filter( schoolName => schoolName
      .includes(e.target.value.toUpperCase()))
      .map( schoolName => this.state.schoolData[schoolName]);
    this.setState({searchResults})
  }

  render() {
    return (
      <div>
        <Control handleSearch={this.handleSearch}/>

        {
          !this.state.searchResults.length &&
          <CardContainer schoolData={this.state.schoolData} />
        }

        {
          this.state.searchResults.length &&
          <CardContainer schoolData={this.state.searchResults} />
        }
        
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts