import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search'
import CardContainer from '../CardContainer/CardContainer.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import districtRepository from '../../helper.js';
import ComparedCards from '../ComparedCards/ComparedCards.js'
const district = new districtRepository(kinderData);

class App extends Component {
  constructor() {
    super()
    this.state = {
      districtData: district.data,
      selectedCards: []
    }
  }

  handleSubmit = (query) => {
    const matches = district.findAllMatches(query)

    const districtData = matches.reduce((obj, match) => {
      if (!obj[match]) {
        obj[match] = district.data[match]
      }
      return obj
    }, {})
    this.setState({districtData})
  }

  selectCard = (id) => {
    if(this.state.selectedCards.length === 3) {
      this.state.selectedCards.shift()
    }

    const selectedCards = [...this.state.selectedCards, this.state.districtData[id]]
    this.setState({selectedCards})
  }

  render() {
    return (
      <div className="App">
        <Search handleSubmit={this.handleSubmit}/>
        {
          this.state.selectedCards.length > 0 &&
          <ComparedCards 
            selectedCards={this.state.selectedCards}
            selectCard={this.selectCard}
          />
        }
        <CardContainer 
          districtData={this.state.districtData}
          comparedCards={this.state.comparedCards}
          selectCard={this.selectCard} 
        />
      </div>
    );
  }
}

export default App;
