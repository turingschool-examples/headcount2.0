import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper';
import './DataCard';
import kinderData from './testData.js';
import CardContainer from './CardContainer'
import SearchForm from './SearchForm'

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


  render() {
    return (
      <div>
          <SearchForm searchSchool={this.searchSchool}/>
          <CardContainer schoolCards={this.state.schoolCards} />
      </div>
    );
  }
}
export default App;
