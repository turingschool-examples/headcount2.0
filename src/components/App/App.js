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
      districtRepository: {},
      compareSchool1: '',
      compareSchool2: '',
      comparison: {},
      hideComparison: 'hide'
    };
  }

  componentDidMount = () => {
    this.getDistrictRepository(kinderData);
  }

  getDistrictRepository = (schoolData) => {
    let districtRepository = new DistrictRepository(schoolData);
    this.setState({ districtRepository, schoolData: districtRepository.data });
  }

  handleSearch = (event) => {
    this.setState({ 
      searchResults: this.state.districtRepository
        .findAllMatches(event.target.value)
    });
  }

  handleCompareCards = (schoolName) => {
    if (!Object.keys(this.state.compareSchool1).length) {
      let compareSchool1 = this.state.districtRepository.findByName(schoolName);
      this.setState({compareSchool1, hideComparison: 'displayOne'});
    } else {
      let compareSchool2 = this.state.districtRepository.findByName(schoolName);
      let comparison = this.state.districtRepository
        .compareDistrictAverages(this.state.compareSchool1.location, schoolName);
      this.setState({compareSchool2, comparison, hideComparison: 'displayAll'});
    }
  }

  render() {
    return (
      <div>
        <Control handleSearch={this.handleSearch} />
        <CompareContainer hideComparison={this.state.hideComparison} 
                          school1={this.state.compareSchool1}
                          school2={this.state.compareSchool2}
                          comparison={this.state.comparison}
        />

        {
          !this.state.searchResults.length &&
          <CardContainer 
            schoolData={this.state.schoolData}
            handleCompareCards={this.handleCompareCards}
          />
        }

        {
          this.state.searchResults.length > 0 &&
          <CardContainer
            schoolData={this.state.searchResults}
            handleCompareCards={this.handleCompareCards}
          />
        }
        
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts