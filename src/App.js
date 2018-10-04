import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

import './App.css';
import CardContainer from './CardContainer.js'
import SearchForm from './SearchForm.js'

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
          <SearchForm filterCards={this.filterCards} />
          <CardContainer districts={data.findAllMatches(schoolName)} />
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default App;
