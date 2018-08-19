import React, { Component } from 'react';
import DistrictRepository from './helper'
import './App.css';
import kinderData from './data/kindergartners_in_full_day_program.js';
import CardContainer from './CardContainer';
import Search from './Search';

const allDistricts = new DistrictRepository(kinderData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectedCards: []
    };
  }

  componentDidMount() {
    this.updateCards();
  }

  updateCards = (string) => {
    const data = allDistricts.findAllMatches(string);
    this.setState({
      data
    }) 
  }

  selectCards = (location) => {
    const selectedCard = allDistricts.findByName(location)
    const selectedCards = [...this.state.selectedCards, selectedCard]

    const toggleClass = this.state.data.forEach(card => {
      if(card.location === selectedCard.location) {
        card.selected = true;
        console.log(selectedCard)
      } 
    })
    this.setState({ selectedCards })

      this.compareCards(this.state.selectedCards)
  }

  compareCards = (cards) => {
      if(this.state.selectedCards.length === 2) {
        const district1 = this.state.selectedCards[0].location
        const district2 = this.state.selectedCards[1].location
        
        var compareObject = allDistricts.compareDistrictAverages(district1, district2)
    }


  }

  render() {
    return (
      <div className="headerContainer">
        <h1>HeadCount 2.0</h1>
        <Search 
          updateCards={this.updateCards}
        />
        <CardContainer
          data={this.state.selectedCards}
          selectCards={this.selectCards}
          selected={ false }
        />
        <CardContainer 
          data={this.state.data} 
          selectCards={this.selectCards}
        />
      </div>
    );
  }
}

export default App;
