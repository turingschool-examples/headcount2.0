import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer'
import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from "./helper.js"
import Search from './Search'

const districts = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts,
      filteredDistricts: [],
      selectedCards: [],
      comparedCard: {}
    }
  }

  filterDistricts = (value) => {
    this.setState({ filteredDistricts: this.state.districts.findAllMatches(value) })
  }
  
  displaySelected = (location) => {
    if(this.state.selectedCards.length === 2) {
      return 
    }
    const newSelected = this.state.districts.findByName(location)
    let selectedCards = [...this.state.selectedCards, newSelected]
    this.setState({ selectedCards })
  }

  displayCompared = (location) => {
    if(this.state.selectedCards.length === 1) {
    this.setState({ comparedCard: this.state.districts.compareDistrictAverages(this.state.selectedCards[0].location, location)})
    }
  }

  // componentDidMount = () => {
  //   const districts = new DistrictRepository(kinderData)
  //   console.log(districts)
  //   this.setState({ districts })
  // }

  render() {
    return (
      <div className="App">
        <CardContainer districts={this.state.districts}
          filteredDistricts={this.state.filteredDistricts}
          selectedCards={this.state.selectedCards}
          displaySelected={this.displaySelected}
          displayCompared={this.displayCompared} 
          comparedCard={this.state.comparedCard}
        />
        <Search filterDistricts={this.filterDistricts} />
      </div>
    );
  }
}

export default App;
