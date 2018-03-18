import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import DistrictRepository from '../helpers/helper.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import '../styles/App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      districtRepository: null,
      districtsArray: null,
      comparisonArray: [],
      currentDataTitle: ''
    };
  }

  componentDidMount() {
    this.retrieveSchoolData(kinderData);
  }

  retrieveSchoolData = (schoolData) => {
    const districtRepository = new DistrictRepository(schoolData);
    const districtsArray = districtRepository.findAllMatches();
    this.setState(
      { 
        districtRepository, 
        districtsArray, 
        currentDataTitle: schoolData.title
      }
    );
  }

  handleSearch = (userInput) => {
    const userSearch = this.state.districtRepository.findAllMatches(userInput);
    this.setState({
      districtsArray: userSearch
    });
  }

  clearComparisonArray = (location1, location2) => {
    let clearedComparison = [];
    this.updateComparisonArray(clearedComparison);
    this.updateSelectedFlag(location1);
    this.updateSelectedFlag(location2);
  }

  handleComparison = (location) => {
    this.updateSelectedFlag(location);
    const {comparisonArray} = this.fetchCurrentState(location);
    const inComparisonArray = comparisonArray.find(district => {
      return district.location === location;
    });
    inComparisonArray ? 
      this.removeCardFromComparison(location) 
      : this.addCardToComparison(location); 
  }

  updateSelectedFlag = (location) => {
    const { 
      newRepositoryState, 
      locationToCompare 
    } = this.fetchCurrentState(location);
    locationToCompare.selected = !locationToCompare.selected;
    let newDistrictArray = newRepositoryState.findAllMatches();  
    this.setState({
      districtsArray: newDistrictArray,
      districtRepository: newRepositoryState});
  }

  addCardToComparison = (location) => {
    const {
      locationToCompare, 
      comparisonArray
    } = this.fetchCurrentState(location);
    comparisonArray.push(locationToCompare);
    if (comparisonArray.length === 3) {
      let unselectedLocation = comparisonArray.shift();
      this.updateSelectedFlag(unselectedLocation.location);
    }
    this.updateComparisonArray(comparisonArray);
  }

  removeCardFromComparison = (location) => {
    const { comparisonArray } = this.fetchCurrentState(location);
    comparisonArray[0].location === location ? 
      comparisonArray.shift() 
      : comparisonArray.pop();
    this.updateComparisonArray(comparisonArray);
  }

  updateComparisonArray = (comparisonArray) => {
    this.setState({comparisonArray});
  }

  generateComparisons = (location1, location2) => {
    const districtRepository = this.state.districtRepository;
    return districtRepository.compareDistrictAverages(location1, location2);
  }

  fetchCurrentState = (location) => {
    return {
      locationToCompare: this.state.districtsArray.find(district => {
        return  district.location === location;
      }), 
      comparisonArray: [...this.state.comparisonArray], 
      newRepositoryState: Object.assign(new DistrictRepository(kinderData), 
        this.state.districtRepository) 
    };
  }

  render() {
    return (
      <div>
        <Header 
          search={this.handleSearch}
          currentData={this.state.currentDataTitle}/>
        {this.state.districtRepository && 
          <Main
            title={this.state.currentDataTitle} 
            districts={this.state.districtsArray} 
            handleComparison={this.handleComparison}
            cards={this.state.comparisonArray}
            clearedComparison={this.clearComparisonArray}
            generateComparisons={this.generateComparisons}
          />}
      </div>
    );
  }
}

export default App;
