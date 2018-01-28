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
      comparisonData: {}
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

    let comparisonData = Object.assign({}, this.state.comparisonData);
    
    if (!Object.keys(this.state.comparisonData).length) {
      let school1 = this.state.districtRepository.findByName(schoolName);
      
      comparisonData.school1 = school1;
      this.setState({ comparisonData });
    } else if (schoolName !== comparisonData.school1.location) {
      let school2 = this.state.districtRepository.findByName(schoolName);
      let comparison = this.state.districtRepository.compareDistrictAverages(
        comparisonData.school1.location, schoolName);
      
      comparisonData.school2 = school2;
      comparisonData.comparison = comparison;
      this.setState({ comparisonData });
    }
  }

  removeComparison = () => {
    this.setState({ comparisonData: {} });
  }

  render() {
    let cardContainer = !this.state.searchResults.length 
      ?  
      <CardContainer 
        schoolData={ this.state.schoolData }
        handleCompareCards={ this.handleCompareCards }
        comparisonData={ this.state.comparisonData }
      />
      :
      <CardContainer
        schoolData={ this.state.searchResults }
        handleCompareCards={ this.handleCompareCards }
        comparisonData={ this.state.comparisonData }
      />;

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

        { cardContainer }
      </div>
    );
  }
}

export default App;

//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts