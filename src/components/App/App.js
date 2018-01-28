import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import districtRepository from '../../helper.js';
import ComparedCards from '../ComparedCards/ComparedCards.js';
const district = new districtRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districtData: district.data,
      selectedCards: []
    };
  }

  handleSubmit = (query) => {
    const matches = district.findAllMatches(query);

    const districtData = matches.reduce((districtObj, match) => {
      if (!districtObj[match]) {
        districtObj[match] = district.data[match];
      }
      return districtObj;
    }, {});
    this.setState({districtData});
  }

  makeComparison = () => { 
    const d1 = this.state.selectedCards[0].location;
    const d2 = this.state.selectedCards[1].location;
    const averageObject =  district.compareDistrictAverages(d1, d2);
    return averageObject;
  }

  deselectCard = (id) => {
    let filteredArr = this.state.selectedCards.filter( card => card.location !== id )
    this.setState({ selectedCards: filteredArr })
  }

  selectCard = (id, e) => {
    if(this.state.selectedCards.length === 2) {
      this.state.selectedCards.shift();
    }

    if (this.state.selectedCards.length >= 1 && this.state.selectedCards[0].location === id ) {
      this.state.selectedCards.pop();
    }

    let selectedCards = [...this.state.selectedCards, this.state.districtData[id]];
    this.setState({selectedCards})
  }

  removeComparison = () => {
    this.setState({selectedCards: []})
  }


  render() {
    return (
      <div className="App">
        <h1>HEADCOUNT</h1>
        <Search handleSubmit={this.handleSubmit}/>
        {
          this.state.selectedCards.length > 0 &&
          <ComparedCards 
            selectedCards={this.state.selectedCards}
            selectCard={this.deselectCard}
            makeComparison={this.makeComparison}
            removeComparison={this.removeComparison}
          />
        }
        <CardContainer 
          districtData={this.state.districtData}
          comparedCards={this.state.selectedCards}
          selectCard={this.selectCard} 
        />
      </div>
    );
  }
}

export default App;
