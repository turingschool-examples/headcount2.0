import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import './DataCard';
import kinderData from './testData.js';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import CompareCards from './CompareCards';

class App extends Component {
  constructor(props) {
    super(props);
    let schoolData = new DistrictRepository(kinderData);

    this.state = {
      schoolCards: schoolData.findAllMatches(),
      compareSchool: []
    };
  }

  searchSchool = (string) => {
    let districtData = new DistrictRepository(kinderData);
    districtData.findAllMatches(string);
    this.setState({
      schoolCards: districtData.findAllMatches(string)
    });
  }

  handleArray = (compareArray, schoolName) => {
    if(compareArray.length === 1){
      compareArray.pop(schoolName)
      return compareArray
    } else if (compareArray.length === 2) {
      let result = compareArray.find(school => {
        if (school !== schoolName) {
          return school
        }
      })
    return result
    }
  }


  compareTwoCards = (location, data) => {
    console.log(location, data);

    let schoolArray = this.state.compareSchool;

    if (schoolArray.length < 2 && !schoolArray.includes(location)){
      schoolArray.push(location)
    } else if (schoolArray.length <= 2 && schoolArray.includes(location)){ 
      schoolArray = this.handleArray(schoolArray, location)
    } else if (schoolArray.length === 2) {
      schoolArray.shift();
      schoolArray.push(location)
    }

    this.setState({
      compareSchool: schoolArray,
      compareData: data
    })
    // return location;
  }


  render() {
    return (
      <div>
        <SearchForm searchSchool={this.searchSchool}/>
        <CompareCards district={this.state.schoolCards} compareSchool={this.state.compareSchool} compareData={this.state.compareData}/>
        <CardContainer schoolCards={this.state.schoolCards} compareTwoCards={this.compareTwoCards}/>
      </div>
    );
  }
}
export default App;
