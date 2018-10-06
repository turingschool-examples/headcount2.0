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

  if (this.state.compareSelections.length < 2) {
    this.setState({
      compareSelections: [{...schoolObj[0]}, ...this.state.compareSelections] 
    })   
  } else {
    this.setState({
      compareSelections: [{...schoolObj[0]}]
    })
  }
 }

 render() {
    const { districts, data, schoolName, compareSelections } = this.state
    if (districts.length > 0) { 
      return (
        <div>
          <nav>
            <h1>HeadCount 2.0</h1>
            <SearchForm filterCards={this.filterCards} />
          </nav> 
          <CompareCard compareSelections={compareSelections} 
                       compareDistrictAverages={data.compareDistrictAverages}
          />
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
