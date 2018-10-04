import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

import './App.css';
import CardContainer from './CardContainer.js'
import SearchForm from './SearchForm.js'
import CompareCard from './CompareCard.js'

class App extends Component {
  constructor() {
    super() 
      this.state = {
        districts: [],
        schoolName: '',
        data: new DistrictRepository(kinderData)
    }
  }

  componentDidMount() {
    this.populateAllCards(kinderData)
  }

 populateAllCards = (data) => {
  const repository = new DistrictRepository(data)
  this.setState({
    districts: repository.findAllMatches()
  })
 }

 filterCards = (school) => {
  this.setState({
    schoolName: school
  })
 }

 render() {
    const { districts, data, schoolName } = this.state
    if (districts.length > 0) { 
      return (
        <div>
          <h1>Headcount 2.0</h1>
          <SearchForm filterCards={this.filterCards} />
          <CardContainer districts={data.findAllMatches(schoolName)} />
        </div>
      )
    } else {
      return (
        <div>
          <h1>Headcount 2.0</h1>
        </div>
      )
    }
  }
}

export default App;
