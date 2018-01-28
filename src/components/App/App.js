import React, { Component } from 'react';
import Control from '../Control/Control';
import CardContainer from '../CardContainer/CardContainer';
import CompareContainer from '../CompareContainer/CompareContainer';
import DistrictRepository from '../../helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolData: {},
      searchResults: [],
      searchError: false,
      districtRepository: {},
      comparisonData: []
    };
  }

  componentDidMount = () => {
    this.getDistrictRepository(kinderData);
  }

  getDistrictRepository = (schoolData) => {
    let districtRepository = new DistrictRepository(schoolData);
    this.setState({ districtRepository, schoolData: districtRepository.data });
  }

  handleSearch = (searchTerm) => {
    let searchResults = this.state.districtRepository
      .findAllMatches(searchTerm);
    let searchError = this.toggleSearchError(searchTerm, searchResults);
    this.setState({ searchResults, searchError });
  }

  toggleSearchError = (searchTerm, searchResults) => {
    return searchResults.length === 0 && searchTerm.length > 0 ? true : false;
  }

  handleCompareCards = (schoolName) => {
    if (!this.state.comparisonData.length) {
      let school = this.state.districtRepository.findByName(schoolName);
      let comparisonData = [...this.state.comparisonData, school];
      
      this.setState({ comparisonData });

    } else if (schoolName !== this.state.comparisonData[0].location) {
      let school = this.state.districtRepository.findByName(schoolName);
      let comparison = this.state.districtRepository
        .compareDistrictAverages(
          this.state.comparisonData[0].location, schoolName);
      let comparisonData = [...this.state.comparisonData, school, comparison];
      this.setState({ comparisonData });
    }
  }

  removeComparison = () => {
    this.setState({ comparisonData: [] });
  }

  render() {
    return (
      <div>
        <Control 
          handleSearch={ this.handleSearch }
          searchError={ this.state.searchError }
        />
        <CompareContainer
          handleCompareCards={ this.handleCompareCards }
          comparisonData={ this.state.comparisonData }
          removeComparison={ this.removeComparison }
        />

        {
          !this.state.searchResults.length &&
          <CardContainer 
            schoolData={ this.state.schoolData }
            handleCompareCards={ this.handleCompareCards }
          />
        }

        {
          this.state.searchResults.length > 0 &&
          <CardContainer
            schoolData={ this.state.searchResults }
            handleCompareCards={ this.handleCompareCards }
          />
        }
        
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts