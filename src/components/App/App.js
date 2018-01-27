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

  selectCard = (e, id) => {
    if(this.state.selectedCards.length === 2) {
      this.state.selectedCards.shift();
    }

    // if (this.state.selectedCards.length >= 1 && this.state.selectedCards[0].location === id ) {
    //   this.state.selectedCards.pop();
    // }

    const selectedCards = [...this.state.selectedCards, this.state.districtData[id]];

    this.setState({selectedCards})
    
    console.log(this.state.selectedCards);
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
          comparedCards={this.state.selectedCards}
          selectCard={this.selectCard} 
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}

export default App;
