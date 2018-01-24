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
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
          this.getDistrictRepository(kinderData);
  }

  getDistrictRepository(schoolData) {
    let districtRepository = new DistrictRepository(schoolData);
    this.setState({ districtRepository, schoolData: districtRepository.data })
  }

  handleSearch(e) {
    this.setState({ 
      searchResults: this.state.districtRepository
                      .findAllMatches(e.target.value)
    })
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
          this.state.searchResults.length > 0 &&
          <CardContainer schoolData={this.state.searchResults} />
        }
        
      </div>
    );
  }
}

export default App;


//icons by Icon Pond: https://www.flaticon.com/authors/popcorns-arts