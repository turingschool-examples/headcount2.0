import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import '../styles/App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      districtRepository: null,
      districtsArray: null,
      comparisonArray: []
    }
  }

  componentDidMount() {
    this.retrieveSchoolData(kinderData)
  }

  retrieveSchoolData = (schoolData) => {
    const districtRepository = new DistrictRepository(schoolData)
    const districtsArray = districtRepository.findAllMatches()
    this.setState({ districtRepository, districtsArray })
  }

  handleSearch = (userInput) => {
    const userSearch = this.state.districtRepository.findAllMatches(userInput)
    this.setState({
      districtsArray: userSearch
    })
  }

  handleSelection = (location) => {
    const comparisonArray = this.state.comparisonArray;
    let newState;
    const locationToCompare = this.state.districtsArray.find(district => district.location === location);
    if (!comparisonArray.length) {
      
      newState = [...comparisonArray, locationToCompare ];
    } else if (comparisonArray.length === 1 && comparisonArray[0].location !== location){
      newState = [...comparisonArray, this.state.districtRepository.compareDistrictAverages(comparisonArray[0].location, locationToCompare.location), locationToCompare];
    } else if (comparisonArray.length === 1 && comparisonArray[0].location === location) {
      newState = [];
    } else if (comparisonArray.length === 3) {
      newState = comparisonArray.filter(item => item.location && item.location !== location);
    }
    this.setState({comparisonArray: newState});
  }

  render() {
    return (
      <div>
        <Header search={this.handleSearch}/>
        {this.state.districtRepository && <Main 
                                          districts={this.state.districtsArray} 
                                          handleSelection={this.handleSelection}
                                          cards={this.state.comparisonArray}
                                          />}
      </div>
    );
  }
}

export default App;
