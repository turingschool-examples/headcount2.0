import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import CardContainer from './CardContainer.js';
import ComparisonContainer from './ComparisonContainer.js'
import DistrictRepository  from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
const districts = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: districts.stats,
      clickedCards: []
    }
  }

updateDistricts = (district) => {
  const foundDistricts = districts.findByName(district)
  this.setState({
    cards: {...foundDistricts}
  })
}

updateClickedCard = (district) => {
  const districtAvg = districts.findAverage(district)
  const districtStats = districts.findByName(district)
  this.setState({
    clickedCards: {districtStats}
  })
}

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm updateDistricts={this.updateDistricts}/>
        </header>
        <ComparisonContainer clickedCards={this.state.clickedCards.districtStats}/>
        <CardContainer 
          cards={this.state.cards}
          updateClickedCard={this.updateClickedCard}/>
      </div>
    );
  }
}

export default App;
