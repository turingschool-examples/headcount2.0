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
      districtRepository: {},
      compareSchool1: '',
      comparison: {}
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
      this.setState({compareSchool1: schoolName});
    } else {
      let comparison = this.state.districtRepository
        .compareDistrictAverages(this.state.compareSchool1, schoolName);
      this.setState({comparison});
    }
  }

  render() {
    return (
      <div>
        <Control handleSearch={this.handleSearch}/>

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