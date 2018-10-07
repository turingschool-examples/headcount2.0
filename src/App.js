import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import './DataCard';
import kinderData from './testData.js';
import CardContainer from './CardContainer'
import SearchForm from './SearchForm'
import CompareCards from './CompareCards'
import DataCard from './DataCard'

class App extends Component {
  constructor(props) {
    super(props)
    let schoolData = new DistrictRepository(kinderData)

    this.state = {
      schoolCards: schoolData.findAllMatches()
    }
  }

  searchSchool = (string) => {
    let districtData = new DistrictRepository(kinderData);
    districtData.findAllMatches(string)
    this.setState({
      schoolCards: districtData.findAllMatches(string)
    })
  }

  compareTwoCards = (location, data) => {
    console.log(location, data)
  }


  render() {
    return (
      <div>
          <SearchForm searchSchool={this.searchSchool}/>
          <CompareCards district={this.state.schoolCards}/>
          <CardContainer schoolCards={this.state.schoolCards} compareTwoCards={this.compareTwoCards}/>
      </div>
    );
  }
}
export default App;
