import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm.js';
import CardContainer from './CardContainer.js';
import DistrictRepository  from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
const districts = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: districts.stats
    }
  }

updateDistricts = (district) => {
  const foundDistricts = districts.findByName(district)
  console.log(foundDistricts)
  this.setState({
    cards: {...foundDistricts, key:Date.now()}
  })
}

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome To Headcount 2.0</h1>
          <SearchForm updateDistricts={this.updateDistricts}/>
        </header>
        {/* <ComparisonContainer /> */}
        <CardContainer cards={this.state.cards} cardAverage={this.cardAverage}/>
      </div>
    );
  }
}

export default App;
