import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import './DataCard';
import kinderData from './testData.js';
import CardContainer from './CardContainer';
import SearchForm from './SearchForm';
import CompareCards from './CompareCards';
let dataArr = [];


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

  // handleArray = (compareArray, schoolName) => {
  //   if(compareArray.length === 1){
  //     compareArray.pop(schoolName)
  //     return compareArray
  //   } else if (compareArray.length === 2) {
  //     let result = compareArray.find(school => {
  //       if (school !== schoolName) {
  //         return school
  //       }
  //     })
  //   return [result]
  //   }
  // }

  compareTwoCards = (location, data) => {
    let schoolArray = this.state.compareSchool;
    

    if (schoolArray.length < 2 && !schoolArray.includes(location)){
      schoolArray.push(location)
    } 
    // else if (schoolArray.length <= 2 && schoolArray.includes(location)){ 
    //   schoolArray = this.handleArray(schoolArray, location)
    // } 
    else if (schoolArray.length === 2) {
      schoolArray.shift();
      schoolArray.push(location)
    }

    
    // dataArr.push(data)
    if (dataArr.length < 2 && !dataArr.includes(data)){
      dataArr.push(data)
    } 
    if (schoolArray.length === 2 && !dataArr.includes(data)) {
      // dataArr.push(data)

      dataArr.shift();
      dataArr.push(data)
     
    } 

    // console.log('index 0', dataArr[0], 'index 1', dataArr[1])

    this.setState({
      compareSchool: schoolArray,
      compareData: dataArr
    })
  }


  render() {
    return (
      <div>
        <SearchForm searchSchool={this.searchSchool}/>
        <CompareCards district={this.state.schoolCards} compareSchool={this.state.compareSchool} compareData={this.state.compareData} compareTwoCards={this.compareTwoCards}/>
        <CardContainer schoolCards={this.state.schoolCards} compareTwoCards={this.compareTwoCards}/>
      </div>
    );
  }
}
export default App;
