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
        data: new DistrictRepository(kinderData),
        compareSelections: []
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

 addCompareSelections = (e) => {

  const card = e.target.closest('.card')
  const name = card.children[0].innerText

  const schoolObj = {...this.state.data.findAllMatches(name)} 

  this.setState({
    compareSelections: [{...schoolObj[0]}, ...this.state.compareSelections] 
  })
 }

 render() {
    const { districts, data, schoolName, compareSelections } = this.state
    if (districts.length > 0) { 
      return (
        <div>
          <h1>Headcount 2.0</h1>
          <CompareCard compareSelections={compareSelections} />
          <SearchForm filterCards={this.filterCards} />
          <CardContainer districts={data.findAllMatches(schoolName)} 
                        addCompareSelections={this.addCompareSelections}
          />
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
